import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeomapComponent } from './geomap/geomap.component';
import { EnergyPieComponent } from './energy-pie/energy-pie.component';
import { EnergyGraphComponent } from './energy-graph/energy-graph.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    GeomapComponent,
    EnergyPieComponent,
    EnergyGraphComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
