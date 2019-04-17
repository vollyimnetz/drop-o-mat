export default [
    { 
        path: '/', 
        name:'home',
        component: require('~/pages/home.vue').default, 
    }, {
        path: '/why',
        name: 'why',
        component: require('~/pages/why.vue').default,
    }, 
    
    {
        path: '*', 
        component: require('~/pages/404.vue').default, 
        meta: { bodyClass: 'page404' },
    }
];