<template>
  <UpperBar></UpperBar>

  <div>
    <div>
      <b-card
        no-body
        header-text-variant="white"
        bg-variant="light"
      >
        <b-container>
        

          <b-row>



            <b-col cols="12" lg="6">
              <b-card-body>
                <b-card-title>My Profile</b-card-title>
                <b-container>
                  
                  <!-- First name input field ------->
                  <b-row>
                    <b-col>
                      <label for="input-small">First name:</label>
                      <b-form-input
                        id="first-name"
                        v-model="firstName"
                      ></b-form-input>
                    </b-col>
                  </b-row>

                  <!-- Last name input field -------->
                  <b-row>
                    <b-col>
                      <label for="input-small">Last name:</label>
                      <b-form-input
                        id="last-name"
                        v-model="lastName"
                      ></b-form-input>
                    </b-col>
                  </b-row>

                  <!-- Email input field ------------>
                  <b-row>
                    <b-col>
                      <label for="input-small">Email:</label>
                      <b-form-input
                        id="email"
                        v-model="email"
                      ></b-form-input>
                    </b-col>
                  </b-row>

                </b-container>
              </b-card-body>
            </b-col>

            <!-- Password block ----------------------------------->
            <b-col cols="12" lg="6">
              <b-card-body>
                <b-card-title>Change password: </b-card-title>

                <b-container>

                  <!-- Old password input field ----->
                  <b-row>
                    <b-col >
                      <label for="input-small">Old Password:</label>
                      <b-form-input
                        id="oldPassword"
                        v-model="oldPassword"
                      ></b-form-input>
                    </b-col>
                  </b-row>

                  <!-- New password input field ----->
                  <b-row>
                    <b-col >
                      <label for="input-small">New Password:</label>
                      <b-form-input
                        id="newPassword"
                        v-model="newPassword"
                      ></b-form-input>
                    </b-col>
                  </b-row>


                </b-container>
              </b-card-body>
            </b-col>
            <b-col>
              <hr />
              <b-card-body>
                <b-button variant="success" class="bg-color">Save changes</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-container>
      </b-card>
    </div>
  </div>
</template>

<script>
import UpperBar from "../components/UpperBar.vue";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      oldPassword: "",
      newPassword: "",
    }
  },

  components: {
    UpperBar,
  },
};
</script>

<style>

.bg-color {
    background-color: grey;
}

.center {
    align: center
}



.space {
    margin: 20px 0px 0px 10px;
    
}
</style>
