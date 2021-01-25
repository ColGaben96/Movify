<template>
  <div>
      <b-container fluid>
          <b-form 
          @submit="onSubmit" 
          @reset="onReset" 
          v-if="show">
              <b-form-group
              id="movieData"
              label="Ingresa los datos de la película">
                <b-form-input
                id="movieName"
                v-model="form.name"
                placeholder="Ingresa el nombre de la película"
                required></b-form-input>
                <b-form-input
                id="moviePicture"
                v-model="form.image"
                placeholder="Ingresa la url de la carátula"
                ></b-form-input>
                <b-form-input
                id="movieDescription"
                v-model="form.description"
                placeholder="Ingresa la sinopsis de la película"
                ></b-form-input>
                <b-form-input
                id="movieCategories"
                v-model="form.categories"
                placeholder="Ingresa las categorías"
                required></b-form-input>
                <b-form-input
                id="movieTrailer"
                v-model="form.trailer"
                placeholder="Ingresa la url del trailer de la película"
                ></b-form-input>
                <b-form-input
                id="movieName"
                v-model="form.date"
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

}
</script>

<style>

</style>