import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iEmployees } from './Employee_Interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseConnectionService {

  public databasePath:string="../assets/Employee_Data/EmpDatabase.json";

  constructor(public hobj:HttpClient) 
  {
  }

  public GetEmployeeDetails():Observable<iEmployees[]>
  {
 
      return this.hobj.get<iEmployees[]>(this.databasePath);
  
  }
}
