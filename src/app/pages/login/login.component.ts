import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
               private alertService: AlertService ) {
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

    this.authenticationService.login(user)
      .subscribe(
        user => {
          if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.router.navigate([ this.returnUrl ]);
            this.rememberLogin && this.authenticationService.logout();
          }
        },
        _ => {
          this.alertService.error(`Пользователь с электронным адресом ${this.f.email.value} не найден.`);
        });
  }

  ngOnDestroy() {
    this.bodyClasses.forEach(className => this.renderer.removeClass(document.body, className));
  }
}
