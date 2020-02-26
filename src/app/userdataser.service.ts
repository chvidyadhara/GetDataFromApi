import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserdataserService {
employeerurl = "https://api.mlab.com/api/1/databases/angularjs/collections/employeelist?apiKey=NwUz6Go9-PSOYsRJS9tLR-p5idELeFx1";
  constructor(private http:HttpClient) { }
    getuserdata(){
      return this.http.get(this.employeerurl);
    }
}
