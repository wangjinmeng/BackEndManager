import {Component, OnInit, Input, HostBinding} from '@angular/core';

import {INACTIVE_ACTIVE} from "./animation/inactive-active.animation";
import {FLY_IN_OUT_ANIMATION} from "./animation/fly-in-out.animation";
import {SHRINKOUT} from "./animation/shrink-out";
import {POPOVERSTATE} from "./animation/popOverState";
import {FLYINOUT2} from "./animation/fly-in-out2.animation";


@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],

  animations: [INACTIVE_ACTIVE,FLY_IN_OUT_ANIMATION,SHRINKOUT,POPOVERSTATE,FLYINOUT2]

})
export class AnimationComponent implements OnInit {
  pageData={
    name:'动画',
    style:'glyphicon glyphicon-film ',
    id:3
  }
  state:string="inactive";
  show = false;
  position=false;
  constructor() { }

  ngOnInit() {
  }

  get stateName() {
    return this.show ? 'show' : 'hide'
  }
  togglePop() {
    this.show = !this.show;
  }


  toggle(state:string){
      this.state=state=='inactive'?"active":"inactive";
  }

  animationStarted(event: AnimationEvent) {
    console.warn('Animation started: ', event);
  }

  animationDone(event: AnimationEvent) {
    console.warn('Animation done: ', event);
  }
  logAnimation($event) {
    console.log(`${this.position} animation ${$event.phaseName}`)
  }
}
