import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sales } from 'src/app/shared/sales';
import{SalesService} from 'src/app/shared/sales.service';
@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent implements OnInit {
  //declare variables
  term:string;
  page:number;

  constructor(public salesService: SalesService, private router:Router ) { }

  ngOnInit(): void {
    console.log("Supriya");
    this.getAllSalesForComponent();


  }

  //1 Get method for all employees
  getAllSalesForComponent(){
    //call service here
    this.salesService.getAllSales()
   this.salesService.getAllSalesList().subscribe(
    (response)=>{console.log(console.log(response));
  })

  
  }

  //update employee
  updateSales(visitId:number,sales:Sales){
    console.log(visitId);
    //navigate to Edit Form with selected employee details
    this.router.navigate(['salesadd',visitId]);
    this.salesService.formSalesData=Object.assign({},sales);


  }

  //Delete Employee
  deleteEmployee(visitId:number){
    console.log(visitId);
    if(confirm('Are you sure to Delete this employee?')){
      console.log("call service for deletion");
    }
  }

  //PopulateForm When click td
  populateForm(sales:Sales){
    console.log(sales);
    this.salesService.formSalesData=Object.assign({},sales)
  }

}
