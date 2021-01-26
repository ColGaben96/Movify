<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <h1 style="text-align: center; color: white;">Movify</h1>
      </b-navbar-brand>
    </b-navbar>
    <b-container>
      <br>
    <MovieInsertion info></MovieInsertion>
    <MovieNews info></MovieNews>
     <MovieTable items></MovieTable>
    </b-container>
  </div>
</template>

<script setup>
  import MovieTable from './components/MovieTable.vue'
  import MovieInsertion from './components/MovieInsertion.vue'
  import MovieNews from './components/MovieNews.vue'

  export default {
    components: {
      MovieTable,
      MovieInsertion,
      MovieNews
    }
  }
</script>

<style>

</style>