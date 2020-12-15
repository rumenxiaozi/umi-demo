export function patchRoutes ({ routes }) {
    if(routes && routes.length === 1) {
        routes[0].routes.unshift({
            path: '/dashboard',
            exact: true,
            name: '欢迎页',
            component: require('@/pages/dashboard/index').default,
        });
    }
}