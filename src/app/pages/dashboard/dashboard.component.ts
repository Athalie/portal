import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, AppService } from '../../services';
import {TreeNode} from '../../models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit, OnDestroy {
  bodyClasses: string = "dashboard";
  menu: TreeNode[];

  constructor( private renderer: Renderer2,
               private router: Router,
               private authenticationService: AuthenticationService,
               private appService: AppService ) {

  }

  ngOnInit() {
    this.renderer.addClass(document.body, this.bodyClasses);  // TODO выкинуть document.body
    this.appService.getTopLevelMenu().subscribe(data => {
      this.menu = { ...data };
      },
      error => console.log(error));
  }

  onLogout() {
    this.authenticationService.logout();
    this.router.navigate([ '/login' ]);
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, this.bodyClasses);
  }
}
