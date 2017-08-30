import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreetService } from './street.service';
import { StreetComponent } from './street.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StreetComponent],
  providers: [StreetService]
})
export class StreetModule { }
