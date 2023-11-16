<template>
  <p>Sem a diretiva</p>
  <p v-texto="{ cor: 'red', tamanhoFonte: '200%', totalCaracteres: 25 }">Minha primeira diretiva customizada</p>
  <p v-texto="configuracaoTexto">Teste</p>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    configuracaoTexto: { cor: 'blue', tamanhoFonte: '300%', totalCaracteres: 25 }
  })
}
</script>

<style>
</style>
