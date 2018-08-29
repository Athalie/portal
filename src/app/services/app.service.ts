import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { TopLevelMenuItem, TreeNode } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getTopLevelMenu() {
    return this.http.get<TopLevelMenuItem[]>('/portal/rest/classifiers/type_of_products/list/', {withCredentials: true})
      .pipe(map(menu => menu.map(item => new TreeNode(item, null, false))))
  }
}
