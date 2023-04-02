import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../_services/auth';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  user: IUser = {
    name: 'jack sari',
    email: 'janasarii@gmail.com',
    password: '12345678',
  };

  constructor(public authService: AuthService, private router: Router) {}

  register() {
    this.authService
      .register(this.user.name, this.user.email, this.user.password as string)
      .subscribe((resp: any) => {
        // console.log('resp', resp);
        if (resp && !resp.error) {
          // Todo salio bien
          this.router.navigate(['/']);
        } else {
          if ((resp.status = 'Unauthorized')) {
            alert('algo esta mal');
            return;
          }
          // console.log('Error');
        }
      });
  }
}
