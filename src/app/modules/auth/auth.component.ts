import { Component } from '@angular/core';

declare var $: any;
declare function initPageEcommerce([]): any;

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  constructor() {
    setTimeout(() => {
      initPageEcommerce($);
    }, 0);
  }
}
