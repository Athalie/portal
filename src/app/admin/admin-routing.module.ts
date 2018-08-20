import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GeomapComponent } from './components/geomap/geomap.component';
import { EnergyPieComponent } from './components/energy-pie/energy-pie.component';
import { EnergyGraphComponent } from './components/energy-graph/energy-graph.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path: '', component: GeomapComponent},
      {path: 'energy-pie', loadChildren: './components/energy-pie/energy-pie.component#EnergyPieComponent'},
      {path: 'energy-graph', loadChildren: './components/energy-graph/energy-graph.component#EnergyGraphComponent'}
]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule {
}
