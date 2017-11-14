import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'app/modules/shared/header/header.component';
import { RoutenotfoundComponent } from 'app/modules/shared/routenotfound/routenotfound.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'app/modules/shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    HeaderComponent,
    RoutenotfoundComponent
  ],
  exports: [
    HeaderComponent,
    RoutenotfoundComponent,
    MaterialModule
  ]
})
export class SharedModule { }
