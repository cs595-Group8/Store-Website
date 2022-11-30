

<template>
  <b-container fluid>
    <header>
    </header>

    <div v-if="loaded"><RouterView /></div>

  </b-container>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import {getUserSession} from '/src/persistance/database.js'

export default {
    data() {
        return {
            loaded: false
        }
    },

    components: {},
    mounted() {
        getUserSession()
            .then((response) => {
                console.log(response)
                if (response) {
                    this.$store.dispatch('session/loginUser', response);
                }
            })
            .finally(() => {this.loaded = true})
    }
}

</script>