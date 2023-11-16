import { createApp } from 'vue'
import App from './App.vue'

const Vue = createApp(App)

Vue.directive('texto' ,{
    created(el) { //chamado antes que os atributos do elemento ou ouvintes do event (event listeners) sejam aplicados
        console.log(el)
        el.style.color = 'red'
        el.style.fontSize = '150%'

        let textoOriginal = el.innerText
        let tamanhoTextoOriginal = textoOriginal.length
        let textoAjustado = ''

        if(tamanhoTextoOriginal > 25) {
            textoAjustado = textoOriginal.substring(0, 22) + '...'
        } else {
            textoAjustado = textoOriginal
        }

        el.innerText = textoAjustado

        console.log('texto original: ', textoOriginal)
        console.log('A diretiva foi aplicada com sucesso.')
    }
})

Vue.mount('#app')
