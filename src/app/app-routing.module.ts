import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationComponent } from './configuration/configuration.component';
import { GeomapComponent } from './geomap/geomap.component';
import { EnergyPieComponent } from './energy-pie/energy-pie.component';
import { EnergyGraphComponent } from './energy-graph/energy-graph.component';

const routes: Routes = [
  { path: '', component: GeomapComponent },
  { path: 'configuration', component: ConfigurationComponent },
  { path: 'energy-pie', component: EnergyPieComponent },
  { path: 'energy-graph', component: EnergyGraphComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
