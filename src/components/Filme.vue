<template>
  <div class="row">
    <div class="col-12 mt-5">
      <h3>Esse é o produto com o id {{ $route.params.id }}</h3>
    </div>
 
    <div class="col-5 mt-1">
      <img v-bind:src="filme.imagem" alt="imagem do filme" />
    </div>
    <div class="col-7 mt-1">
      <h1>{{filme.titulo}}</h1>
      <p v-html="filme.descricao"></p>
      <p>{{filme.valor | formataPreco("R$")}}</p>
      <button @click="editar">Editar Filme</button>
      <router-view></router-view>
    </div>
  </div>
</template>
 
<script>
 
export default {
  components: {
  },
  data() {
    return {
      filme: {
        id: 4,
        titulo: "Capitã Marvel",
        descricao: "Um filme de capitãs",
        valor: 40,
        imagem: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Imagem_Filmes_logo.png/220px-Imagem_Filmes_logo.png",
        estoqueDisponivel: 8,
        avaliacao: 4
      }
    };
  },
  methods: {
      editar () {
          this.$router.push({ name: 'editar-filme' });
      }
  }
};
</script>
 
<style scoped>
</style>