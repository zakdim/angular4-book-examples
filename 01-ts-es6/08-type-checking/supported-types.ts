'use strict';

let decimal: number = 6;
let done: boolean = false;
let color: string = "blue";

let list: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let fun: Function = () => console.log("Hello");
function returnNumber(): number {
  return 1;
}
fun();
console.log(returnNumber());

enum Direction {
  Up,
  Down,
  Left,
  Right
}
let go: Direction;
go = Direction.Up;
console.log(go);

class Person {};
let person: Person;
let people: Person[];

let notsure: any = 1;
notsure = "hello";

// void
function returnNothing(): void {
  console.log("Moo");
}

// type assertion
let value: any = "Assim Hussain";
let len: number = (<string>value).length;
