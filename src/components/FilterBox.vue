<template>
    <div>
  <b-card id="card">
    <div>
    <b-form-group label="Price" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="selectedPrice" :aria-describedby="ariaDescribedby" name="price" value="A">Ascending</b-form-radio>
      <b-form-radio v-model="selectedPrice" :aria-describedby="ariaDescribedby" name="price" value="B">Descending</b-form-radio>
    </b-form-group>

   
  </div>
  </b-card>
  <b-card id="card">
    <div>
    <b-form-group label="Reviews" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="selectedReviews" :aria-describedby="ariaDescribedby" name="reviews" value="A">Ascending</b-form-radio>
      <b-form-radio v-model="selectedReviews" :aria-describedby="ariaDescribedby" name="reviews" value="B">Descending</b-form-radio>
    </b-form-group>

    
  </div>
  </b-card>
  <b-card id="card">
    <div>
    <b-form-group label="Avability" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="selectedAva" :aria-describedby="ariaDescribedby" name="Availibity" value="A">Ascending</b-form-radio>
      <b-form-radio v-model="selectedAva" :aria-describedby="ariaDescribedby" name="Availibity" value="B">Descending</b-form-radio>
    </b-form-group>

    
  </div>
  </b-card>
</div>
</template>


<script>
  
</script>

<style> 
  #card {
    margin: 5px;
  }
</style>