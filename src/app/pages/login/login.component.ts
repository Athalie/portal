import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService, AlertService } from '../../services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit, OnDestroy {
  bodyClasses: string[] = 'page-login-v3 layout-full'.split(' ');
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor( private formBuilder: FormBuilder,
               private route: ActivatedRoute,
               private router: Router,
               private authenticationService: AuthenticationService,
               private alertService: AlertService ) {
  }

  ngOnInit() {
    this.bodyClasses.forEach(token => document.getElementsByTagName('body')[ 0 ].classList.add(token));

    this.loginForm = this.formBuilder.group({
      email: [ '', Validators.required ],
      password: [ '', Validators.required ]
    });

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams[ 'returnUrl' ] || '/dashboard';
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    const user = {email: this.f.email.value, password: this.f.password.value};

    this.authenticationService.login(user)
      .subscribe(_ => {
            this.router.navigate([ this.returnUrl ]);
            localStorage.setItem('currentUser', JSON.stringify(user));
        },
        error =>  this.alertService.error(`Пользователь с электронным адресом ${this.f.email.value} не найден.`)
      );
  }

  ngOnDestroy() {
    this.bodyClasses.forEach(token => document.getElementsByTagName('body')[ 0 ].classList.remove(token));
  }


}
