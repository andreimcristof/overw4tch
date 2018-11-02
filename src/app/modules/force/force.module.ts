import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ForceService } from './services/force.service';
import { ListForcesComponent } from './components/listforces/listforces.component';
import { ForceComponent } from './components/force/force.component';
import { MaterialModule } from 'app/modules/shared/material/material.module';
import { HttpClientModule} from '@angular/common/http'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [ListForcesComponent, ForceComponent],
  exports: [ListForcesComponent, ForceComponent],
  providers: [ForceService]
})
export class ForceModule { }
