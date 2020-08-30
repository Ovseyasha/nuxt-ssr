<template>
  <!-- eslint-disable -->
  <v-row>
    <v-col>
      <v-row>
        <v-col>
          <h1>Users page</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-list rounded>
            <v-subheader>Users</v-subheader>
            <v-list-item-group color="primary">
              <v-list-item v-for="user in users" :key="user.id" @click="openUser(user)">
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{user.name}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  // // SSR ПОДГРУЗКА данных (без vuex)
  // async asyncData ({ $axios }) {
  //   const users = await $axios.$get('https://jsonplaceholder.typicode.com/users')
  //   return { users }
  // },
  // для vuex
  async fetch ({ store }) {
    if (store.getters['users/users'].length === 0) {
      await store.dispatch('users/read')
    }
  },
  data: () => ({
    item: 1
  }),
  computed: {
    users () {
      return this.$store.getters['users/users']
    }
  },
  methods: {
    openUser (u) {
      this.$router.push(`/users/${u.id}`)
    }
  }
}
</script>

<style>
</style>
