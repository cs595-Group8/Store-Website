<script>
import { RouterLink, RouterView } from 'vue-router'
import {getAccounts} from '/src/persistance/database.js'

export default {
    components: {},
    mounted() {
        getAccounts()
    }
}

</script>

<template>
  <b-container fluid>
    <header>
    </header>

    <div>




    </div>

    <RouterView />

  </b-container>
</template>
