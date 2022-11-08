<template>
  <div >
    <b-card class="center-element" no-body bg-variant="light" style="max-width: 40rem" title="Welcome">
            <template #header>
      <h4 class="center-text large-text">Welcome</h4>
    </template>
      <b-card-body>


        <b-row class="space">
          <b-col sm="3">
            <label for="input-small">Username:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input id="username" v-model="password"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="space">
          <b-col sm="3">
            <label for="input-small">Password:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input id="password" v-model="password"></b-form-input>
          </b-col>
        </b-row>

        <b-row>
        <b-col class="center-text space">
          <b-button size="lg" width="100px" class="bg-color" href="/">Sign in</b-button>
          </b-col>
        </b-row>

        <b-row>
        <b-col class="center-text space">
          <b-link href="/create-account" class="card-link">Create an account</b-link>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import ItemCard from "../components/ItemCard.vue";
import UpperBar from "../components/UpperBar.vue";

export default {
  components: {
    ItemCard,
    UpperBar,
  },

  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>

<style>

.center-element {
    width:700px;
      position: fixed;
      top: 50%;
      left: 50%;
      margin-top: -350px;
      margin-left: -350px;
}

.center-text {
    text-align: center;
}

.space {
    margin: 5px 0px 5px 0px
}

.large-text {
    font-size: 3em
}



</style>
