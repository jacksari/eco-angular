import { Component } from '@angular/core';
import { asideMenu, IAsideMenuAdmin } from './menuAside';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  asideMenu: IAsideMenuAdmin[] = asideMenu;
}
