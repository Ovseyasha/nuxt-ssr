<template>
  <!-- eslint-disable -->
  <v-row>
    <v-col>
      <v-row>
        <v-col>
          <v-card class="mx-auto">
            <v-card-text>
              <div>{{user.useraname}}</div>
              <p class="display-1 text--primary">{{user.name}}</p>
              <p>{{user.email}}</p>
              <div class="text--primary">
                {{user.phone}}
                <br />
                {{user.website}}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>

export default {
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  async asyncData ({ $axios, params }) {
    const user = await $axios.$get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    return { user }
  }
}
</script>

<style>
</style>
