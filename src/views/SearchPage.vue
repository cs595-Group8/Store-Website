

<template>
  <UpperBar></UpperBar>
  
  <div v-if="firstSearch" style="display: flex; justify-content: center; margin: 2rem;">
    <img src="../images/logo.png" style="margin: 1rem"/>
  </div>

  <div style="display: flex; justify-content: center">
    <b-form-input 
      v-model="searchTerm" 
      placeholder="Enter Item to Find"
      style="width: 50%"
      v-on:keyup.enter="search">
    </b-form-input>
    <b-button variant="primary" v-on:click="search">Search</b-button>
  </div>

  
  
  <div style="display: flex; justify-content: center" v-if="!firstSearch && isLoading">
    <img src="../images/loading.gif" style="margin: 1rem"/>
  </div>
  <div v-if="!firstSearch && !isLoading">
    <div style="display: flex; ">
      <FilterBox></FilterBox>
      <div style="display: flex; justify-content: center">
        <div style="display: grid; grid-template-columns: auto auto auto auto auto auto; width: 80%; padding: 1rem">
          <div v-for="item of itemsToShow">
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
      </div>
    </div>
    <div style="display: flex; align-items: center; justify-content: center">
      <b-button variant="warning" v-bind:disabled="start == 1" style="margin: 1rem" v-on:click="previous">Previous</b-button>
      <div> <p> Items {{start}}-{{end}} </p> </div>
      <b-button variant="warning" v-bind:disabled="end == items.length" style="margin: 1rem" v-on:click="next">Next</b-button> 
    </div>
  </div>
</template>

<script>
  import ItemCard from '../components/ItemCard.vue'
  import UpperBar from '../components/UpperBar.vue'
  import FilterBox from '../components/FilterBox.vue'
  import axios from "axios"
  import Item from '../models/item.js'
  
  export default {
    components:{
        ItemCard,
        UpperBar,
        FilterBox
    },
    data(){
      return{
        searchTerm: '',
        items: [],
        itemsToShow: [],
        firstSearch: true,
        isLoading: false,
        formatter: new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}),
        start: 1,
        end: 25
      }
    },
    methods: {
      search: async function (event) {
        this.firstSearch = false;
        this.isLoading = true;
        let items = [];
        const targetResults = await this.targetSearch();
        const walmartResults = await this.walmartSearch();
        if(targetResults.data.search_results != undefined){
          targetResults.data.search_results.forEach((item) => {
            items.push(new Item(item.product.title, this.formatter.format(item.offers.primary.price), "Target", "Available", item.product.rating, item.product.main_image, item.product.link));
          });
        }
        
        if(walmartResults.data.search_results != undefined){
          walmartResults.data.search_results.forEach((item) => {
            items.push(new Item(item.product.title, this.formatter.format(item.offers.primary.price), "Walmart", "Available", item.product.rating, item.product.main_image, item.product.link));
          });
        }
        this.isLoading = false;
        this.items = items.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        this.start = 1;
        this.end = this.items.length < 25 ? this.items.length: 25;
        this.itemsToShow = this.items.slice(this.start-1, this.end-1);
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
      },
      previous: function(event){
        this.start = this.start - 25; 
        this.end = this.end - 25;
        this.itemsToShow = this.items.splice(this.start, this.end);
      },
      next: function(event){
        this.start = this.start + 25;
        this.end = this.end + 25;
        this.itemsToShow = this.items.splice(this.start, this.end);
      }
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
