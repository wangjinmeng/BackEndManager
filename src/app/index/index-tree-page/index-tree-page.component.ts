import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-index-tree-page',
  templateUrl: './index-tree-page.component.html'
})
export class IndexTreePageComponent implements OnInit {
  constructor() {
    // var observable = Observable.create(function (observer) {
    //   observer.next(1);
    //   observer.next(2);
    //   observer.next(3);
    //   setTimeout(() => {
    //     observer.next(4);
    //     observer.complete();
    //   }, 1000);
    // });
    // console.log('just before subscribe');
    // observable.subscribe({
    //   next: x => console.log('got value ' + x),
    //   error: err => console.error('something wrong occurred: ' + err),
    //   complete: () => console.log('done'),
    // });
    // console.log('just after subscribe');
  }
  ngOnInit() {
  }
}
