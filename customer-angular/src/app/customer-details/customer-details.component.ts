import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Customer} from '../model class/customer';
import { CustomerService } from '../service/customerservice';


@Component({
  selector: 'customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {
  customerService: CustomerService;
  
  constructor(customerService:CustomerService) { 
    this.customerService=customerService;
  }
customer :Customer;

findCustomer(form:any){
  let data = form.value;
  let id = data.customerId;
 let observable:Observable<Customer>= this.customerService.getCustomerById(id);
 observable.subscribe(
   customerArg=>{this.customer=customerArg},
   error=>{console.log("error inside customer details component"+error.message)}
 );
  
}
}
