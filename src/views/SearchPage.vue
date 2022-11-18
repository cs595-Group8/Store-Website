

<template>
  <UpperBar></UpperBar>
  
    <div>
    <b-form inline style="display: flex">
      <label class="sr-only" for="inline-form-input-name" >Search</label>
      <b-form-input
        id="inline-form-input-name"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="Enter an item"
        style="width: 25%"
      ></b-form-input>
      <b-button variant="primary" style="width: 50px">Q</b-button>
    </b-form>
  </div>
  <div style="display: flex">
  <FilterBox></FilterBox>
  <div>
    <b-card
        header="Search Results"
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
        <b-card-group deck>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
        </b-card-group>
        <b-card-group deck>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
        </b-card-group>
    </b-card-body>
  </b-card>
  </div>
</div>
</template>

<script>
  import ItemCard from '../components/ItemCard.vue'
  import UpperBar from '../components/UpperBar.vue'
  import FilterBox from '../components/FilterBox.vue'
  
  export default {
    components:{
        ItemCard,
        UpperBar,
        FilterBox
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
