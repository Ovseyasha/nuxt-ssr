
export const state = () => ({
  token: null
})

export const getters = {
  token (state) {
    return !!state.token
  }
}
export const mutations = {
  setToken (state, payload) {
    state.token = payload
  },
  clearToken (state) {
    state.token = null
  }
}
export const actions = {
  login ({ commit }) {
    commit('setToken', 'true')
  },
  logout ({ commit }) {
    commit('clearToken')
  }
}
