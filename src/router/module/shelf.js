export default [
    {
        path: "/",
        name: "home",
        meta: {title: '', keepAlive: false, oldLink: false, subPage: true},
        component: () => import(/* webpackChunkName: "about" */ "../../views/shelf/Home.vue")
    },
    {
        path: "/cell",
        name: "cell",
        meta: {title: '', keepAlive: false, oldLink: false, subPage: true},
        component: () => import(/* webpackChunkName: "about" */ "../../views/shelf/Cell.vue")
    }
]