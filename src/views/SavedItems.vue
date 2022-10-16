

<template>
  <UpperBar></UpperBar>
  <div>
    <b-card
        header="Saved Items"
        header-text-variant="white"
        header-tag="header"
        header-bg-variant="success"
        footer-border-variant="dark"
    >
    <b-card-body>
        <b-card-group deck>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
        </b-card-group>
    </b-card-body>
  </b-card>
  </div>
</template>

<script>
  import ItemCard from 'C:/Compsci WIP/Capstone/capstoneProj/Store-Website/src/components/ItemCard.vue'
  import UpperBar from 'C:/Compsci WIP/Capstone/capstoneProj/Store-Website/src/components/UpperBar.vue'
  
  export default {
    components:{
        ItemCard,
        UpperBar
    }
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
