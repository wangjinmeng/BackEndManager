import {trigger, state, style, transition, animate} from "@angular/animations";

export const INACTIVE_ACTIVE=
  trigger('InOrActive', [
    state('inactive', style({
      backgroundColor: '#ff9800',
      transform: 'scale(1)'
    })),
    state('active',   style({
      backgroundColor: '#f1c27d',
      transform: 'scale(1.1)'
    })),
    transition('inactive => active', animate('100ms ease-in')),
    transition('active => inactive', animate('100ms ease-out'))
  ])
