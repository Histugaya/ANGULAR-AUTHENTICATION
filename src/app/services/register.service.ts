import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) {
}

httpOptions = {
  headers: new HttpHeaders({
  'Content-Type':  'application/json'
  })
};

baseUrl:string="http://localhost:62215/api/token/";

register(credentials){
    return this.http.post<boolean>(this.baseUrl+"register",JSON.stringify(credentials),this.httpOptions);

  }

}
