<template>
  <div class="section">
    <div class="container is-fluid">
      <div class="columns is-centered">
        <div class="column is-6">
          <h1 class="title is-4">
            Sign in
          </h1>
          <form @submit.prevent="signin" action="">
            <div class="field">
              <label class="label">
                Email
              </label>
              <div class="control">
                <input
                  v-model="form.email"
                  :class="{
                    'is-danger': errors.email
                  }"
                  class="input"
                  type="email"
                  placeholder="e.g. alex@codecourse.com"
                >
                <p v-if="errors.email" class="help is-danger">
                  {{ errors.email[0] }}
                </p>
              </div>
            </div>

            <div class="field">
              <label class="label">
                Password
              </label>
              <div class="control">
                <input
                  v-model="form.password"
                  :class="{
                    'is-danger': errors.password
                  }"
                  class="input"
                  type="password"
                >
                <p v-if="errors.password" class="help is-danger">
                  {{ errors.password[0] }}
                </p>
              </div>
            </div>

            <div class="field">
              <p class="control">
                <button class="button is-info is-medium">
                  Sign in
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'guest',
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async signin() {
      try {
        await this.$auth.loginWith('local', {
          data: this.form
        })
      } catch (e) {
        Promise.reject(e)
      }
    }
  }
}
</script>

<style scoped>
</style>
