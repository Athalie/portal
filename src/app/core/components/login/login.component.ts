import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {

  constructor(private api: ApiService, private user: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  tryLogin(username: string, password: string) {
    this.user.setToken(username);
    this.router.navigateByUrl('admin');
    // this.api.login(
    //   username,
    //   password
    // )
    //   .subscribe(
    //     r => {
    //       if (r.token) {
    //         this.user.setToken(r.token);
    //         this.router.navigateByUrl('/admin');
    //       }
    //     },
    //     r => {
    //       console.log(r);
    //     });
  }
}
