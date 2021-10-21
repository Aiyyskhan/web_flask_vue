import { createApp, h } from 'vue'
// import Vue from 'vue'
// import VueRouter from 'vue-router'
import App from './App.vue'
import Ping from "./components/Ping.vue"

// Пример простой маршрутизации

const routes = {
	'/': App,
	"/ping": Ping
}

const SimpleRouter = {
	data: () => ({
		currentRoute: window.location.pathname
	}),
	computed: {
		CurrentComponent(){
			return routes[this.currentRoute] || NotFoundComponent
		}
	},
	render(){
		return h(this.CurrentComponent)
	}
}

createApp(SimpleRouter).mount('#app')

// Пример применения vue-router

// const routes = [
// 	{ path: '/', component: App },
// 	{ path: "/ping", component: Ping },
// ]

// const router = new VueRouter({
// 	routes
// })

// const app = new Vue({
// 	router
// }).mount("#app")