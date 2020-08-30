
export const state = () => ({
  users: []
})

export const getters = {
  users (state) {
    return state.users
  }
}
export const mutations = {
  read (state, payload) {
    state.users = payload
  }
}
export const actions = {
  async read ({ commit }) {
    try {
      const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
      commit('read', users)
    } catch (error) {
    }
  }
}
