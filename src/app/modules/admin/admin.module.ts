import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [HomeComponent, AdminComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
