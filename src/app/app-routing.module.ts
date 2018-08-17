import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { GeomapComponent } from './geomap/geomap.component';
import { EnergyPieComponent } from './energy-pie/energy-pie.component';
import { EnergyGraphComponent } from './energy-graph/energy-graph.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: AppComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'energy-pie', component: EnergyPieComponent },
  { path: 'energy-graph', component: EnergyGraphComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
