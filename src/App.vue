<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <b-container fluid>
        <header>
        </header>

        <div>


       

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/profile-details">Profile Details</RouterLink>
        <RouterLink to="/saved-items">Saved Items</RouterLink>
      </nav>
    </div>
  </header>
  
 <RouterView />

        </div>
    </b-container>
</template>
