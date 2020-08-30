<template>
  <!-- eslint-disable -->
  <v-app-bar app>
    <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
    <v-toolbar-title>Application</v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-btn nuxt-link to="/">Home</v-btn>
      <v-btn nuxt-link to="/about">About</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {

}
</script>

<style>
</style>
