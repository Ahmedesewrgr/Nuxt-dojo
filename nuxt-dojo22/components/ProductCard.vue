<template>
  <div class="card text-center">
    <img :src="product.image" alt="product thumb" class="thumb" />
    <p class="font-bold text-gray-500 m-4 truncate">
      {{ product.title }}
      <NuxtLink :to="`/products/${product.id}`">
        <p class="btn my-4">view details</p>
      </NuxtLink>
    </p>
  </div>
</template>

<script setup>
import Products from "~/layouts/products.vue";
const { product } = defineProps(["product"]);
</script>

<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>
