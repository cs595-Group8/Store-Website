<template>
    <div>
  <b-card id="card">
    <div>
    <b-form-group label="Price" v-slot="{ ariaDescribedby }">
      <b-form-radio v-on:click="eventController" id="Price Ascending" v-model="selectedPrice" :aria-describedby="ariaDescribedby" name="price" value="A">Ascending</b-form-radio>
      <b-form-radio v-on:click="eventController" id= "Price Descending" v-model="selectedPrice" :aria-describedby="ariaDescribedby" name="price" value="B">Descending</b-form-radio>
    </b-form-group>

   
  </div>
  </b-card>
  <b-card id="card">
    <div>
    <b-form-group label="Reviews" v-slot="{ ariaDescribedby }">
      <b-form-radio v-on:click="eventController" id = "Reviews Ascending" v-model="selectedReviews" :aria-describedby="ariaDescribedby" name="reviews" value="A">Ascending</b-form-radio>
      <b-form-radio v-on:click="eventController" id = "Reviews Descending" v-model="selectedReviews" :aria-describedby="ariaDescribedby" name="reviews" value="B">Descending</b-form-radio>
    </b-form-group>

    
  </div>
  </b-card>
  <b-card id="card">
    <div>
    <b-form-group label="Avability" v-slot="{ ariaDescribedby }">
      <b-form-radio v-on:click="eventController" id = "Availability Ascending" v-model="selectedAva" :aria-describedby="ariaDescribedby" name="Availibity" value="A">Ascending</b-form-radio>
      <b-form-radio v-on:click="eventController" id = "Availability Descending" v-model="selectedAva" :aria-describedby="ariaDescribedby" name="Availibity" value="B">Descending</b-form-radio>
    </b-form-group>

    
  </div>
  </b-card>
</div>
</template>


<script>
  export default{
    props:{
        priceFilter: Function,
        ratingsFilter: Function,
        availibilityFilter: Function
    },
    methods:{
      eventController: function(event){
        const test = event;
        switch (event.currentTarget.id){
          case "Price Ascending":
            this.priceFilter("HighToLow");
            break;
          case "Price Descending":
            this.priceFilter("LowToHigh");
            break;
          case "Reviews Ascending":
            this.ratingsFilter("HighToLow");
            break;
          case "Reviews Descending":
            this.ratingsFilter("LowToHigh");
            break;
          case "Availability Ascending":
            this.availibilityFilter("InStock");
            break;
          case "Availability Descending":
            this.availibilityFilter("OutOfStock");
            break;
          


        }
      }
    }
  }

</script>

<style> 
  #card {
    margin: 5px;
  }
</style>