import { Routes } from '@angular/router';
import { RoutenotfoundComponent } from 'app/modules/shared/routenotfound/routenotfound.component';
import { ListForcesComponent } from 'app/modules/force/components/listforces/listforces.component';
import { StreetComponent } from 'app/modules/street/street.component';
import { ForceComponent } from 'app/modules/force/components/force/force.component';
import { TestComponent } from 'app/modules/test/test.component';

export const AppRoutes : Routes = [
  { path: 'listforces', component: ListForcesComponent },
  { path: 'force/:id', component: ForceComponent },
  { path: 'street', component: StreetComponent },
  { path: 'test', component: TestComponent },
  { path: '', redirectTo: '/listforces', pathMatch: 'full' },
  { path: '**', component: RoutenotfoundComponent }
]
