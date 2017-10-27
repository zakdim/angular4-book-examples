//'use strict';

function Student(config) {
  return function(target) {
    Object.defineProperty(target.prototype, 'course', {value: () => config.course}) // 2
  }
}

@Student({
  course: "Angular 4"
})
class Person {
  constructor(private firstName, private lastName) {
  }
  public namd() {
    return `${this.firstName} ${this.lastName}`;
  }
  protected whoAreYou() {
    return `Hi I'm ${this.name()}`;
  }
}
let asim = new Person("Asim", "Hussain");
console.log(asim.course()); // Angular 4
