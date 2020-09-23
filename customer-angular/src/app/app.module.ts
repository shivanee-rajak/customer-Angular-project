import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import {StringLength} from './pipes/stringlength';
import {ReverseString} from './pipes/reversestring';
// import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from './service/customerservice';
import { AddcustomerCodedrivenComponent } from './addcustomer-codedriven/addcustomer-codedriven.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    CustomerDetailsComponent,
    CustomerListComponent,    
    StringLength,
    ReverseString,
     AddcustomerCodedrivenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [CustomerService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
