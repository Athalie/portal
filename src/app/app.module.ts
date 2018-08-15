import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeomapComponent } from './geomap/geomap.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { EnergyPieComponent } from './energy-pie/energy-pie.component';
import { EnergyGraphComponent } from './energy-graph/energy-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    GeomapComponent,
    ConfigurationComponent,
    EnergyPieComponent,
    EnergyGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
