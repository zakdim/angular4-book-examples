import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Joke } from '../joke';
import { JokeComponent } from '../joke/joke.component';

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit, AfterViewInit {
  jokes: Joke[] = [
    new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
    new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)")
  ];
  @ViewChild(JokeComponent) jokeViewChild: JokeComponent;

  constructor() {
    console.log(`new - jokeViewChild is ${this.jokeViewChild}`);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild}`);
  }
}
