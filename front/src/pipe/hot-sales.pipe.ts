import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hotSales'
})
export class HotSalesPipe implements PipeTransform {

  transform(arg1: any, arg2: any): any {
    // console.log(arg2)
    arg1 = [];
    arg2.forEach(item =>{
      // console.log(item.sale);
      if (item.sale > 400){
        arg1.push(item)
      }
    })
    // console.log(arg1)
    return arg1;
  }

}
