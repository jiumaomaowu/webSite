export default {
    menus: [ // 菜单相关路由
        { key: '/', title: 'Home', icon: 'home', component: 'Home' },
        { key: '/blog', title: 'Blog', icon: 'project', component: 'Blog' },
        { key: '/collect', title: 'Collect', icon: 'star', component: 'Work' },
        { key: '/about', title: 'About', icon: 'team', component: 'About' }   
    ],
    others: [] // 非菜单相关路由
}