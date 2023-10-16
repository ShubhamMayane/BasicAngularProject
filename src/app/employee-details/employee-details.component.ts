import { Component } from '@angular/core';
import { DatabaseConnectionService } from '../database-connection.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  employeeData:any=[];


  constructor(public obj:DatabaseConnectionService)
  {

  }

  public getEmployeeData()
  { 
    this.obj.GetEmployeeDetails().subscribe(data=>this.employeeData=data);
  }

}
