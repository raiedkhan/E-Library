import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {
  //name | format:gender
  transform(name:string,gender:string): string{
    if(gender=='male' || gender=='MALE'){
      return 'Mr '+name;
    }else{
      return 'Ms '+name;
    }
  }

}
