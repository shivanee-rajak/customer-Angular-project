import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name :"stringrev"
})

export class ReverseString implements PipeTransform{
    constructor(){}
    transform(original:string) {
        let desired: string = "";
        for (let i = original.length-1; i >=0; i--) {
             desired += original.charAt(i)
        }
        console.log(desired)
        return desired;

        
    }
}
