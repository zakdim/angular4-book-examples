import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit, OnDestroy {
  promiseData: string;
  promise: Promise<string>;
  observableData: number;
  subscription: Object = null;
  observable: Observable<number>;

  constructor() {
    this.getPromise().then(v => this.promiseData = v);
    this.promise = this.getPromise();
    this.subscribeObservable();
    this.observable = this.getObservable();
  }

  getPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise complete!"), 3000);
    });
  }

  getObservable() {
    return Observable
        .interval(1000)
        .take(10)
        .map((v) => v * v);
  }

  subscribeObservable() {
    this.subscription = this.getObservable()
        .subscribe( v => this.observableData = v );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
