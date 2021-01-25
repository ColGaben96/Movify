<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <h1 style="text-align: center; color: white;">Movify</h1>
      </b-navbar-brand>
    </b-navbar>
    <b-container>
      <br>
     <MovieTable items></MovieTable>
    </b-container>
  </div>
</template>

<script setup>
  import MovieTable from './components/MovieTable.vue'

  export default {
    components: {
      MovieTable
    }
  }
</script>

<style>

</style>