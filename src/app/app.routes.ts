import { Routes } from '@angular/router';
import { RoutenotfoundComponent } from './shared/routenotfound/routenotfound.component';
import { ListForcesComponent } from './force/components/listforces/listforces.component';

export const AppRoutes : Routes = [
  { path: 'listforces', component: ListForcesComponent },
  { path: '', redirectTo: '/listforces', pathMatch: 'full' },
  { path: '**', component: RoutenotfoundComponent }
]
