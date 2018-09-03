import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService, AlertService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit, OnDestroy {
  bodyClasses: string[] = 'animsition page-login-v3 layout-full'.split(' ');
  loginForm: FormGroup;
  submitted: boolean = false;
  rememberLogin: boolean = true;
  returnUrl: string;

  constructor( private renderer: Renderer2,
               private formBuilder: FormBuilder,
               private route: ActivatedRoute,
               private router: Router,
               private authenticationService: AuthenticationService,
               private alertService: AlertService,
               private cookies: CookieService) {
  }

  ngOnInit() {
    this.bodyClasses.forEach(className => this.renderer.addClass(document.body, className));

    this.loginForm = this.formBuilder.group({
      email: [ '', Validators.required ],
      password: [ '', Validators.required ],
      rememberLogin: this.rememberLogin
    });
    this.returnUrl = this.route.snapshot.queryParams[ 'returnUrl' ] || '/dashboard';
  }

  get f() {
    return this.loginForm.controls;
  }

  handleRememberLoginCheck(e){
    this.rememberLogin = e.target.checked;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const user = {email: this.f.email.value, password: this.f.password.value};

    localStorage.getItem('currentUser') && this.authenticationService.logout();
    this.cookies.deleteAll();
    this.authenticationService.login(user)
      .subscribe(
        () => {// TODO вынести это отсюда
            localStorage.setItem('currentUser', JSON.stringify(this.cookies.getAll()));
            this.router.navigate([ this.returnUrl ]);
            !this.rememberLogin && this.authenticationService.logout();
        },
        () => {
          this.alertService.error(`Пользователь с электронным адресом ${this.f.email.value} не найден.`);
        });
  }

  ngOnDestroy() {
    this.bodyClasses.forEach(className => this.renderer.removeClass(document.body, className));
  }
}
