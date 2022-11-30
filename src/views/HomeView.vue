<template>
  <UpperBar></UpperBar>

  <div style="display: flex; justify-content: center">
    <b-form-input 
      v-model="searchTerm" 
      placeholder="Enter Item to Find"
      style="width: 50%">
    </b-form-input>
    <b-button variant="primary" v-on:click="search">Search</b-button>
  </div>

  <div style="display: grid; grid-gap: 20px; grid-template-columns: :100rem 100rem; grid-template-rows: repeat(auto, 50px); align-items: center; justify-self: space-between;">
    <div v-for="item of items">
      <ItemCard 
        v-bind:name=item.name
        v-bind:rating=item.rating
        v-bind:vendor=item.vendor
        v-bind:img=item.img
        v-bind:price=item.price
        v-bind:productLink=item.productLink
      />
            
    </div>
  </div>

</template>

<script>
  import UpperBar from '../components/UpperBar.vue'
  import ItemCard from '../components/ItemCard.vue'
  import axios from "axios";
  import Item from '../models/item.js'
  
  export default {
    components:{
        UpperBar,
        ItemCard
    },
    data(){
      return{
        searchTerm: '',
        items: ''
      }
    },

    mounted() {
        if (!this.$store.state.session.user) {
            this.$router.push('/login')
        }
    },

    methods: {
      search: async function (event) {
        let items = [];

        const targetResults = await this.targetSearch();
        const walmartResults = await this.walmartSearch();

        targetResults.data.search_results.forEach((item) => {
          items.push(new Item(item.product.title, item.offers.primary.price, "Target", "Available", item.product.rating, item.product.main_image, item.product.link));
        });

        walmartResults.data.search_results.forEach((item) => {
          items.push(new Item(item.product.title, item.offers.primary.price, "Walmart", "Available", item.product.rating, item.product.main_image, item.product.link));
        });


        this.items = items;
      },
      targetSearch: async function(){
        let url = "https://api.redcircleapi.com/request?api_key=425C4E691CE8494DB739D40611D91D73&search_term=";
        let searchCopy = this.searchTerm;
        const formattedSearch = searchCopy.split(" ").join("+");
        const urlEnd = "&type=search&sort_by=best_seller";
        url = url.concat(formattedSearch, urlEnd);
        try{
          const result = await axios.get(url);
          return result;
        } catch (error){
          console.log(error);
        }
      },
      walmartSearch: async function(){
        let url = "https://api.bluecartapi.com/request?api_key=668C8CEDAB0F4825B6305C1C7CED6177&search_term=";
        let searchCopy = this.searchTerm;
        const formattedSearch = searchCopy.split(" ").join("+");
        const urlEnd = "&type=search&sort_by=best_seller";
        url = url.concat(formattedSearch, urlEnd);
        try{
          const result = await axios.get(url);
          return result;
        } catch (error){
          console.log(error);
        }
      }
    }
  }
</script>
