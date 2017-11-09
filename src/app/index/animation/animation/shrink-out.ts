import {trigger, state, style, animate, transition} from "@angular/animations";
/**
 * Created by qs on 2017/11/8.
 */
export const SHRINKOUT=
  trigger('shrinkOut', [
    state('in', style({height: '*'})),
    transition('* => void', [
      style({height: '*'}),
      animate(250, style({height: 0}))
    ])
  ])
