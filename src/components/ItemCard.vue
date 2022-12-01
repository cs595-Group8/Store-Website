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
                <strong>Status: </strong> 
                <slot name="status"> {{ status }} </slot>
            </p>

            <div>
                <label> {{rating != undefined ? rating: "N/A"}} </label>
                <fa icon="fa-regular fa-star"/>
            </div> 
            
            <b-button variant="warning" v-if="isSearch" v-on:click="onSaveItem" style="margin-top: 2rem;display: flex; justify-content: space-between">
                Save Item 
                <fa icon="fa-regular fa-bookmark"/>
            </b-button>
            <b-button variant="outline-warning" v-else v-on:click="onDeleteItem" style="margin-top: 2rem;display: flex; justify-content: space-between">
                Delete Item
                <fa icon="fa-regular fa-bookmark"/>
            </b-button>

        </b-card-body>
            
      </b-card>
    </div>
  </template>
  
  <script>
    import { saveItem, deleteItem } from "/src/persistance/database.js"
    export default{
        props:{
            name: String,
            img: String,
            vendor: String,
            price: Number,
            rating: Number,
            productLink: String,
            isSearch: Boolean,
            status: String,
            update: Function | undefined
        },
        methods:{
            onSaveItem: function(){
                const msg = saveItem(this.name, this.price, this.vendor, "Available", this.rating, this.img, this.productLink);
                if (msg) {
                    this.error = true;
                    this.errorMessage = msg
                }
                if(this.update){
                    this.update();
                }
            },
            onDeleteItem: function(){
                deleteItem(this.productLink).then((msg) => {
                    if(msg) {
                        this.error = true;
                        this.errorMessage = msg;
                    }
                    if(this.update){
                        this.update();
                    }
                })
            }
        }
    }
  </script>