export default function ({ store, redirect }) {
  if (!store.getters['login/token']) {
    redirect('/login?message=login')
  }
}
