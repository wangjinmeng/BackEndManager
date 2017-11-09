import {trigger, state, style, transition, animate} from "@angular/animations";

export const INACTIVE_ACTIVE=
  trigger('InOrActive', [
    state('inactive', style({transform: 'translateX(0) scale(1)'})),
    state('active',   style({transform: 'translateX(0) scale(1.1)'})),
    transition('inactive => active', animate('100ms ease-in')),
    transition('active => inactive', animate('100ms ease-out')),
    transition('void => inactive', [
      style({transform: 'translateX(-100px) scale(1)'}),
      animate(5000)
    ]),
    transition('inactive => void', [
      animate(5000, style({transform: 'translateX(100%) scale(1)'}))
    ]),
    transition('void => active', [
      style({transform: 'translateX(0) scale(0)'}),
      animate(5000)
    ]),
    transition('active => void', [
      animate(5000, style({transform: 'translateX(0) scale(0)'}))
    ])
  ])
