import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portal';

  this.polyfillIEWidth();
  this.initBootstrap();

  this.setupMenubar();
  this.setupGridMenu();
  this.setupFullScreen();
  this.setupMegaNavbar();
  this.setupTour();
  this.setupNavbarCollpase();


}
