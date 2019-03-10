// merging  existing auth state

export const getters = {
  authenticated: state => state.loggedIn,
  user: state => state.user
}
