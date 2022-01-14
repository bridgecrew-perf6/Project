import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postEmployee(data : any){
    return this.http.post<any>("http://localhost:3000/signUpUsers", data)
    .pipe(map((res)=>{
      return res;
    }))
  }

  getEmployee(){
    return this.http.get<any>("http://localhost:3000/signUpUsers")
    .pipe(map((res)=>{
      return res;
    }))
  }

  postreqs(reqs : any){
    return this.http.post<any>("http://localhost:3000/fundreqs", reqs)
    .pipe(map((res)=>{
      return res;
    }))
  }
}
