import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name :"stringlength"
})

export class StringLength implements PipeTransform{
  
  transform(original:string){
    console.log("length of string is "+original.length)
    let desired = original.length
    return desired;
  }
  constructor() { }

}

