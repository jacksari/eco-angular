export interface IAsideMenuAdmin {
  title: string;
  icon: string;
  path: string;
}
export const asideMenu: IAsideMenuAdmin[] = [
  {
    icon: 'la la-home',
    path: '/admin/home',
    title: 'home',
  },
  {
    icon: 'la la-home',
    path: '/admin/usuarios',
    title: 'usuarios',
  },
];
