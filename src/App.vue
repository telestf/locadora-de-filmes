<template>
  <div id="app">
    <b-container>
      <h1><b-badge>{{ title }}</b-badge></h1>    

      <h3 v-if="horas >= 9 && horas < 17" id="aberto">Aberto</h3>
      <h3 v-else-if="horas >= 17 && horas < 18" id="proximo-fechar">Próximo de Fechar</h3>
      <h3 v-else id="fechado">Fechado</h3>

      <b-row>
        <b-col>
          <h2>Filmes encontrados</h2>
        </b-col>
      </b-row>      

      <b-row class="cardss">
        <b-card v-bind:key="filme.id" v-for="filme in filmes" id="bcard"
          :title=filme.titulo
          img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJjFZSqrM6lP75FusvvBcU1wTPxXgqpBJgXE1Dre1YrrLJvMjK"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2"
        >
          <b-card-text>{{ filme.descricao }}</b-card-text>
          <b-card-text>{{ filme.valor | formataPreco("R$") }}</b-card-text>
          <b-button href="#" variant="primary">ALUGAR</b-button>
          
        </b-card>  
      </b-row>

    </b-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }, data() {
    return {
    title: 'Locadora de Filmes',
    horas: new Date().getHours(),
    filmes: [
      { id: 1, titulo: "Shrek", descricao: "Um filme de ogro", valor: 15, imagem: "assets/logo.png" },
      { id: 2, titulo: "007", descricao: "Um filme de espião", valor: 10, imagem: "assets/logo.png" },
      { id: 3, titulo: "Frozen", descricao: "Um filme de gelo", valor: 20, imagem: "assets/logo.png" },
      { id: 4, titulo: "O Albergue", descricao: "Um filme açougue", valor: 5, imagem: "assets/logo.png" },
      { id: 5, titulo: "Click", descricao: "Um filme de comédia", valor: 25, imagem: "assets/logo.png" }
    ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#aberto {
  color: blue;
}

#proximo-fechar {
  color: yellow;
}

#fechado {
  color: red;
}
.cardss {
  justify-content: space-between;
}
#bcard{
  max-width: 20rem;
}
</style>
