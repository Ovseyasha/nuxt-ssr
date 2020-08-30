<template>
  <v-row>
    <!-- eslint-disable -->
    <Snakbar v-show="$route.query.message" :msg="$route.query.message" />
    {{$route.query.message}}
    <v-col>
      <v-row justify="center">
        <v-col xl="6" lg="6" cols="12">
          <form @submit.prevent="login">
            <h1>Login</h1>
            <v-text-field label="Login" required />
            <v-text-field label="Password" type="password" required />
            <v-btn type="submit" block tile x-large color="primary">Login</v-btn>
            <nuxt-link to="/">Home</nuxt-link>
          </form>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Snakbar from '@/components/Snakbar'
export default {
  components: { Snakbar },
  layout: 'empty',
  methods: {
    login () {
      this.$store.dispatch('login/login')
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
