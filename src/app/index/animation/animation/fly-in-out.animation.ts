import {animate, state, style, transition, trigger} from '@angular/animations';

export const FLY_IN_OUT_ANIMATION =
  trigger('flyInOut', [
    state('in', style({opacity: 1, transform: 'translateX(0)'})),
    transition('void => *', [
      style({
        opacity: 0,
        transform: 'translateX(200px)'
      }),
      animate('2s ease-in')
    ]),
    transition('* => void', [
      animate('2s 0.1s ease-out', style({
        opacity: 0,
        transform: 'translateX(100%)'
      }))
    ])
  ])
