<template>
  <div >
    <b-alert v-model="error" variant="danger" dismissible>
        {{errorMessage}}
    </b-alert>
    <b-card class="center-element" no-body bg-variant="light" style="max-width: 40rem" title="Welcome">
            <template #header>
      <h4 class="center-text large-text">Welcome</h4>
    </template>
      <b-card-body>


        <b-row class="space">
          <b-col sm="3">
            <label for="input-small">Email:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input 
                id="email" 
                v-model="email"
                :state="validEmail"
                @input="clearEmailError">
            </b-form-input>
            <b-form-invalid-feedback>{{emailErrorMessage}}</b-form-invalid-feedback>
          </b-col>
        </b-row>

        <b-row class="space">
          <b-col sm="3">
            <label for="input-small">Password:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input 
                id="password" 
                v-model="password"
                :state="validPassword"
                @input="clearPasswordError">
            </b-form-input>
            <b-form-invalid-feedback>{{passwordErrorMessage}}</b-form-invalid-feedback>
          </b-col>
        </b-row>

        <b-row>
        <b-col class="center-text space">
          <b-button size="lg" width="100px" class="bg-color" @click="login">Sign in</b-button>
          </b-col>
        </b-row>

        <b-row>
        <b-col class="center-text space">
          <b-link class="card-link" href="/create-account">Create an account</b-link>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import ItemCard from "../components/ItemCard.vue";
import UpperBar from "../components/UpperBar.vue";
import { getAccounts, saveUserSession } from "/src/persistance/database.js"

export default {
  components: {
    ItemCard,
    UpperBar,
  },

  data() {
    return {
      email: "",
      password: "",
      error: false,
      errorMessage: "",

      validEmail: null,
      emailErrorMessage: "", 

      validPassword: null,
      passwordErrorMessage: "",

    };
  },

  mounted() {
    if (this.$store.state.session.user) {
        this.$router.push('/')
    }
  },

  methods: {

    async login() {
        console.log(this.$store.state.session.user)
        if (this.valid()) {
            getAccounts().then((accounts) => {
                
                if (accounts.data) {
                    for (let account of accounts.data) {
                        console.log(account.emailAddress, this.email)
                        if (account.emailAddress == this.email) {
                            if (account.password == this.password) {
                                this.$store.dispatch('session/loginUser', account)
                                saveUserSession(account.id)

                                this.$router.push('/')
                            } else {
                                this.validPassword = false;
                                this.passwordErrorMessage = "Incorrect password. Please try again"
                            }
                        }
                    }

                    if (!this.$store.state.session.user && this.validPassword === null) {
                        this.error = true;
                        this.errorMessage = "Account does not exist. Please select 'Create an account'";
                    }

                }
            })
        }
    },

    valid() {
        let valid = true;
        if (this.email.length < 1) {
            this.validEmail = false;
            this.emailErrorMessage = "Email field must not be blank."
            valid = false;
        }

        if (this.password.length < 1) {
            this.validPassword = false;
            this.passwordErrorMessage = "Password field must not be blank."
            valid = false;
        }

        return valid
    },

    clearEmailError() {
        this.validEmail = null;
        this.emailErrorMessage = ""
    },

    clearPasswordError() {
        this.validPassword = null;
        this.passwordErrorMessage = ""
    }
  }
};
</script>

<style>

.center-element {
    width: 640px; /* Can be in percentage also. */
    height: auto;
    margin: 0 auto;
    padding: 10px;
    position: relative;
    margin-top: 4em;
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
