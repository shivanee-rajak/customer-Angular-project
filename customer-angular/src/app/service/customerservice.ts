import { Injectable } from '@angular/core';
import { Customer } from '../model class/customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class CustomerService{

baseUrl="http://localhost:8585/customers";
constructor(private http: HttpClient){

}
addCustomer(customer:Customer):Observable<Customer>{
let url=this.baseUrl+"/add";
let observable:Observable<Customer>= this.http.post<Customer>(url,customer);
return observable;
}

getCustomerById(id:number):Observable<Customer>{
    let url = this.baseUrl+"/get/"+id;
    let observable:Observable<Customer> = this.http.get<Customer>(url);
    return observable;
}

getAllCustomers():Observable<Customer[]>{
    let url = "http://localhost:8585/customers";
    let observable:Observable<Customer[]>=this.http.get<Customer[]>(url);
    return observable;
}

removeCustomer(id:number):Observable<void>{
    let url = "/";
    let observable:Observable<void>=this.http.delete<void>(url);
    return observable;
}

/*
 customers:Customer[]=[];
 generateId:number=1;
 
 generatedId():number{
    //this.generateId;
   return this.generateId++;
 }
 addCustomer(customer:Customer){
     let id = this.generatedId();
     customer.id = id;
     this.customers.push(customer);
 }

 allCustomers():Customer[]{
     return this.customers;
 }

 findCustomerById(id:number):Customer{
     for(let customer of this.customers){
        if(customer.id==id){
            return customer;
        }
     }
     return null;
 }

    removeCustomer(id:number){
        for(let i=0;i<this.customers.length;i++){
            let customer= this.customers[i];
            if(customer.id==id){
                this.customers.splice(i,1);
            }
    }
}*/
}
