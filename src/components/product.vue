<template>
    <div class="product">
        <div class="product-inner">
            <div class="product-text-wrap">
                <h2 class="bg-text">
                    {{ product.name }}
                </h2>
            </div>
            <div class="product-image-wrap">
                <img :src="product.image" />
            </div>
            <div class="product-detail">
               <h2>{{ product.name }}</h2> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'product',
    props : ['product']
}
</script>