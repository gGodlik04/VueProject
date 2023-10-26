import Main from '@/pages/Main';
import UserPage from '@/pages/UserPage';
import PostPage from '@/pages/PostPage';
import { createRouter, createWebHashHistory } from 'vue-router';


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/user-post',
        component: UserPage
    },
    {
        path: '/user-post/:id/',
        component: PostPage
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})

export default router;