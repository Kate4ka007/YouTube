import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE, KEY_YOUTUBE } from '../../core/models/data';

@Injectable()
export class YoutubeInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const url = request.urlWithParams.replace('=', `=${KEY_YOUTUBE}`);
    const apiReq = request.clone({ url: `${BASE}${url}` });

    return next.handle(apiReq);
  }
}
