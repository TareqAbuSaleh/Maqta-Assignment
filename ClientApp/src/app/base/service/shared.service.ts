import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import configUrl from '../../../assets/config/config.json';
import { map } from 'rxjs/operators';
class RequestHistory {
  id?: string;
  requestName!: string;
  requestType!: string;
  status!: string;
  reason?: string;
  createdAt?: Date;
}
@Injectable({
  providedIn: 'root'
})
export class SharedService {
   HTTP_URL =configUrl.apiServer.url;

  constructor( private http: HttpClient) { }

  get<T>(url:string) {
   
      return this.http.get<T>(this.HTTP_URL +url).pipe(map(result => result));    


  }

  post<T>(url:string,inputData : T)  {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
  }); 
    return this.http.post<any>(this.HTTP_URL +url,inputData, {headers
    }).pipe(map(result => result));;
}
}
