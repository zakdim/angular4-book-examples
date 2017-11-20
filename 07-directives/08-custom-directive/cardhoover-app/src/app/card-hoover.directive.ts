import {
  Directive,
  ElementRef,
  Renderer } from '@angular/core';

@Directive({
  selector: '[ccCardHoover]'
})
export class CardHooverDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
  }

}
