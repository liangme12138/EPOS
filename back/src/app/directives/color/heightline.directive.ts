import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector : '[hl]'
})
export class HeightlineDirective {

  constructor (el: ElementRef)  {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

}
