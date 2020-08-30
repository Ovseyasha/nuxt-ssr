<template>
  <!-- eslint-disable -->
  <v-app-bar app>
    <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
    <v-toolbar-title>Application</v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-btn nuxt-link to="/">Home</v-btn>
      <v-btn nuxt-link to="/about">About</v-btn>
      <v-btn nuxt-link to="/users">Users</v-btn>
      <v-btn nuxt-link to="/login" v-if="!hasToken">Login</v-btn>
      <v-btn @click="logout" v-else>Logout</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    hasToken () {
      return this.$store.getters['login/token']
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('login/logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style>
</style>
