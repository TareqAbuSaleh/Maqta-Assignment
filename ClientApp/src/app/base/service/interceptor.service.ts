import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders
} from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize, delay } from "rxjs/operators";


@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
  //  this.loaderService.show();
  let token = localStorage.getItem('token');
  if(token == undefined || token == 'undefined'|| token == null){
    token = "";
    }
    const requestToSend = req.clone({
      headers: req.headers.set("Authorization", "Bearer "+token)
    });
    return next.handle(requestToSend).pipe(
      delay(1000),
      finalize(() =>console.log("done"))
    );
  }
}
