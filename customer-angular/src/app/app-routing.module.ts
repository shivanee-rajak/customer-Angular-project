import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddcustomerCodedrivenComponent } from './addcustomer-codedriven/addcustomer-codedriven.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

const routes: Routes = [
  {path:'',redirectTo:"customer-list",pathMatch:"full"},
  {path:"addcustomer-codedriven",component:AddcustomerCodedrivenComponent},
  {path:"add-customer" ,component:AddCustomerComponent},
  {path:"customer-details",component:CustomerDetailsComponent},
  {path:"customer-list",component:CustomerListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
