import {Injectable} from "@angular/core";
const navData=[
  {
    path: 'general',
    name:'小部件',
    style:'fa  fa-cubes',
    id:1
  },
  {
    path: 'form',
    name:'表单',
    style:'fa  fa-cubes',
    id:2
  },
  {
    path: 'animation',
    name:'动画',
    style:'fa  fa-cubes',
    id:3
  },
  {
    path: 'tree',
    name:'树',
    style:'fa  fa-cubes',
    id:4
  }
];
@Injectable()
export class NavService{
  getNavData(){
    return navData;
  }
}
