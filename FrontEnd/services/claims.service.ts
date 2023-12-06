import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Claims } from './claims';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class ClaimsService {

  constructor(private http:HttpClient) { }


  public doClaim(claims: Claims){
    let userId=JSON.parse(localStorage.getItem('user1')!).userId;

    return this.http.post(`${baseUrl}/claim/addClaim/${userId}`,claims);
  }

  public getClaims(){
   // let userId=localStorage.getItem('user');
    return this.http.get(`${baseUrl}/claim/listAllClaims/`)
  }
}
