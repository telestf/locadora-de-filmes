import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from './components/Home';
import Carrinho from './components/Carrinho';

Vue.use(VueRouter);

export default new VueRouter({

    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/carrinho',
            name: 'carrinho',
            component: Carrinho
        }
    ]


});