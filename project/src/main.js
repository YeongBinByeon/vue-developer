import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PageTitle from './components/fragments/PageTitle.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const app = createApp(App)

app.use(store)
app.use(router)
app.component('page-title', PageTitle) // 특정 컴포넌트를 글로벌하게 선언하여 다른 곳에서 아요할 수 있다.
app.mount('#app')
