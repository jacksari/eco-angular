import { Component } from '@angular/core';
import { IUser } from 'src/app/modules/auth/_services/auth';
import { AuthService } from 'src/app/modules/auth/_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public user: IUser | null = null;
  constructor(public authservice: AuthService) {}

  ngOnInit() {
    this.user = this.authservice.user;
  }

  getUser() {
    return this.authservice.user;
  }

  logout() {
    this.user = null;
    this.authservice.logout();
  }
}
