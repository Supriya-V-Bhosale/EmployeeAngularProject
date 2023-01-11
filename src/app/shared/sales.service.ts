import { Injectable } from '@angular/core';
import { Sales } from './sales';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment'
import { Observable } from 'rxjs';
// import { Department } from './depatment';
@Injectable({
  providedIn: 'root'
})
export class SalesService {
  //declare variables --global variable
  formSalesData: Sales=new Sales(); //single employee
  //list of Employee
  sales:Sales[]; //all employees
  // departments:Department[];

  constructor(private httpClient:HttpClient) { } //constructor injection :DI

  //get All Employees
  getAllSales(){
    this.httpClient.get(environment.apiUrl + '/api/salesVisit').toPromise().then(
      response=>{console.log(response);
      this.sales=response as Sales[];
      }
      );
  }


  //2 obervable Types
  getAllSalesList():Observable<any>{
      return this.httpClient.get(environment.apiUrl + '/api/salesVisit')
  }


  //3 Insert 
  insertSales(sales:Sales):Observable<any>{
    return this.httpClient.post(environment.apiUrl + '/api/salesVisit' ,sales)
  }

  //4 Update
  updateSales(sales:Sales):Observable<any>{
    return this.httpClient.put(environment.apiUrl + '/api/salesVisit' ,sales)
  }
 

  //
  // getAllDepartments():void{
  //   this.httpClient.get(environment.apiUrl + '/api/employees').toPromise().then(
  //     (response)=>{console.log(response);
  //     this.departments=response as Department[];
  //     }
  //     );

  // }

}
