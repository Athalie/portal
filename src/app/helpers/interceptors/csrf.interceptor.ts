import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CsrfInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if ((currentUser || {}).csrftoken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.csrftoken}`
        }
      });
    }
    return next.handle(request);
  }
}
