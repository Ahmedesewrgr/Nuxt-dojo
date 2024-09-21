<template>
    <div class="card">
<div class=" grid grid-cols-2 gap-4">
    <div class="p-7">
        <img :src="product.image" alt="product img" class="mx-auto my-7" :key="product.id">

    </div>
    <div class="p-7">
        <h2 class="text-4x1 my-7">{{ product.title }}</h2>
        <p class="text-x1 my-7">Price-${{ product.price }}</p>
        <h3 class="font-bold border-b-2 mb-4 pb-2 ">Product description</h3>
        <p class=" mb-7">Price-${{ product.description }}</p>
        <button class="btn flex">
            <i class="material-icons mr-2"></i>
            <span>Add to cart</span>
        </button>
    </div>
</div>
    </div>
</template>

<script setup>
const {product}=defineProps(['product'])
</script>

<style  scoped>
img{
    max-width: 350px;
}
</style>