const routes = [
    { 
        path: '/', 
        component: '@/pages/index', 
        name: '首页', 
        icon: 'dashboard',
        title: '首页2',
        // hideInMenu: true
      },
      { 
        path: '/user', 
        component: '@/pages/user/index.js', 
        name: '用户', 
        icon: 'user' 
      },
];

export default routes;