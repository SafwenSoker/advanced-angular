import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '(click)': 'applyLogic()'
  }
})
export class HighlightDirective {

  constructor(el: ElementRef) {
    this.el = el;
  }

  private el : ElementRef ;
  @Input() number = 0;
  @Input() divisibleBy = 1;

  applyLogic(){
    if (this.number % this.divisibleBy === 0){
      this.el.nativeElement.style.color ="green";
    } else {
      this.el.nativeElement.style.color ="red";
    }
  }

}
  