<template>
  <div id="home">
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

      <b-button id="botaoFiltro" class="btn btn-primary btn" @click="filtrar5Estrelas">Filtrar 5 estrelas</b-button>

      <b-row class="cardss" v-if="mostrarFilmes">
        <b-card v-bind:key="filme.id" v-for="filme in filmesOrdenados" id="bcard"
          :title=filme.titulo
          img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJjFZSqrM6lP75FusvvBcU1wTPxXgqpBJgXE1Dre1YrrLJvMjK"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2"
        >

          <b-card-text>{{ filme.descricao }}</b-card-text>

          <b-card-text class="mensagem-estoque"
             v-if="filme.estoqueDisponivel - quantidadeNoCarrinhoPorFilme(filme) === 0">
               Indisponível
          </b-card-text>
          <b-card-text class="mensagem-estoque"
             v-else-if="filme.estoqueDisponivel - quantidadeNoCarrinhoPorFilme(filme) < 5">
               Apenas {{ filme.estoqueDisponivel - quantidadeNoCarrinhoPorFilme(filme) }} itens no estoque.
          </b-card-text>
          <b-card-text class="mensagem-estoque"
             v-else>
               Alugue agora!
          </b-card-text>

          <b-card-text>{{ filme.valor | formataPreco("R$") }}</b-card-text>

          <b-card-text> 
            <span v-for="n in 5" :key="n">
              <b-icon id="estrelaCheia" icon="star-fill" variant="warning" font-scale="2" v-if="filme.avaliacao >= n"></b-icon> 
              <b-icon id="estrelaVazia" icon="star" font-scale="2" variant="warning" v-else></b-icon>
            </span>
          </b-card-text>

          <b-button href="#" @click="adicionarAoCarrinho(filme)" v-if="validarPermissaoParaAdicionarNoCarrinho(filme)" variant="primary">ALUGAR</b-button>
          <b-button disabled href="#" @click="adicionarAoCarrinho(filme)" v-else variant="primary">ALUGAR</b-button>
          
        </b-card>  
      </b-row>
      <b-row v-else>
        <Carrinho/>
      </b-row>


    </b-container>   
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrarFilmes: true,
      title: 'Locadora de Filmes',
      horas: new Date().getHours(),
      filmes: [
        { id: 1, titulo: "Shrek", descricao: "Um filme de ogro", valor: 15, imagem: "assets/logo.png", estoqueDisponivel: 3, avaliacao: 1 },
        { id: 2, titulo: "007", descricao: "Um filme de espião", valor: 10, imagem: "assets/logo.png", estoqueDisponivel: 5, avaliacao: 2 },
        { id: 3, titulo: "Frozen", descricao: "Um filme de gelo", valor: 20, imagem: "assets/logo.png", estoqueDisponivel: 7, avaliacao: 3 },
        { id: 4, titulo: "O Albergue", descricao: "Um filme açougue", valor: 5, imagem: "assets/logo.png", estoqueDisponivel: 4, avaliacao: 4 },
        { id: 5, titulo: "Click", descricao: "Um filme de comédia", valor: 25, imagem: "assets/logo.png", estoqueDisponivel: 6, avaliacao: 5 }
      ],
      carrinho: []
    } 
  },
  methods: {
    mostrarCarrinho (){
      this.$router.push({name: "carrinho"})
    },
    adicionarAoCarrinho: function(filme) {
      this.carrinho.push(filme.id);
    },
    quantidadeNoCarrinhoPorFilme: function(filme) {
      return this.carrinho.filter(elem => elem === filme.id).length;
    },
    validarPermissaoParaAdicionarNoCarrinho: function(filme) {
      return filme.estoqueDisponivel > this.quantidadeNoCarrinhoPorFilme(filme);
    },
    filtrar5Estrelas() {
      this.filmes = this.filmes.filter(filme => filme.avaliacao === 5)
      return this.filmes
    }
  },
  computed: {
    quantidadeNoCarrinho: function () {
      return this.carrinho.length;
    },
    filmesOrdenados: function(){
      let filmesOrd = this.filmes
      filmesOrd.sort(function (a, b) {
        if (a.titulo > b.titulo) {
          return 1;
        }
        if (a.titulo < b.titulo) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
      return this.filmes
    }      
  }
}
</script>

<style>
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
.mensagem-estoque {
  font-weight: bold;
}

#estrelaVazia:hover, #estrelaCheia:hover {
  cursor: pointer;
}
#botaoFiltro{
  text-align: left;
}
</style>