import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesComponent } from './sales/sales.component';
import { SalesAddComponent } from './sales/sales-add/sales-add.component';
import {SalesListComponent } from './sales/sales-list/sales-list.component'
import{SalesService} from './shared/sales.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';

import { ToastrModule } from 'ngx-toastr';
import { EmployeeComponent } from './employee/employee.component';
@NgModule({
  declarations: [
    AppComponent,
    SalesComponent,
    SalesAddComponent,
    SalesListComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    Ng2SearchPipeModule ,
    NgxPaginationModule
  ],
  providers: [SalesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
