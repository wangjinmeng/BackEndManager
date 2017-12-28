import {trigger, state, style, transition, animate} from "@angular/animations";
export const fade=trigger('fade', [
    state('active', style({
      height: '*'
    })),
    state('inactive', style({
      height: 0
    })),
    transition('inactive <=> active', animate('300ms ease'))
  ]);
