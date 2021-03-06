import {trigger, state, style, transition, animate, keyframes} from "@angular/animations";
/**
 * Created by qs on 2017/11/14.
 */
export const FLYINOUT2=
  trigger("flyInOut2",[
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(3000, keyframes([
          style({opacity: 0, transform: 'translateX(0)', offset: 0}),
          style({opacity: 1, transform: 'translateX(150px)',  offset: 0.5}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ])
    ])



