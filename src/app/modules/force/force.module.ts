import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ForceService } from './services/force.service';
import { ListForcesComponent } from './components/listforces/listforces.component';
import { ForceComponent } from './components/force/force.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ListForcesComponent, ForceComponent],
  exports: [ListForcesComponent, ForceComponent],
  providers: [ForceService]
})
export class ForceModule { }
