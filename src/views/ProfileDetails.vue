<template>
  <UpperBar></UpperBar>

  <div>
    <div>
      <b-card no-body header-text-variant="white" bg-variant="light">
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
                        :placeholder="pFirstName"
                        v-model="firstName"
                        :state="validFirstName"
                        @input="clearFirstNameError"
                      >
                      </b-form-input>
                      <b-form-invalid-feedback>
                        {{ firstNameError }}
                      </b-form-invalid-feedback>
                    </b-col>
                  </b-row>

                  <!-- Last name input field -------->
                  <b-row>
                    <b-col>
                      <label for="input-small">Last name:</label>
                      <b-form-input
                        id="last-name"
                        v-model="lastName"
                        :placeholder="pLastName"
                        :state="validLastName"
                        @input="clearLastNameError"
                      >
                      </b-form-input>
                      <b-form-invalid-feedback>
                        {{ lastNameError }}
                      </b-form-invalid-feedback>
                    </b-col>
                  </b-row>

                  <!-- Email input field ------------>
                  <b-row>
                    <b-col>
                      <label for="input-small">Email:</label>
                      <b-form-input
                        id="email"
                        v-model="email"
                        :placeholder="pEmail"
                        :state="validEmail"
                        @input="clearEmailError"
                      >
                      </b-form-input>
                      <b-form-invalid-feedback>
                        {{ emailError }}
                      </b-form-invalid-feedback>
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
                    <b-col>
                      <label for="input-small">Old Password:</label>
                      <b-form-input
                        id="oldPassword"
                        v-model="oldPassword"
                        :state="validOldPassword"
                        @input="clearOldPasswordError"
                      >
                      </b-form-input>
                      <b-form-invalid-feedback>
                        {{ oldPasswordError }}
                      </b-form-invalid-feedback>
                    </b-col>
                  </b-row>

                  <!-- New password input field ----->
                  <b-row>
                    <b-col>
                      <label for="input-small">New Password:</label>
                      <b-form-input
                        id="newPassword"
                        v-model="newPassword"
                        :state="validNewPassword"
                        @input="clearNewPasswordError"
                      >
                      </b-form-input>
                      <b-form-invalid-feedback>
                        {{ newPasswordError }}
                      </b-form-invalid-feedback>
                    </b-col>
                  </b-row>
                </b-container>
              </b-card-body>
            </b-col>
            <b-col>
              <hr />
              <b-card-body>
                <b-button @click="saveChanges" variant="success" class="bg-color"
                  >Save changes</b-button
                >
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

      validFirstName: null,
      validLastName: null,
      validEmail: null,
      validOldPassword: null,
      validNewPassword: null,

      firstNameError: "",
      lastNameError: "",
      emailError: "",
      oldPasswordError: "",
      newPasswordError: "",
      error: false,
      errorMessage: "",
    };
  },

  components: {
    UpperBar,
  },

  computed: {
    pFirstName() {
      if (this.$store.state.session.user) {
        return this.$store.state.session.user.firstName;
      } else {
        return "";
      }
    },

    pLastName() {
      if (this.$store.state.session.user) {
        return this.$store.state.session.user.lastName;
      } else {
        return "";
      }
    },

    pEmail() {
      if (this.$store.state.session.user) {
        return this.$store.state.session.user.emailAddress;
      } else {
        return "";
      }
    },
  },

  methods: {

    saveChanges() {
        if (this.valid() && this.$store.state.session.user) {
            console.log('here')
            const newUser = JSON.parse(JSON.stringify(this.$store.state.session.user))

            if (this.firstName.length > 0) {
                newUser.firstName = this.firstName;
            }

            if (this.lastName.length > 0) {
                newUser.lastName = this.lastName;
            }

            if (this.email.length > 0) {
                newUser.emailAddress = this.email; 
            }

            if (this.newPassword.length > 0) {
                newUser.password = this.newPassword; 
            }

            this.$store.dispatch('session/updateUser', newUser)
                .then(() => {this.$router.push('/')})
        }

    },

    valid() {
        let valid = true;
        
        if (this.newPassword.length > 0 && this.newPassword.length < 8) {
            this.validNewPassword = false;
            this.newPasswordError = "Password must be at least 8 characters."
            valid = false;
        }

        if (this.newPassword.length > 0 && this.$store.state.session.user && this.oldPassword != this.$store.state.session.user.password) {
            this.validOldPassword = false;
            this.oldPasswordError = "Password is incorrect."
            valid = false
        }

        return valid
    }, 

    clearFirstNameError() {
      this.validFirstName = null;
      this.firstNameError = "";
    },

    clearLastNameError() {
      this.validLastName = null;
      this.lastNameError = "";
    },

    clearEmailError() {
      this.validEmail = null;
      this.emailError = "";
    },

    clearOldPasswordError() {
      this.validOldPassword = null;
      this.oldPasswordError = "";
    },

    clearNewPasswordError() {
      this.validNewPassword = null;
      this.newPasswordError = "";
    },
  },
};
</script>

<style>
.bg-color {
  background-color: grey;
}

.center {
  align: center;
}

.space {
  margin: 20px 0px 0px 10px;
}
</style>
