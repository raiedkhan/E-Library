
import { Component, OnInit } from '@angular/core';
import { of,Observable, timer, Subscription} from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  evenobs:any;
  subscription:Subscription;
  constructor(public searchservice:SearchService) {
    this.subscription=new Subscription();
  }

  ngOnInit(): void {
    // let observable=new Observable(subscriber=>{
    //   subscriber.next('Accenture');
    //   subscriber.next('solutions');
    //   setTimeout(()=>{
    //     subscriber.next('private')
    //     subscriber.complete()
    //   },1000);
    //   subscriber.next('private');
    //   subscriber.next('limited');
    // });
    // observable.subscribe(data=>console.log(data));
    // observable.subscribe({
    //   next(x){console.log('got value'+x)},
    //   error(err){console.log('got error'+err)},
    //   complete(){console.log('done')}
    // });
    // this.evenobs=new Observable(subscriber=>{
    //   for (let index =1 ; index <= 20; index++){
    //     setTimeout(()=>{
    //       if(index%2==0){
    //         subscriber.next(index);
    //       }
    //     },3000);
    //   }
    // });
    // // this.evenobs.subscribe((data:any)=>console.log(data));
    // // this.evenobs.unsubscribe();

    // let numberobs$:Observable<number>=of(1,2,3,4,5);
    // numberobs$.pipe(map(num=>num*num)).subscribe(number=>console.log(number))
    this.subscription=this.searchservice.searchtext$.subscribe(text=>console.log(text));
  }
  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }
}
