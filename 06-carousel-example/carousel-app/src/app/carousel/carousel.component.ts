import { Component, OnInit, AfterContentInit, Input } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterContentInit {

  @Input('delay') delay: number = 500;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    // TODO: mabe use the setInterval function to call a function every x millis
  }
}
