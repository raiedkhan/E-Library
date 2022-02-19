import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  today=new Date();
  constructor() { }
  log(message:string,level:number){
    switch(level){
      case 1:
        console.log(`Info  : ${this.today} =>${message}`);
        break;
      case 2:
        console.log(`Warn  : ${this.today} =>${message}`);
        break;
      case 3:
        console.log(`Error  : ${this.today} =>${message}`);
        break;
      default:
        console.log(`Default : ${this.today} =>${message}`);
    }

  }
}
