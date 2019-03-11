/* eslint-disable no-console */
export default function({ $axios, store }) {
  // on error 422
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 422) {
      store.dispatch('validation/setErrors', error.response.data.errors)
    }

    return Promise.reject(error)
  })
  // on request clear errors
  $axios.onRequest(config => {
    store.dispatch('validation/clearErrors')
  })
}
