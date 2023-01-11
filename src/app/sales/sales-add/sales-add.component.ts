import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SalesService } from 'src/app/shared/sales.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sales-add',
  templateUrl: './sales-add.component.html',
  styleUrls: ['./sales-add.component.scss']
})
export class SalesAddComponent implements OnInit {
  //declare variables
  _visitId:number;

  constructor(public SalesService:SalesService,private toastr: ToastrService,
    private rout:ActivatedRoute,private router:Router) { }

  ngOnInit(): void { //life cycle hook
    //get all methods
    // this.employeeService.getAllDepartments();
    this._visitId=this.rout.snapshot.params['_visitId'];
  }
  //Submit method
  onSubmit(form:NgForm){
    console.log(form)
    let _addvisitId=this.SalesService.formSalesData.visitId;
    if(_addvisitId==0 || _addvisitId==null){
      this.addSales(form);
      this.router.navigateByUrl("/saleslist")
     //window.location.reload();
    }
    else{
      this.editSales(form)
      this.router.navigateByUrl("/saleslist")
      //window.location.reload();
    }
    
  }

  //Insert 
  addSales(form?:NgForm){
    console.log("Inserting a Sales....")
    this.SalesService.insertSales(form.value).subscribe(
      (result)=>{
        console.log(result)
        this.toastr.success("Sales record has been inserted!","EmpAppv2023")
        this.router.navigateByUrl("/saleslist")
      },
      (error)=>{
        console.log(error)
        this.toastr.error("Something wrong.... try agaain ","EmpAppv2023")
        
      }
    );
  }

  //Update
  editSales(form?:NgForm){
    console.log("Updating..........")

    this.SalesService.updateSales(form.value).subscribe(
      (result)=>{
        console.log(result)
        this.toastr.success("Sales record has been inserted!","EmpAppv2023")
        this.router.navigateByUrl("/saleslist")

      },
      (error)=>{
        console.log(error)
        this.toastr.error("Something wrong.... try agaain ","EmpAppv2023")
      }
    );
  }
}
