import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { EnergyGraphComponent } from './pages/energy-graph/energy-graph.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EnergyPieComponent } from './pages/energy-pie/energy-pie.component';
import { GeomapComponent } from './pages/geomap/geomap.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationService, AlertService, UserService, AppService } from './services';
import { AuthGuard } from './helpers/guards/auth.guard';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EnergyGraphComponent,
    EnergyPieComponent,
    GeomapComponent,
    DashboardComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    AlertService,
    UserService,
    AppService,
    CookieService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
