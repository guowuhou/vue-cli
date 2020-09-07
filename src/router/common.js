export default [
    {
        path: "/empty",
        name: "lost",
        component: () => import(/* webpackChunkName: "about" */ "../views/404.vue")
    }
]