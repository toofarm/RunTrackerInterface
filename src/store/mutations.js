export const mutations = {
    setHamburgerMenu (state, payload) {
        state.hamburgerMenu = payload
    },
    setUserEmail (state, payload) {
        state.user.email = payload
    },
    setUserFirstName (state, payload) {
        state.user.firstName = payload
    },
    setUserLastName (state, payload) {
        state.user.lastName = payload
    },
    setUserPassword (state, payload) {
        state.user.password = payload
    },
    setLoading (state, payload) {
        state.loading = payload
    },
    setToken (state, payload) {
        state.token = payload
    },
    setError (state, payload) {
        state.error = payload
    },
    setProfile (state, payload) {
        state.profile = payload
    }
}