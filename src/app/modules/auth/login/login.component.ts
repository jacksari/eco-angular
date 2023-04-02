import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = 'janasarii@gmail.com';
  password: string = '12345678';

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    // if (this.authService.user && this.authService.token) {
    //   this.router.navigate(['/']);
    // }
  }

  login() {
    if (!this.password || !this.email) return;
    // console.log('df', this.email, this.password);
    this.authService.login(this.email, this.password).subscribe((resp: any) => {
      // console.log('resp', resp);
      if (resp && !resp.error) {
        // Todo salio bien
        this.router.navigate(['/']);
      } else {
        if ((resp.error.error = 'Unauthorized')) {
          alert('algo esta mal');
          return;
        }
        // console.log('Error');
      }
    });
  }
}
