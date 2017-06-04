import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForceService } from './services/force.service';
import { ListForcesComponent } from './components/listforces/listforces.component'; 

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListForcesComponent],
  providers: [ForceService]
})
export class ForceModule { }
