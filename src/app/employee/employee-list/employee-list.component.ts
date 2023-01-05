import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/employee';
import{EmployeeService} from 'src/app/shared/employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    console.log("Supriya");
    this.getAllEmployeesForComponent();


  }

  //1 Get method for all employees
  getAllEmployeesForComponent(){
    //call service here
    this.employeeService.getAllEmployee();
   this.employeeService.getAllEmployeeList().subscribe(
    (response)=>{console.log(console.log(response));
  })

  
  }

  //update employee
  updateEmployee(empId:number){
    console.log(empId);
  }

  //Delete Employee
  deleteEmployee(empId:number){
    console.log(empId);
    if(confirm('Are you sure to Delete this employee?')){
      console.log("call service for deletion");
    }
  }

  //PopulateForm When click td
  populateForm(employee:Employee){
    console.log(employee);
    this.employeeService.formEmployeeData=Object.assign({},employee)
  }

}
