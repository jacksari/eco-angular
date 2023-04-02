import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { asideMenu, IAsideMenuAdmin } from '../sidebar/menuAside';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {
  menu: IAsideMenuAdmin | null = null;
  public subscriber: Subscription | undefined;

  constructor(public router: Router) {
    this.menu = asideMenu.filter((it) => it.path == this.router.url)[0];
  }

  ngOnInit() {
    this.subscriber = this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event) => {
        // console.log('The URL changed to: ' + event['url']);
        this.clickSelect()
      });
  }

  clickSelect() {
    this.menu = asideMenu.filter((it) => it.path == this.router.url)[0];
  }
}
