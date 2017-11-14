import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    NoopAnimationsModule,
    MatListModule
  ],
  declarations: [],
  exports: [
    MatListModule
  ],
})
export class MaterialModule { }
