import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  //declare variables
  _empId:number;

  constructor(public employeeService:EmployeeService,private toastr: ToastrService,
    private rout:ActivatedRoute) { }

  ngOnInit(): void { //life cycle hook
    //get all methods
    this.employeeService.getAllDepartments();
    this._empId=this.rout.snapshot.params['empId'];
  }
  //Submit method
  onSubmit(form:NgForm){
    console.log(form)
    let _addEmpId=this.employeeService.formEmployeeData.empId;
    if(_addEmpId==0 || _addEmpId==null){
      this.addEmployee(form);
     // window.location.reload();
    }
    else{
      this.editEmployee(form)
      //window.location.reload();
    }
    
  }

  //Insert 
  addEmployee(form?:NgForm){
    console.log("Inserting a employee....")
    this.employeeService.insertEmployee(form.value).subscribe(
      (result)=>{
        console.log(result)
        this.toastr.success("Employee record has been inserted!","EmpAppv2023")
      },
      (error)=>{
        console.log(error)
        this.toastr.error("Something wrong.... try agaain ","EmpAppv2023")
      }
    );
  }

  //Update
  editEmployee(form?:NgForm){
    console.log("Updating..........")

    this.employeeService.updateEmployee(form.value).subscribe(
      (result)=>{
        console.log(result)
        this.toastr.success("Employee record has been inserted!","EmpAppv2023")

      },
      (error)=>{
        console.log(error)
        this.toastr.error("Something wrong.... try agaain ","EmpAppv2023")
      }
    );
  }
}
