// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import { createRouter, createWebHistory } from "vue-router";

// 引入需要呈现的组件
import Welcome from "@/pages/Welcome.vue";
import Props from "@/pages/Props/Father.vue";
import Custom from "@/pages/Custom-event/Father.vue";
import Mitt from "@/pages/Mitt/Father.vue";
import Vmodel from "@/pages/V-model/Father.vue";
import Attrs from "@/pages/Attrs/Father.vue";
import RefParent from "@/pages/RefsParent/Father.vue"
import ProvideInject from "@/pages/ProvideInject/Father.vue"
import Pinia from "@/pages/Pinia/Father.vue"
import Slot from "@/pages/Slot/Father.vue"


// 第二步：创建路由器
const router = createRouter({
    history: createWebHistory(),  // 路由器的工作模式
    routes: [{
        path:'/',
        component: Welcome
    },
    {
        path: '/welcome',
        component: Welcome
    },
    {                    // 路由规则
        path: '/props',
        component: Props
    },
    {
        path: '/custom-event',
        component: Custom
    },
    {
        path: '/mitt',
        component: Mitt
    },
    {
        path: '/v-model',
        component: Vmodel
    },
    {
        path: '/attrs',
        component: Attrs
    },
    {
        path: '/ref-parent',
        component: RefParent
    },
    {
        path: '/provide-inject',
        component: ProvideInject
    },
    {
        path: '/pinia',
        component: Pinia
    },
    {
        path: '/slot',
        component: Slot
    }]
})

//暴露出去router
export default router
