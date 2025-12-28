import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/common/Home.vue'
import Login from '../pages/auth/Login.vue'
import Signup from '../pages/auth/Signup.vue'
import Dashboard from '../pages/dashboard/Dashboard.vue'
import Empty from '../pages/errors/Empty.vue'

const routes = [
   { path: '/', component: Home, name: 'Home' },
   { path: '/login', component: Login, name: 'Login' },
   { path: '/signup', component: Signup, name: 'Signup' },
   { path: '/dashboard', component: Dashboard, name: 'Dashboard' },
   { path: '/about', component: Empty, name: 'About' },
   { path: '/contact', component: Empty, name: 'Contact' },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
})

export default router;