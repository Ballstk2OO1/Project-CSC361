<template>
  <div class="register">
  <div class="container register-container">
    <div class="row">
        <div class="col-md-6 register-form-1">
            <h3>Register</h3>
            <form action="#" @submit.prevent="handleSubmitForm">
             <div class="form-group">
                <v-alert

                >
                </v-alert>
                <label for="username">Username</label> 
                <input type="text" class="form-control" placeholder="Username (min 4 ~)" v-model="users.username" required/>
              </div>
             <div class="form-group">
                <label for="email">Email</label> 
                <input type="text" class="form-control" placeholder="Email (example@mail.com) " v-model="users.email" required />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" placeholder="Password (min 8 ~)" v-model="users.password" required />
              </div>
              <div class="form-group">
                <input type="submit" class="btnSubmit" value="Create Account"/>
                <router-link to="/login" class="btn-link">Cancel</router-link>
              
              </div>
              
              </form>
        </div>
    </div>
  </div>
  </div>
          
</template>

<script>

    import axios from 'axios'
    export default {
        data() {
          return {
            users : {
              username : "",
              email : "",
              password : ""
            }
          }
        },
        methods: {
          handleSubmitForm() {
            let apiURL = 'http://localhost:9000/api/auth/register'
            console.log("username",this.users.username)
            axios.post(apiURL, this.users).then((res) => {
              console.log(this.users.response)
              console.log(res.users.response)
              this.$router.push('/login')

              return this.$swal(
                'Your account was created',
                '',
                'success')
          
              
            }).catch(error => {
              console.log(error)
              return this.$swal(
                'Cannot create an account',
                'This email already exist',
                'error')
            })
          }
    }
}
</script>    

<style lang="scss" scoped>
.register {
    padding-top: 10px;
    font-family: 'Kanit';
    font-size: 18px;
}

.btnSubmit {
  border-radius: 10px;
  background-color: lightblue;
}
</style>
