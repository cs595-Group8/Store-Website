<template>

    <div class="createAccount">
        <b-alert v-model="error" variant="danger" dismissible>
            {{errorMessage}}
        </b-alert>
        <div class="wrapper">
            <b-card 
                bg-variant="light">

                <b-container>
                    <b-row>
                        <b-col cols="12" lg="6">
                            <b-card-body>
                                <b-card-title>Create Account</b-card-title>
                                <b-container>
                                    <b-row>
                                        <b-col>
                                            <!-- First name input field ------->
                                            <b-form-group 
                                                label-cols="4" 
                                                content-cols="8" 
                                                label="First name:"
                                                label-for="first-name">
                                                <b-form-input 
                                                    id="first-name" 
                                                    v-model="firstName"
                                                    placeholder="Enter your first name"
                                                    :state="validFirstName"
                                                    @input="clearFirstNameError">
                                                </b-form-input>
                                                <b-form-invalid-feedback>
                                                    {{firstNameError}}
                                                </b-form-invalid-feedback>
                                            </b-form-group>
                                        </b-col>
                                    </b-row>

                                    <b-row>
                                        <b-col>
                                            <!-- Last name input field -------->
                                            <b-form-group 
                                                label-cols="4" 
                                                content-cols="8" 
                                                label="Last name:"
                                                label-for="last-name">
                                                <b-form-input 
                                                    id="last-name" 
                                                    v-model="lastName"
                                                    placeholder="Enter your last name"
                                                    :state="validLastName"
                                                    @input="clearLastNameError">
                                                </b-form-input>
                                                <b-form-invalid-feedback>
                                                    {{lastNameError}}
                                                </b-form-invalid-feedback>
                                            </b-form-group>
                                        </b-col>
                                    </b-row>

                                    <b-row>
                                        <b-col>
                                            <!-- Email input field ------------>
                                            <b-form-group 
                                                label-cols="4" 
                                                content-cols="8" 
                                                label="Email:"
                                                label-for="email">
                                                <b-form-input 
                                                    id="email" 
                                                    v-model="email"
                                                    placeholder="Enter your email address"
                                                    :state="validEmail"
                                                    @input="clearEmailError">
                                                </b-form-input>
                                                <b-form-invalid-feedback>
                                                    {{emailError}}
                                                </b-form-invalid-feedback>
                                            </b-form-group>
                                        </b-col>
                                    </b-row>

                                </b-container>
                            </b-card-body>
                        </b-col>

                        <!-- Password block ----------------------------------->
                        <b-col cols="12" lg="6">
                            <b-card-body>

                                <!-- <b-card-title>Change password: </b-card-title> -->

                                <b-container>
                                    <b-row>
                                        <b-col>
                                            <!-- Password input field ----->
                                            <b-form-group 
                                                label-cols="6" 
                                                label-cols-sm="4" 
                                                content-cols="6"
                                                content-cols-sm="8" 
                                                label="Password:" 
                                                label-for="password">
                                                <b-form-input 
                                                    id="password" 
                                                    v-model="password" 
                                                    @input="clearPasswordError"
                                                    placeholder="Enter a password">
                                                </b-form-input>
                                            </b-form-group>
                                        </b-col>
                                    </b-row>

                                    <b-row>
                                        <b-col>
                                            <!-- Password check field ----->
                                            <b-form-group 
                                                label-cols="6" 
                                                label-cols-sm="4" 
                                                content-cols="6"
                                                content-cols-sm="8" 
                                                label="Re-enter password:" 
                                                label-for="rePassword">
                                                <b-form-input 
                                                    id="rePassword" 
                                                    v-model="rePassword"
                                                    placeholder="Enter your password again"
                                                    :state="validPassword"
                                                    @input="clearPasswordError">
                                                </b-form-input>
                                                <b-form-invalid-feedback>
                                                    {{passwordError}}
                                                </b-form-invalid-feedback>
                                            </b-form-group>
                                        </b-col>
                                    </b-row>
                                </b-container>
                            </b-card-body>
                        </b-col>
                        <b-col>
                            <hr>
                            <b-card-body>
                                <b-button variant="success" @click="createAccount">Create Account</b-button>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-container>
            </b-card>
        </div>
    </div>
</template>

<script>
import { saveAccount } from "/src/persistance/database.js"

export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            rePassword: '',

            validFirstName: null,
            validLastName: null,
            validEmail: null,
            validPassword: null,

            firstNameError: "",
            lastNameError: "",
            emailError: "",
            passwordError: "",

            error: false,
            errorMessage: ""

        }
    },

    methods: {
        async createAccount() {
            if (this.validate()) {
                const msg = await saveAccount(this.firstName, this.lastName, this.email, this.password)
                if (msg) {
                    this.error = true;
                    this.errorMessage = msg
                } else {
                    this.$router.push('/login')
                }
            }
        },

        validate() {
            let valid = true;

            if (this.firstName.length < 1) {
                this.validFirstName = false;
                this.firstNameError = "First name field must not be blank."
            }

            if (this.firstName.length < 1) {
                this.validLastName = false;
                this.lastNameError = "Last name field must not be blank."
            }

            if (this.email.length < 1) {
                this.validEmail = false;
                this.emailError = "Email field must not be blank."
            }

            if (this.password.length < 8) {
                this.validPassword = false;
                this.passwordError = this.passwordError + "Password must be at least 8 characters. "
                valid = false;
            } 
            
            if (this.password !== this.rePassword) {
                this.validPassword = false;
                this.passwordError = this.passwordError + "Passwords don't match."
                valid = false;
            }


            return valid;
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

        clearPasswordError() {
            this.validPassword = null;
            this.passwordError = ""
        }

    }
}

</script>


