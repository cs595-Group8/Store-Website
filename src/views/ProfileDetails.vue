<template>
    <div class="profileDetails">
        <div class="wrapper">
            <b-card
                no-body
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 30rem;"
                class="mb-2">

                <b-card-body>
                    <b-card-title>Profile details: </b-card-title>
                    <b-card-text>
                        <b-container>
                            <b-row>
                                <b-col><b>First name: </b></b-col>
                                <b-col><b-form-input id="firstName" v-model="firstName" placeholder="Enter your first name"></b-form-input></b-col>
                            </b-row>

                            <b-row>
                                <b-col><b>Last name: </b></b-col>
                                <b-col><b-form-input id="lastName" v-model="lastName" placeholder="Enter your last name"></b-form-input></b-col>
                            </b-row>

                            <b-row>
                                <b-col><b>Email: </b></b-col>
                                <b-col><b-form-input id="email" v-model="email" placeholder="Enter your email address" type="email"></b-form-input></b-col>
                            </b-row>

                        </b-container>
                        <br>

                        <b-button>View Saved Items</b-button>
                    </b-card-text>
                </b-card-body>

                <hr>

                <b-card-body>
                    <b-card-text>
                        <b-card-title>Change password: </b-card-title>

                        <b-container>
                            <b-row>
                                <b-col><b>Old password: </b></b-col>
                                <b-col><b-form-input id="firstName" v-model="oldPassword" placeholder="Enter your current password"></b-form-input></b-col>
                            </b-row>

                            <b-row>
                                <b-col><b>New password: </b></b-col>
                                <b-col><b-form-input id="lastName" v-model="newPassword" placeholder="Enter your new password"></b-form-input></b-col>
                            </b-row>
                        </b-container>

                    </b-card-text>
                </b-card-body>
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

<style>
@media (min-width: 1024px) {
  .profileDetails {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

td {
    padding: 5px 10px 0px 10px
}
</style>
