import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { RoutenotfoundComponent } from './shared/routenotfound/routenotfound.component';

import { StreetModule } from './street/street.module';
import { ForceModule } from './force/force.module';

import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RoutenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    ForceModule,
    StreetModule,

    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
