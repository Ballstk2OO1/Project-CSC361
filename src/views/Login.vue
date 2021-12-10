<template>
  <div class="login">  
  <div class="container login-container">
    
    <div class="row">
        <div class="col-md-6 login-form-1">
            <h3>Please Login</h3>
            <form action="#" @submit.prevent="Login">
             <div class="form-group">
                <label for="email">Email</label>
                <input type="text" class="form-control" placeholder="Enter your email" value="" v-model="user.email" required />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <!-- <b-icon icon="eye-fill" scale="1" variant="" pa-1 v-if="visibility == password"></b-icon>
                <a style="position: absolute: right: 5px; top: 5px;" class="notunderlined" v-if="visibility == text"><b-icon icon="eye-slash-fill" scale="1" variant="" pa-1></b-icon></a> -->
                <input type="password" class="form-control" placeholder="Password" value="" v-model="user.password" required/>
                
              </div>
              <div class="form-group">
                <input type="submit" class="btnSubmit" value="Login"/>
                
                <router-link to="/register" class="btn-link">  Create an account?</router-link>
              </div>
              <!-- <div class="form-group">
              <a href="/Info" class="ForgetPwd">Forget Password?</a>
              </div> -->
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
          user : {
              email : "",
              password : ""
          }
        }
    },
        methods: {

          Login() {
            let apiURL = 'http://localhost:9000/api/auth/login'
            console.log("user is",this.user.email)
            axios.post(apiURL, this.user).then((res) => {
              console.log("response",res.headers.authtoken)
              console.log("response",res.data.response)
              document.cookie=`token=${res.headers.authtoken}`
              


              this.$store.state.isLogged="true"
              this.$store.state.username=this.user.email
              
              
              console.log(this.$store.state.cansee)
              console.log(this.$store.state.isLogged)
              console.log(this.$store.state.username)
              
              this.$router.push('/')

              return this.$swal(
                'Login sucessful!!',
                '',
                'success')
            
            }).catch(error => {
              console.log(error)
              return this.$swal(
                'Email or Password is invalid',
                'Please try again',
                'warning')
            })
          },
    }
}

</script>

<style lang="scss">
.login {
  padding-top: 10px;
  font-family: 'Kanit';
}

.btnSubmit {
  border-radius: 10px;
  background-color: lightblue;
}

.stage {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #65799b;
}

.btn {
  width: 200px;
  font-size: 20px;
  height: 60px;
  border: none;
  outline: none;
  background: #c38b8b;
  color: #fff;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
}

.btn::before {
  position: absolute;
  content: "";
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  left: -2px;
  top: -2px;
  background: linear-gradient(
    124deg,
    #ff2400,
    #e81d1d,
    #e8b71d,
    #e3e81d,
    #1de840,
    #1ddde8,
    #2b1de8,
    #dd00f3,
    #dd00f3
  );
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  animation: move 20s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

.btn:hover::before {
  opacity: 1;
}

.btn::after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #555273;
  left: 0;
  top: 0;
  border-radius: 10px;
}

@keyframes move {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
</style>