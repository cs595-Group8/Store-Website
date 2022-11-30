<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="faded">
      <b-navbar-brand href="#">Welcome, {{name}}!</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/saved-items">Saved Items</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">




          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item @click="openProfileDetails">Profile Details</b-dropdown-item>
            <b-dropdown-item @click="signOut">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>

</template>

<script>
import { clearUserSession } from '/src/persistance/database.js'


export default {
    computed: {
        name() {
            if (this.$store.state.session.user) {
                return this.$store.state.session.user.firstName
            } else {
                return "Guest"
            }
        }
    },

    methods: {
        signOut() {
            this.$store.state.session.user = null
            clearUserSession()
                .then(() => {
                    this.$router.push('/login')
                })
        },

        openProfileDetails() {
            this.$router.push('/profile-details')
        }
    }
}
</script>
