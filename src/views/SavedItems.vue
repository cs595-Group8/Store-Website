

<template>
  <UpperBar></UpperBar>
  <div>
    <b-button v-on:click="search">Button</b-button>
  </div>
  <div>
    <b-card
        header="Saved Items"
        header-text-variant="white"
        header-tag="header"
        header-bg-variant="success"
        footer-border-variant="dark"
    >
    <b-card-body>
        <b-card-group deck v-for="item of items" style="display:flex">
          <ItemCard 
            v-bind:name=item.product.title 
            v-bind:rating=item.product.rating
            vendor="Target"
            v-bind:img=item.product.main_image
            v-bind:price=item.offers.primary.price
          />
            
        </b-card-group>
    </b-card-body>
  </b-card>
  </div>
  <div>
    <ul>
      <li v-for="item of items" :key="item.id">
        <img v-bind:src=item.product.main_image >     
      </li>
    </ul>
  </div>
  <div id="app">
    <h1>Shopping List</h1>
  </div>
  <ul>
    <li v-for="item of items" :key="item.id">
      {{ item.product.title }}
    </li>
  </ul>
</template>

<script>
  import ItemCard from '../components/ItemCard.vue'
  import UpperBar from '../components/UpperBar.vue'
  import axios from "axios";
  
  export default {
    components:{
        ItemCard,
        UpperBar
    }, data() {
      return {
        categories: [],
        facets: [],
        items: []

      }
    },  methods: {
      search: async function (event) {
        try {
        const res = await axios.get('https://api.redcircleapi.com/request?api_key=demo&type=search&search_term=highlighter+pens&sort_by=best_seller');
        this.items = res.data.search_results;
        this.categories = res.data.categories;
        this.facets = data.facets;
      } catch (error) {
        console.log(error);
      }
      }
    }
  }

</script>

<style>

</style>
