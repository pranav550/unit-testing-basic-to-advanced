import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  salSlip:string;
  constructor(private authService:AuthenticationService) {
    this.authService.authenticate();
   }

  ngOnInit(): void {
  }

  getSalarySlip(){
    if(this.authService.checkAuthentication()){
      this.salSlip ="Salary Slip";
    }
    this.salSlip ="Not Authenticated"; 
  }

}
