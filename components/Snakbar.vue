<template>
  <v-snackbar timeout="6000" color="info" :value="true">
    <!-- eslint-disable -->
    {{ msg }}
  </v-snackbar>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line
    msg: String
  }
}
</script>

<style>
</style>
