import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: 'img[ccRollover]'
})
export class RolloverImageDirective implements OnChanges {

  @Input('ccRollover') config = {
    initial: 'https://unsplash.it/200/300?image=201',
    over: ''
  };

  @HostBinding('src') private imagePath: string;

  constructor() { }

  //TODO: HINT - Use ngOnChanges()
  ngOnChanges(changes: SimpleChanges) {
    if (this.config.initial) {
      this.imagePath = this.config.initial;
    }
  }

  //TODO: Flesh out this directive
  @HostListener('mouseover') onMouseOver() {
    this.imagePath = this.config.over;
  }

  @HostListener('mouseout') onMouseOut() {
    this.imagePath = this.config.initial;
  }
}
