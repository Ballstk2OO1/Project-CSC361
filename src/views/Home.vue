<template>
  <div class="home">
    <b-container class="content" fluid="expand-lg">
      <h1>What is</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores neque harum unde illo quisquam delectus natus autem perferendis ipsa nobis, modi rem accusamus placeat magnam. Temporibus dignissimos ipsa facilis maiores.</p>
    </b-container>

    <b-container class="content2" fluid="expand-lg">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores neque harum unde illo quisquam delectus natus autem perferendis ipsa nobis, modi rem accusamus placeat magnam. Temporibus dignissimos ipsa facilis maiores.</p>
    </b-container>

    <b-container id="card" fluid>
      <div class="container flex-center">
        <div class="row">
          <div class="col-12 col-lg-6 col-md-6 mt-4 mb-4">
            <b-card
              title="Build your own"
              img-src="https://picsum.photos/600/300/?image=29"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 30rem;"
              class="mb-2 mx-auto"
            >
            
              <b-card-text>
               
              </b-card-text>

              <b-button href="/build" variant="primary">Build</b-button>
            </b-card>
          </div>

          <div class="col-12 col-lg-6 col-md-6 mt-4 mb-4">
            <b-card
              title="Compare your own"
              align-title="center"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 30rem;"
              class="mb-2 mx-auto"
            >
            
              <b-card-text>
                
              </b-card-text>

              <b-button href="/compare" variant="primary">Compare</b-button>
            </b-card>
          </div>

        </div>
      </div>
    </b-container>

    

  </div>
</template>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
  .content {
    padding-top: 70px;
    height: 200px;
    background-color: red;
  }
  .content2 {
    padding-top: 100px;
    text-align: right;
    height: 200px;
    background-color: red;
  }

  .content3 {
    height: 400px;
    background-color: wheat;
  }
</style>

<script>

</script>
