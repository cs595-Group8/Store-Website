<template>
    <div class="profileDetails">
        <div class="wrapper">
            <b-card
                no-body
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 60rem;"
                class="mx-auto">

                <b-container>
                    <b-row>
                        <b-col cols="12" lg="6">
                            <b-card-body>
                                <b-card-title>Profile details</b-card-title>
                                <b-container>
                                    <b-row>
                                        <b-col>
                                            <!-- First name input field ------->
                                            <b-form-group 
                                                label-cols="4"
                                                content-cols="8"
                                                label="First name:"
                                                label-for="first-name">
                                                <b-form-input id="first-name" v-model="firstName" placeholder="Enter your first name"></b-form-input>
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
                                                    placeholder="Enter your last name">
                                                </b-form-input>
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

                                <b-card-title>Change password: </b-card-title>

                                <b-container>
                                    <b-row>
                                        <b-col>
                                            <!-- Old password input field ----->
                                            <b-form-group 
                                                label-cols="6"
                                                label-cols-sm="4"
                                                content-cols="6"
                                                content-cols-sm="8"
                                                label="Old password:"
                                                label-for="old-password">
                                                <b-form-input 
                                                    id="old-password" 
                                                    v-model="oldPassword" 
                                                    placeholder="Enter your current password">
                                                </b-form-input>
                                            </b-form-group>
                                        </b-col>
                                    </b-row>

                                    <b-row>
                                        <b-col>
                                            <!-- New password input field ----->
                                            <b-form-group 
                                                label-cols="6"
                                                label-cols-sm="4"
                                                content-cols="6"
                                                content-cols-sm="8"
                                                label="New password:"
                                                label-for="new-password">
                                                <b-form-input 
                                                    id="new-password" 
                                                    v-model="newPassword" 
                                                    placeholder="Enter your new password">
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
                                <b-button variant="success">Save changes</b-button>
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
        oldPassword: '',
        newPassword: ''
      }
    }
  }

</script>


