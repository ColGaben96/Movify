<template>
  <div>
    <b-button pill variant="outline-primary" type="submit">Insertar Película</b-button>
    <br>
    <h3>Lista de Películas</h3>
    <b-container fluid>
      <b-table responsive striped hover :items="items" caption-top>
        <template #table-caption>No todas las películas tienen datos exactos. Pero te agradecemos que nos ayudes insertando datos.</template>
        <template #cell(imagen)=''>
          <p>Esta es una url</p>
        </template>
      </b-table>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        'imagen',
        {key: 'url', label: 'Imagen'}
      ],
      items: [
        {imagen: 'https://media1.popsugar-assets.com/files/thumbor/pbJ5VJZlhWraygZKqF3lb6bxjIU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2016/03/24/954/n/37139775/71d4a4c5906b1151_MMDNIBE_EC004_H/i/Nightmare-Before-Christmas-El-Extra%C3%B1o-Mundo-de-Jack-Jacks-Wei',
        pelicula: 'El extraño mundo de Jack', 
        descripcion: 'Aburrido con la misma vieja rutina de espantar y gritar, Pumpkin King Jack Skellington anhela difundir la alegría de la Navidad. Pero su alegre misión pone a Santa en peligro y crea una pesadilla para los buenos niños y niñas de todo el mundo.',
        duracion: '1h 18',
        categorias: 'Infantil; Navidad',
        trailer: 'https://www.disneyplus.com/movies/tim-burtons-the-nightmare-before-christmas/5GjwOj5Rkpz2',
        fecha_de_estreno: 'Noviembre 18 de 1994'},
        {imagen: 'https://media1.popsugar-assets.com/files/thumbor/pbJ5VJZlhWraygZKqF3lb6bxjIU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2016/03/24/954/n/37139775/71d4a4c5906b1151_MMDNIBE_EC004_H/i/Nightmare-Before-Christmas-El-Extra%C3%B1o-Mundo-de-Jack-Jacks-Wei',
        pelicula: 'El extraño mundo de Jack', 
        descripcion: 'Aburrido con la misma vieja rutina de espantar y gritar, Pumpkin King Jack Skellington anhela difundir la alegría de la Navidad. Pero su alegre misión pone a Santa en peligro y crea una pesadilla para los buenos niños y niñas de todo el mundo.',
        duracion: '1h 18',
        categorias: 'Infantil; Navidad',
        trailer: 'https://www.disneyplus.com/movies/tim-burtons-the-nightmare-before-christmas/5GjwOj5Rkpz2',
        fecha_de_estreno: 'Noviembre 18 de 1994'},
        {imagen: 'https://media1.popsugar-assets.com/files/thumbor/pbJ5VJZlhWraygZKqF3lb6bxjIU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2016/03/24/954/n/37139775/71d4a4c5906b1151_MMDNIBE_EC004_H/i/Nightmare-Before-Christmas-El-Extra%C3%B1o-Mundo-de-Jack-Jacks-Wei',
        pelicula: 'El extraño mundo de Jack', 
        descripcion: 'Aburrido con la misma vieja rutina de espantar y gritar, Pumpkin King Jack Skellington anhela difundir la alegría de la Navidad. Pero su alegre misión pone a Santa en peligro y crea una pesadilla para los buenos niños y niñas de todo el mundo.',
        duracion: '1h 18',
        categorias: 'Infantil; Navidad',
        trailer: 'https://www.disneyplus.com/movies/tim-burtons-the-nightmare-before-christmas/5GjwOj5Rkpz2',
        fecha_de_estreno: 'Noviembre 18 de 1994'},
      ]
    }
  }
}
</script>

<style>

</style>