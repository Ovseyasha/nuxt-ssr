<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col>
          <h1>About page</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, non rem officiis hic eos assumenda ut sequi repellendus itaque fugiat inventore quas quos vel odio perferendis amet. Delectus, totam nesciunt?</p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  // для защиты страницы от не зареганых и не только
  middleware: ['auth']
}
</script>

<style>
</style>
