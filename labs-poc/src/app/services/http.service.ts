import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { user } from 'src/app/modal/User'



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  api_Url="http://localhost:3000/members";

  getUsers(){
    return this.http.get<user[]>(this.api_Url);

  }
  
}
