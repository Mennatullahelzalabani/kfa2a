import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LanguageInterceptorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // const lang = localStorage.getItem('lang') || 'en';
    // request = request.clone({
    //   setHeaders: {
    //     'accept-language': lang,
    //   },
    // });
    return next.handle(request);
  }
}
