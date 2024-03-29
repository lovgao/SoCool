import Vue from "vue";
import VueRouter from "vue-router";

// 1.创建路由组件

Vue.use(VueRouter);

// 2.将路由与组件进行映射
const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
    redirect: "/order",
    children: [
      {
        path: "/order",
        name: "Order",
        component: () => import("../views/OrderView.vue"),
      },
      {
        path: "/admin",
        name: "Admin",
        component: () => import("../views/AdminView.vue"),
        meta: {
          role: "超级管理员",
        },
      },
      {
        path: "/UpdateOrder",
        name: "UpdateOrder",
        component: () => import("../views/UpdateOrder.vue"),
      },
      {
        path: "/EditAdmin",
        name: "EditAdmin",
        component: () => import("../views/EditAdmin.vue"),
      },
    ],
  },
];

// 3.创建router实例
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 4.暴露router
export default router;
