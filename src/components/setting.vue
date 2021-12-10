<template>
    <div id="history" class="container">

        <b-tabs content-class="mt-3">

            <b-tab title="History" active>
            

                
            </b-tab>

            <b-tab title="Change password">
                
            
            <h3>Please Login</h3>
            <form action="#">
             <div class="form-group">
                <label for="password">Password</label>
                <input type="text" class="form-control" placeholder="Enter your password" value="" v-model="password" required />
              </div>
              <div class="form-group">
                <label for="new password">New password</label>
                <!-- <b-icon icon="eye-fill" scale="1" variant="" pa-1 v-if="visibility == password"></b-icon>
                <a style="position: absolute: right: 5px; top: 5px;" class="notunderlined" v-if="visibility == text"><b-icon icon="eye-slash-fill" scale="1" variant="" pa-1></b-icon></a> -->
                <input type="password" class="form-control" placeholder="Enter new password" value="" v-model="newpassword" required/>
                
              </div>
              <div class="form-group">
                <input type="submit" class="btnSubmit" value="Confirm"/>
                
              </div>
              <!-- <div class="form-group">
              <a href="/Info" class="ForgetPwd">Forget Password?</a>
              </div> -->
              </form>
           
                
            </b-tab>



        </b-tabs>
    </div>
</template>

<script>
export default {
    name : 'history',
    components: {
        
    }
}
</script>

<style lang="scss">
    
.container {
    padding-top: 70px;
    justify-content: center;
    width: 100%;
    font-family: 'Kanit';
}

</style>