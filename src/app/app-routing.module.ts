import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ConfigurationComponent} from './configuration/configuration.component';
import {GeomapComponent} from './geomap/geomap.component';

const routes: Routes = [
  {path: '', component: GeomapComponent},
  {path: 'configuration', component: ConfigurationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
