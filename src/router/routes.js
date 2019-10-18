export default [
  {
    path: '/sign-in',
    component: 'modules/auth/SignIn/pages/SignIn',
    layout: 'Default',
  },
  {
    path: '/home',
    component: 'modules/home/pages/Home',
    auth: true,
  },
  {
    path: '/',
    component: 'modules/home/pages/Home',
    layout: 'Default',
  },
];
