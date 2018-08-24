import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit, OnDestroy {
  bodyClasses: string = "dashboard";
  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authenticationService: AuthenticationService) {

  }

  ngOnInit() {
    document.getElementsByTagName('body')[ 0 ].classList.add(this.bodyClasses);

    this.searchForm = this.formBuilder.group({
      siteSearch: [ '' ]
    });
  }

  onLogout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }


  ngOnDestroy() {
    document.getElementsByTagName('body')[ 0 ].classList.remove(this.bodyClasses);
  }

}
