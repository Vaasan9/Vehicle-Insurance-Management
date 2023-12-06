import { Component, OnInit } from '@angular/core';

import { ClaimsService } from 'src/app/services/claims.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  claimsDetails:any;
  
  message:any;
  claims = {policyNumber:'',mobileNumber:'',reason:''}
  constructor(private claimsService:ClaimsService) { 
    this.getClaimDetails();
  }

  ngOnInit(): void {
    let resp=this.claimsService.doClaim(this.claims);
   resp.subscribe((data: any)=>this.message=data);
   console.log(resp);
   this.getClaimDetails();
  }

  public claimsNow(){
   let resp=this.claimsService.doClaim(this.claims);
   resp.subscribe((data: any)=>this.message=data);
   console.log(resp);
   this.getClaimDetails();
  }

  public getClaimDetails(){
    this.claimsService.getClaims().subscribe(
      (resp) =>{
        console.log(resp);
        this.claimsDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
