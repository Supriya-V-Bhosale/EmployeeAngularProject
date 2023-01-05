import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path:'' ,redirectTo:'empolyeelist', pathMatch:'full'},
 { path:'empolyeelist',component:EmployeeComponent},
 {path:'employeeadd' ,component:EmployeeAddComponent},
 {path:'employeeadd/:empId',component:EmployeeAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
