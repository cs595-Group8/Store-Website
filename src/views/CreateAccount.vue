<template>
    <div class="profileDetails">
        <div class="wrapper">
            <b-card no-body img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
                style="max-width: 60rem;" class="mx-auto">

                <b-container>
                    <b-row>
                        <b-col cols="12" lg="6">
                            <b-card-body>
                                <b-card-title>Profile details</b-card-title>
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

                                    <b-row>
                                        <b-col>
                                            <!-- Password input field ------------>
                                            <b-form-group label-cols="4" content-cols="8" label="Password:"
                                                label-for="password">
                                                <b-form-input id="password" v-model="password"
                                                    placeholder="Enter your password">
                                                </b-form-input>
                                            </b-form-group>
                                        </b-col>
                                    </b-row>

                                    <b-row>
                                        <b-col>
                                            <!-- re-Password input field ------------>
                                            <b-form-group label-cols="4" content-cols="8" label="Re-enter Password:"
                                                label-for="ReEnterPassword">
                                                <b-form-input id="ReEnterPassword" v-model="ReEnterPassword"
                                                    placeholder="Enter your Password again">
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
                                <b-button variant="success">Continue</b-button>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-container>
            </b-card>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            Password: '',
            ReEnterPassword: ''
        }
    }
}
</script>