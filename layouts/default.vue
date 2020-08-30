<template>
  <div>
    <Navbar />
    <v-app id="inspire">
      <v-main>
        <v-container>
          <Nuxt />
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>
<style>
html {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
}
</style>
