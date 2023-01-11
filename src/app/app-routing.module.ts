import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesAddComponent } from './sales/sales-add/sales-add.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  {path:'' ,redirectTo:'saleslist', pathMatch:'full'},
 { path:'saleslist',component:SalesComponent},
 {path:'salesadd' ,component:SalesAddComponent},
 {path:'salesadd/:visitId',component:SalesAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
