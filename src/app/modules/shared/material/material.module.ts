import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    NoopAnimationsModule,
    MatListModule,
    MatIconModule,
    MatTableModule
  ],
  declarations: [],
  exports: [
    MatListModule,
    MatIconModule,
    MatTableModule
  ],
})
export class MaterialModule { }
