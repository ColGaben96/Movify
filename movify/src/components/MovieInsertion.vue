<template>
  <div>
      <br>
      <h3>Insertar Película</h3>
      <b-container fluid>
          <b-form>
              <b-form-group
              id="movieData"
              label="Ingresa los datos de la película">
                <b-form-input
                id="movieName"
                type="text"                
                placeholder="Ingresa el nombre de la película"
                required></b-form-input>
                <b-form-input
                id="moviePicture"   
                type="text"             
                placeholder="Ingresa la url de la carátula"
                ></b-form-input>
                <b-form-input
                id="movieDescription"
                type="text"             
                placeholder="Ingresa la sinopsis de la película"
                ></b-form-input>
                <b-form-input
                id="movieCategories" 
                type="text"               
                placeholder="Ingresa las categorías"
                required></b-form-input>
                <b-form-input
                id="movieTrailer"
                type="text"
                placeholder="Ingresa la url del trailer de la película"
                ></b-form-input>
                <b-form-input
                id="movieRelease"
                type="date"
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
export default {
    data() {
        return {
            info: String
        }
    }
}
</script>

<style>

</style>