import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private http: HttpClient,
  ) { }


  newData: any;
  postData(data): Observable<any> {
    this.newData = data;
    return of(this.newData)
  };

  getData(): Observable<any> {
    console.log("return data", this.newData);
    return of(this.newData);
  }


}
