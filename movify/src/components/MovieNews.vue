<template>
<div>
    <br>
    <h3>Novedades</h3>
    <b-container fluid>
      <b-table 
      responsive 
      striped 
      hover 
      :items="info"
      caption-top>
        <template #table-caption>Aquí van las películas que fueron lanzadas hasta 3 semanas.</template>
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
      .get('http://localhost:3000/news')
      .then(response => {
        this.info = response.data
      })
  }
}
</script>

<style>

</style>