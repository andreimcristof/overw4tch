import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';

import { StreetModule } from './street/street.module';
import { ForceModule } from './force/force.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ForceModule,
    StreetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
