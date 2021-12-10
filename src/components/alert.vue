<template>
    <div id="alert">
        <div class="alert alert-danger" role="alert">
            <p>This Content was blocked , 
            Please <span @click="alert">"Login"</span> to see the content</p>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'alert', 
    methods: {
    alert() {
        if (this.$store.state.isLogged == false) {
            this.$swal({
                position: 'top-end',
                icon: 'warning',
                title: 'You need to login first',
                showConfirmButton: false,
                timer: 1500
            })
          this.$router.push('/login')
        }
      }
    },
}
</script>

<style>
    #alert {
        padding-top: 70px;
    }

    #alert span {
        color: rgb(63, 160, 220);
        cursor: pointer;
    }
</style>