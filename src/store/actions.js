import axios from 'axios'
import { router } from '../router'


const getProfileAndGoToDashboard = function (token, commit) {
    axios.get('http://localhost:3066/api/auth/retrieve', {
        headers: {
            'x-access-token' : token
        }
    })
        .then((res) => {
            commit('setLoading', false)
            commit('setProfile', res.data)
            router.push({ path: '/dashboard' })  
        })
        .catch((err) => {
            console.log(err)
            commit('setLoading', false)
            commit('setError', 'There was a problem finding your profile')
        })
}

export const actions = {
    createUser ({commit, state}) {
        commit('setLoading', true)
        axios.post('http://localhost:3066/api/auth/register', state.user)
            .then((res) => {
                commit('setLoading', false)
                commit('setToken', res.data.token)
                router.push({ path: 'profile-details' })
            })
            .catch((err) => {
                commit('setLoading', false)
                commit('setError', 'There was a problem creating your user profile')
                console.log(err)
            })
    },
    loginUser ({commit}, credentials) {
        commit('setLoading', true)
        axios.post('http://localhost:3066/api/auth/login', credentials)
            .then((res) => {
                commit('setLoading', false)
                commit('setToken', res.data.token)
                getProfileAndGoToDashboard(res.data.token, commit)
            })
            .catch((err) => {
                commit('setLoading', false)
                commit('setError', 'We couldn\'t find a user who matches those credentials')
                console.log(err)
            })
    },
    updateUser ({commit, state}, body) {
        commit('setLoading', true)
        let config = {
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'x-access-token' : state.token
            }
        }
        axios.put('http://localhost:3066/api/auth/update', body, config)
            .then((res) => {
                console.log(res)
                commit('setLoading', false)
                getProfileAndGoToDashboard(state.token, commit)
            })
            .catch((err) => {
                commit('setLoading', false)
                commit('setError', 'Something went wrong while updating your profile')
                console.log(err)
            })
    }
}