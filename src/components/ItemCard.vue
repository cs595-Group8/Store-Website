<template>
  <div>
    <b-card v-bind:img-src=img img-alt="Product Image" img-top>
        <b-card-body> 
            <b-link v-bind:href=productLink>
              {{name}}

            </b-link>
                <div style="display: flex; justify-content: space-between; ">
                    <p class="card-text">
                        <strong>Price:</strong> 
                        <div> {{price}}</div>
                    </p>
                    <p class="card-text">
                        <strong>Vendor: </strong> 
                        <div>{{vendor}}</div> 
                    </p>
                </div>
                    
                    <p class="card-text">
                        <strong>Status:</strong> 
                        <slot name="status"> Unknown </slot>
                    </p>

                    <div>
                        <label> {{rating != undefined ? rating: "N/A"}} </label>
                        <fa icon="fa-regular fa-star"/>
                    </div>
                    
                    
                    
        </b-card-body>
    </b-card>
  </div>
</template>

<script>
  export default{
      props:{
          name: String,
          img: String,
          vendor: String,
          price: Number,
          rating: Number,
          productLink: String
      }
  }
</script>