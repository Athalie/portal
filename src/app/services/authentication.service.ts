import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';

@Injectable()
export class AuthenticationService {
  constructor( private http: HttpClient ) {
  }

  login( user: User ) { //TODO ответ обязательно специфицировать!!!
    return this.http.post<any>(`/portal/login/`, user)
  }

  logout() {
    this.http.get<any>(`/portal/logout/`)
      .subscribe(
        () => {
          localStorage.removeItem('currentUser');
        },
        error => { //TODO нужно ли что-то выводить?
          console.log(error);
        }
      );
  }
}
