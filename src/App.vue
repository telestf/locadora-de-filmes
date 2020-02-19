<template>
  <div id="app">
    <b-container>
      <h1>{{ title }}</h1>

      <h3 v-if="horas >= 9 && horas < 17" id="aberto" class="horario">Aberto</h3>
      <h3 v-else-if="horas >= 17 && horas < 18" id="proximo-fechar" class="horario">Próximo de Fechar</h3>
      <h3 v-else id="fechado" class="horario">Fechado</h3>

      <b-row>
        <b-col>
          <h2>Filmes encontrados</h2>
          <b-button class="btn btn-primary btn-lg" @click="mostrarCarrinho">Carrinho: {{ quantidadeNoCarrinho }} filmes</b-button>
        </b-col>
      </b-row>      

      <b-row class="cardss" v-if="mostrarFilmes">
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
          <b-button href="#" @click="adicionarAoCarrinho(filme)" v-if="validarPermissaoParaAdicionarNoCarrinho(filme)" variant="primary">ALUGAR</b-button>
          <b-button disabled href="#" @click="adicionarAoCarrinho(filme)" v-else variant="primary">ALUGAR</b-button>
          
        </b-card>  
      </b-row>
      <b-row v-else>
        <h2>Carrinho</h2>
      </b-row>

    </b-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      mostrarFilmes: true,
      title: 'Locadora de Filmes',
      horas: new Date().getHours(),
      filmes: [
        { id: 1, titulo: "Shrek", descricao: "Um filme de ogro", valor: 15, imagem: "assets/logo.png", estoqueDisponivel: 3 },
        { id: 2, titulo: "007", descricao: "Um filme de espião", valor: 10, imagem: "assets/logo.png", estoqueDisponivel: 5 },
        { id: 3, titulo: "Frozen", descricao: "Um filme de gelo", valor: 20, imagem: "assets/logo.png", estoqueDisponivel: 7 },
        { id: 4, titulo: "O Albergue", descricao: "Um filme açougue", valor: 5, imagem: "assets/logo.png", estoqueDisponivel: 4 },
        { id: 5, titulo: "Click", descricao: "Um filme de comédia", valor: 25, imagem: "assets/logo.png", estoqueDisponivel: 6 }
      ],
      carrinho: []
    } 
  },
  methods: {
    mostrarCarrinho (){
      this.mostrarFilmes = this.mostrarFilmes ? false : true;
    },
    adicionarAoCarrinho: function(filme) {
      this.carrinho.push(filme.id);
    },
    quantidadeNoCarrinhoPorFilme: function(filme) {
      return this. carrinho.filter(elem => elem === filme.id).length;
    },
    validarPermissaoParaAdicionarNoCarrinho: function(filme) {
      return filme.estoqueDisponivel > this.quantidadeNoCarrinhoPorFilme(filme);
    }
  },
  computed: {
    quantidadeNoCarrinho: function () {
      return this.carrinho.length;
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
.horario {
  background-color: black;
}
.cardss {
  justify-content: space-between;
}
#bcard{
  max-width: 20rem;
}

</style>
