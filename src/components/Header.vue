<template>
  <div class="header">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand :to="'/'">Locadora de Filmes</b-navbar-brand>
    </b-navbar>
  </div>
</template>

<script>
  export default {
      name: 'Header'
  }
</script>

<style>
nav {
  background-color: gray;
}
</style>