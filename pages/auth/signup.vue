<template>
  <div class="section">
    <div class="container is-fluid">
      <div class="columns is-centered">
        <div class="column is-6">
          <h1 class="title is-4">
            Sign up
          </h1>
          <form @submit.prevent="signup" action="">
            <div class="field">
              <label class="label">
                Name
              </label>
              <div class="control">
                <input
                  v-model="form.name"
                  :class="{
                    'is-danger': errors.name
                  }"
                  class="input"
                  type="text"
                  placeholder="e.g. alex@codecourse.com"
                >
                <p v-if="errors.name" class="help is-danger">
                  {{ errors.name[0] }}
                </p>
              </div>
            </div>

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
                  Sign up
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
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async signup() {
      try {
        await this.$axios.post('/register', this.form)

        await this.$auth.loginWith('local', {
          data: {
            email: this.form.email,
            password: this.form.password
          }
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
