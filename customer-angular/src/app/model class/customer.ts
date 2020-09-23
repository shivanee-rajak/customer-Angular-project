
export class Customer{
    id:number
    name:string;
    balance:number;
  
    constructor(id:number,name : string,balance:number){
      this.id=id;
      this.name=name;
      this.balance=balance;
    }
  
    getName():string{
      return this.name;
    }

    getBalance():number{
      return this.balance;
    }
  }