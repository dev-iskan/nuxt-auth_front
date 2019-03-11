/* eslint-disable no-console */
export default function({ $axios, store, context }) {
  // on error 422
  $axios.onError(error => {
    if (parseInt(error.response && error.response.status) === 422) {
      store.dispatch('validation/setErrors', error.response.data.errors)
    }

    return Promise.reject(error)
  })
  // on request clear errors
  $axios.onRequest(() => {
    store.dispatch('validation/clearErrors')
  })
}
