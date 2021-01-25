<template>
  <div>
    <b-button pill variant="outline-primary" type="submit">Insertar Película</b-button>
    <br>
    <h3>Lista de Películas</h3>
    <b-container fluid>
      <b-table responsive striped hover :items="movies" caption-top>
        <template #table-caption>No todas las películas tienen datos exactos. Pero te agradecemos que nos ayudes insertando datos.</template>
        <template #cell(picture)=''>
          <img src="movies[0].picture">
        </template>
      </b-table>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      movies: null
    }
  },
  mounted() {
    axios
      .get('http://192.168.1.102:3000/movies')
      .then(response => {
        this.movies = response.data
        console.log(response)
      })
  }
}
</script>

<style>

</style>