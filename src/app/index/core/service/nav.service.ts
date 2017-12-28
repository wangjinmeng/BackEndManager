import {Injectable} from "@angular/core";

export class SidebarNav{
  id:number;
  icon:string;
  name:string;
  path?:string;
  children?:SidebarNav[];
}
const navData:SidebarNav[]=[
  {
    name:'UI',
    icon:'fa  fa-cubes',
    id:1,
    children:[
      {
        path: 'tab',
        name:'选项卡',
        icon:'fa  fa-heartbeat',
        id:7
      },
      {
        path: 'datepicker',
        name:'日期选择器',
        icon:'fa  fa-heartbeat',
        id:8
      },
      {
        path: 'general',
        name:'小部件',
        icon:'fa  fa-cubes',
        id:11
      },

      {
        path: 'animation',
        name:'动画',
        icon:'glyphicon glyphicon-film ',
        id:3
      },
      {
        path: 'tables',
        name:'表格',
        icon:'fa fa-table ',
        id:4
      },
    ]
  },
  {
    id:6,
    icon:'glyphicon glyphicon-menu-hamburger',
    name:'权限',
    children:[
      {

        path: 'authority',
        name:'模块管理',
        icon:'glyphicon glyphicon-menu-hamburger',
        id:61
      },
      {
        path: 'role',
        name:'角色管理',
        icon:'fa  fa-user',
        id:62
      },
      {
        path: 'user',
        name:'用户管理',
        icon:'fa fa-users',
        id:63
      }
    ]
  },
  {
    name:'我的组件',
    icon:'fa  fa-heartbeat',
    id:7,
    children:[
      {
        path: 'modals',
        name:'弹出层',
        icon:'fa  fa-heartbeat',
        id:9
      },
      {
        path: 'form',
        name:'表单',
        icon:'glyphicon glyphicon-list-alt',
        id:2
      }
    ]
  },
  {
    name:'面板',
    icon:'fa  fa-heartbeat',
    id:3,
    children:[

      {
        path: 'panelTab',
        name:'PanelTab 选项卡面板',
        icon:'fa fa-calendar-o',
        id:33
      },
      {
        path: 'panel',
        name:'Panel 面板',
        icon:'fa fa-calendar-o',
        id:32
      }
    ]
  },
  {id:12,icon:'glyphicon glyphicon-music',name:'test',path:'test'}
];
@Injectable()
export class NavService{
  getNavData(){
    return navData;
  }
}
