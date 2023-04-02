import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environments';
import { IUser } from './auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: IUser | null = null;
  token: String = '';

  constructor(private http: HttpClient, private router: Router) {
    // tiene que cargarse el usuario y token
    // console.log('url_back', environment.url_back);
    this.loadStorage();
  }

  loadStorage() {
    if (localStorage.getItem('token') && localStorage.getItem('user')) {
      this.token = localStorage.getItem('token') || '';
      this.user = JSON.parse(localStorage.getItem('user') as string) || null;
    } else {
      this.token = '';
      this.user = null;
    }
  }

  login(email: string, password: string) {
    let url = `${environment.url_back}/api/auth/login`;
    return this.http
      .post(url, {
        email,
        password,
      })
      .pipe(
        map((resp: any) => {
          if (resp.access_token) {
            return this.saveLocalStorageAndUser(resp);
          } else {
            return resp;
          }
        }),
        catchError((err: any) => {
          return of(err);
        })
      );
  }
  saveLocalStorageAndUser(resp: any) {
    if (resp.access_token && resp.user) {
      localStorage.setItem('token', resp.access_token);
      localStorage.setItem('user', JSON.stringify(resp.user));
      this.token = resp.access_token;
      this.user = resp.user;
      return true;
    } else {
      return false;
    }
  }

  register(name: string, email: string, password: string) {
    let url = `${environment.url_back}/api/auth/register`;
    return this.http
      .post(url, {
        name,
        email,
        password,
      })
      .pipe(
        map((resp: any) => {
          if (resp.access_token) {
            return this.saveLocalStorageAndUser(resp);
          } else {
            return resp;
          }
        }),
        catchError((err: any) => {
          return of(err);
        })
      );
  }

  logout() {
    this.user = null;
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
