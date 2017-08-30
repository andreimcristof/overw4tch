import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'app/modules/shared/header/header.component';
import { RoutenotfoundComponent } from 'app/modules/shared/routenotfound/routenotfound.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent, RoutenotfoundComponent
  ],
  exports: [
    HeaderComponent, RoutenotfoundComponent
  ]
})
export class SharedModule { }
