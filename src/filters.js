import Vue from 'vue';
 
Vue.filter('formataPreco', function (preco, simbolo) {
    if (!parseInt(preco)) {
        return "";
    }
    var precoFormatado = (preco.toFixed(2)).replace('.', ',');
    return simbolo + " " + precoFormatado;
});