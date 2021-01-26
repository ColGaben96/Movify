<template>
  <div>
      <h1>Movie Insertion</h1>
      <MovieInsertion info></MovieInsertion>
    <router-view/>
  </div>
</template>

<script setup>
import MovieInsertion from './components/MovieInsertion.vue'
export default {
    components: {
        MovieInsertion
    }
}
</script>

<style>

</style>