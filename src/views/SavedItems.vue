

<template>
  <UpperBar></UpperBar>
  <div>

        <b-card-group deck>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
        </b-card-group>

  </div>
</template>

<script>
  import ItemCard from '../components/ItemCard.vue'
  import UpperBar from '../components/UpperBar.vue'
  
  export default {
    components:{
        ItemCard,
        UpperBar
    },

    mounted() {
        if (!this.$store.state.session.user) {
            this.$router.push('/login')
        }
    },
  }

</script>

<style>
@media (min-width: 1024px) {
  .profileDetails {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

td {
    padding: 5px 10px 0px 10px
}
</style>
