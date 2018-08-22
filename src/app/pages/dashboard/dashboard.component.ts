import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit, OnDestroy {
  bodyClasses: string = "dashboard";
  searchForm: FormGroup;

  constructor( private formBuilder: FormBuilder ) {

  }

  ngOnInit() {
    document.getElementsByTagName('body')[ 0 ].classList.add(this.bodyClasses);

    this.searchForm = this.formBuilder.group({
      siteSearch: [ '' ]
    });
  }


  ngOnDestroy() {
    document.getElementsByTagName('body')[ 0 ].classList.remove(this.bodyClasses);
  }

}
