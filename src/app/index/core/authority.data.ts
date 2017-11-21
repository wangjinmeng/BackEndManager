export class Authority{
  name:string;
  path:string;
  style:string;
  id?:number|string;
}
export const authorities:Authority[]=[
  {
    path: 'general',
    name:'小部件',
    style:'fa  fa-cubes',
    id:1
  },
  {
    path: 'form',
    name:'表单',
    style:'glyphicon glyphicon-list-alt',
    id:2
  },
  {
    path: 'animation',
    name:'动画',
    style:'glyphicon glyphicon-film ',
    id:3
  },
  {
    path: 'tables',
    name:'表格',
    style:'fa fa-table ',
    id:4
  },
  {
    path: 'calendar',
    name:'日期',
    style:'fa fa-calendar ',
    id:5
  },
  {
    path: 'tree',
    name:'树',
    style:'fa  fa-heartbeat',
    id:6
  },
  {
    path: 'authority',
    name:'权限管理',
    style:'glyphicon glyphicon-menu-hamburger',
    id:7
  },
  {
    path: 'role',
    name:'角色管理',
    style:'fa  fa-user',
    id:8
  },
  {
    path: 'user',
    name:'用户管理',
    style:'fa fa-users',
    id:9
  },{
    path: 'tab',
    name:'选项卡',
    style:'fa  fa-heartbeat',
    id:10
  }
]
