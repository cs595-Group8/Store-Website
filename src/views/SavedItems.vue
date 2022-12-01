

<template>
  <UpperBar></UpperBar>
  <div>
    <div v-if="this.hasItems()" style="display: flex">
      <div style="display: flex; justify-content: center">
        <div style="display: grid; grid-template-columns: auto auto auto auto auto auto; width: 80%; padding: 1rem">
          <div v-for="item of items">
            <ItemCard 
              v-bind:name=item.name
              v-bind:rating=item.rating
              v-bind:vendor=item.vendor
              v-bind:img=item.img
              v-bind:price=item.price
              v-bind:productLink=item.productLink
              v-bind:update="this.updateItems"
            />
          </div>
        </div>
      </div>
    </div> 
    <div v-else style="display: flex; justify-content: center; font-size: xx-large; margin-top: 7%;">
      <p> No items have been saved yet. Head to the search tab to start saving items! </p>
    </div>
  </div>
  

  
</template>
<script>
  import ItemCard from '../components/ItemCard.vue'
  import UpperBar from '../components/UpperBar.vue'
  import { getUserSession, getSavedItems } from "/src/persistance/database.js"
  
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
    data(){
      return{
        items: this.$store.state.session.user.savedItems
      }
      
    },
    methods:{
      updateItems: function(){  
        return getUserSession().then((user) => {
          getSavedItems(this.$store.state.session.user.id).then((data) => {
            this.items = data;
          });
          
        })  
      },
      hasItems: function(){
        if(this.items){
          return this.items.length > 0;
        }
        return false;
      }
    }
  }

</script>

