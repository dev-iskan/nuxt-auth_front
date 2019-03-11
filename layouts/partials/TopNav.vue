<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link :to="{name: 'index'}" class="navbar-item">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </nuxt-link>
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <template v-if="!authenticated">
          <div class="navbar-item">
            <div class="buttons">
              <nuxt-link :to="{name:'auth-signup'}" class="button is-primary">
                <strong>Sign up</strong>
              </nuxt-link>

              <nuxt-link :to="{name:'auth-signin'}" class="button is-light">
                Sign in
              </nuxt-link>
            </div>
          </div>
        </template>
        <template v-if="authenticated">
          <div class="navbar-item has-dropdown is-hoverable">
            <a @click.prevent="" href="#" class="navbar-link">
              {{ user.name }}
            </a>
            <div class="navbar-dropdown is-right">
              <a @click.prevent="logout" class="navbar-item">
                Logout
              </a>
            </div>
          </div>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout()
    }
  }
}
</script>

<style scoped>
</style>
