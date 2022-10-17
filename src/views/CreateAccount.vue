<template>
    <div class="create-account">
        <div class="wrapper">
            <b-card no-body img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
                style="max-width: 30rem;" class="mb-2">

                <b-card-body>
                    <b-card-title>Profile details: </b-card-title>
                    <b-card-text>
                        <table>
                            <tr>
                                <td><b>First name: </b></td>
                                <td>
                                    <b-form-input id="firstName" v-model="firstName"
                                        placeholder="Enter your first name"></b-form-input>
                                </td>
                            </tr>

                            <tr>
                                <td><b>Last name: </b></td>
                                <td>
                                    <b-form-input id="lastName" v-model="lastName" placeholder="Enter your last name">
                                    </b-form-input>
                                </td>
                            </tr>

                            <tr>
                                <td><b>Email: </b></td>
                                <td>
                                    <b-form-input id="email" v-model="email" placeholder="Enter your email address"
                                        type="email"></b-form-input>
                                </td>
                            </tr>

                            <tr>
                                <td><b>Creat Password: </b></td>
                                <td>
                                    <b-form-input id="Password" v-model="email" placeholder="Enter your new Password"
                                        type="password"></b-form-input>
                                </td>
                            </tr>

                            <tr>
                                <td><b>Re-enter Password: </b></td>
                                <td>
                                    <b-form-input id="RePassword" v-model="email"
                                        placeholder="Enter your Password again" type="confirmpassword"></b-form-input>
                                </td>
                            </tr>

                        </table>
                        <br>

                        <b-button>Continue</b-button>
                    </b-card-text>
                </b-card-body>

                <hr>


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
            RePassword: ''
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
