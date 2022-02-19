import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlighter]'
})
export class MyHighlighterDirective {

  constructor(private elementRef:ElementRef) { 
    this.elementRef.nativeElement.style.background='yellow';
  }

}
