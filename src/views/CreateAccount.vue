<template>
    <UpperBar></UpperBar>
    <div class="createAccount">
        <div class="wrapper">
            <b-card header="Saved Items" header-text-variant="white" header-tag="header" header-bg-variant="success"
                footer-border-variant="dark">

                <b-container>
                    <b-row>
                        <b-col cols="12" lg="6">
                            <b-card-body>
                                <b-card-title>Create Account</b-card-title>
                                <b-container>
                                    <b-row>
                                        <b-col>
                                            <!-- First name input field ------->
                                            <b-form-group label-cols="4" content-cols="8" label="First name:"
                                                label-for="first-name">
                                                <b-form-input id="first-name" v-model="firstName"
                                                    placeholder="Enter your first name"></b-form-input>
                                            </b-form-group>
                                        </b-col>
                                    </b-row>

                                    <b-row>
                                        <b-col>
                                            <!-- Last name input field -------->
                                            <b-form-group label-cols="4" content-cols="8" label="Last name:"
                                                label-for="last-name">
                                                <b-form-input id="last-name" v-model="lastName"
                                                    placeholder="Enter your last name">
                                                </b-form-input>
                                            </b-form-group>
                                        </b-col>
                                    </b-row>

                                    <b-row>
                                        <b-col>
                                            <!-- Email input field ------------>
                                            <b-form-group label-cols="4" content-cols="8" label="Email:"
                                                label-for="email">
                                                <b-form-input id="email" v-model="email"
                                                    placeholder="Enter your email address">
                                                </b-form-input>
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
                                            <!-- Old password input field ----->
                                            <b-form-group label-cols="6" label-cols-sm="4" content-cols="6"
                                                content-cols-sm="8" label="password:" label-for="password">
                                                <b-form-input id="password" v-model="oldPassword"
                                                    placeholder="Enter a password">
                                                </b-form-input>
                                            </b-form-group>
                                        </b-col>
                                    </b-row>

                                    <b-row>
                                        <b-col>
                                            <!-- New password input field ----->
                                            <b-form-group label-cols="6" label-cols-sm="4" content-cols="6"
                                                content-cols-sm="8" label="Re-enter password:" label-for="rePassword">
                                                <b-form-input id="rePassword" v-model="rePassword"
                                                    placeholder="Enter your password again">
                                                </b-form-input>
                                            </b-form-group>
                                        </b-col>
                                    </b-row>
                                </b-container>
                            </b-card-body>
                        </b-col>
                        <b-col>
                            <hr>
                            <b-card-body>
                                <b-button variant="success">Create Account</b-button>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-container>
            </b-card>
        </div>
    </div>
</template>

<script>
import UpperBar from '../components/UpperBar.vue'
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            rePassword: ''
        }
    },
    components: {
        UpperBar
    }
}

</script>


