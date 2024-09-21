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
app.directive('focus', {
  mounted(el, binding) {
    el.focus()
  }
})
app.directive('lowercase', {
  mounted(el) {
    el.addEventListener('input', (event) => {
      console.log(event.target.value)
      event.target.value = event.target.value.toLowerCase()
    })
  }
})
app.directive('uppercase', {
  mounted(el) {
    el.addEventListener('input', (event) => {
      event.target.value = event.target.value.toUpperCase()
    })
  }
})
app.directive('number', {
  mounted(el) {
    el.addEventListener('input', (event) => {
      console.log(event.target.value)
      event.target.value = event.target.value.replace(/\D/g, '')
    })
  }
})

app.directive('korean', {
  mounted(el) {
    el.addEventListener('input', (event) => {
      console.log(event.target.value)
      event.target.value = event.target.value.replace(
        /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g,
        ''
      )
    })
  }
})
app.mount('#app')
