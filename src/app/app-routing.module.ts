import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeomapComponent } from './pages/geomap/geomap.component';
import { EnergyPieComponent } from './pages/energy-pie/energy-pie.component';
import { EnergyGraphComponent } from './pages/energy-graph/energy-graph.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard, LoginGuard } from './helpers/guards';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent,  canActivate: [ LoginGuard ]},
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [ AuthGuard ],
    children: [
      {path: '', component: GeomapComponent},
      {path: 'energy-pie', component: EnergyPieComponent},
      {path: 'energy-graph', component: EnergyGraphComponent} ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}
