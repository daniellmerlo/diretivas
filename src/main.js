import { createApp } from 'vue'
import App from './App.vue'

const Vue = createApp(App)

Vue.directive('teste' ,{
    created() { //chamado antes que os atributos do elemento ou ouvintes do event (event listeners) sejam aplicados
        console.log('A diretiva foi aplicada com sucesso.')
    }
})

Vue.mount('#app')
