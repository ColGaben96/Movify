<template>
  <div>
      <br>
      <h3>Insertar Película</h3>
      <b-container fluid>
          <b-form
          id="movieInfo"
          name="movieInfo"
          @submit="postData()">
              <b-form-group
              id="movieData"
              label="Ingresa los datos de la película">
                <b-form-input
                id="movieName"
                name="title"
                type="text"            
                placeholder="Ingresa el nombre de la película"
                required></b-form-input>
                <b-form-input
                id="moviePicture" 
                name="picture"  
                type="text"            
                placeholder="Ingresa la url de la carátula"
                ></b-form-input>
                <b-form-input
                id="movieDescription"
                name="description"
                type="text"        
                placeholder="Ingresa la sinopsis de la película"
                ></b-form-input>
                <b-form-input
                id="movieDuration" 
                type="number"
                step="0.1"
                name="duration"           
                placeholder="Ingresa la duracion en horas"
                required></b-form-input>
                <b-form-input
                id="movieCategories" 
                type="text"   
                name="categories"          
                placeholder="Ingresa las categorías"
                required></b-form-input>
                <b-form-input
                id="movieTrailer"
                type="text"
                name="trailer"
                placeholder="Ingresa la url del trailer de la película"
                ></b-form-input>
                <b-form-input
                id="movieRelease"
                type="date"
                name="date"
                placeholder="Ingresa la fecha de estreno"
                ></b-form-input>
              </b-form-group>
              <b-form-group
              id="formControl">
              <b-button type="submit" variant="outline-primary">Registrar</b-button>
              <b-button type="reset" variant="outline-danger">Limpiar</b-button>
              </b-form-group>
          </b-form>
      </b-container>
  </div>
</template>

<script>
import axios from 'axios'
var optionAxios = {
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        }
export default {
    
 methods: {
      postData: function() {
      axios
    .post(
        "http://localhost:3000/create_movie",
        {
            picture: this.picture,
                title: this.title,
                description: this.description,
                duration: this.duration,
                trailer: this.trailer,
                date: this.date
        },  optionAxios)
    .then(response => (this.resp = response))
    .catch( e => {
        console.error(e);
    })

  }
 }
}
</script>

<style>

</style>