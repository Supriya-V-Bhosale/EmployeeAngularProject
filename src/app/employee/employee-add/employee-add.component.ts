import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  constructor(public employeeService:EmployeeService) { }

  ngOnInit(): void { //life cycle hook

  }
  //Submit method
  onSubmit(form:NgForm){
    console.log(form)
    let _addEmpId=this.employeeService.formEmployeeData.empId;
    if(_addEmpId==0 || _addEmpId==null){
      this.addEmployee(form);
      window.location.reload();
    }
    else{
      this.editEmployee(form)
      window.location.reload();
    }
    
  }

  //Insert 
  addEmployee(form?:NgForm){
    console.log("Inserting a employee....")
    this.employeeService.insertEmployee(form.value).subscribe(
      (result)=>{
        console.log(result)
      },
      (error)=>{
        console.log(error)
      }
    );
  }

  //Update
  editEmployee(form?:NgForm){
    console.log("Updating..........")

    this.employeeService.updateEmployee(form.value).subscribe(
      (result)=>{
        console.log(result)
      },
      (error)=>{
        console.log(error)
      }
    );
  }
}
