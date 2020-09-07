export default [
    {
        path: "/about",
        name: "about",
        meta: {title: '', keepAlive: false, oldLink: false, subPage: true},
        component: () => import(/* webpackChunkName: "about" */ "../../views/factory/About.vue")
    },
    {
        path: "/shop",
        name: "shop",
        meta: {title: '', keepAlive: false, oldLink: false, subPage: true},
        component: () => import(/* webpackChunkName: "about" */ "../../views/factory/Shop.vue")
    }
]