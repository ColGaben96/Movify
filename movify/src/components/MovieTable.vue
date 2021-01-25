<template>
  <div>
    <b-button pill variant="outline-primary" type="submit">Insertar Película</b-button>
    <br>
    <h3>Lista de Películas</h3>
    <b-container fluid>
      <b-table 
      responsive 
      striped 
      hover 
      :items="info"
      caption-top>
        <template #table-caption>No todas las películas tienen datos exactos. Pero te agradecemos que nos ayudes insertando datos.</template>
        <template #cell(picture) = "data">
          <img :src="data.value" width="30%" height="auto">
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
      info: null
    }
  },
  mounted() {
    axios
      .get('http://192.168.1.102:3000/movies')
      .then(response => {
        this.info = response.data
      })
  }
}
</script>

<style>

</style>