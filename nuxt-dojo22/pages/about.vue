<template>
  <div>
    <h2>about</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nam et
      tempora qui ipsum debitis, veritatis iste molestiae quod vero soluta quis
      minus cupiditate laborum, vel possimus voluptatem deleniti sint!
    </p>
    {{ data }}
  </div>
</template>

<script setup>

const {data}=await useFetch('/api/ninja')

</script>

<style scoped>
h2{
    margin-bottom:20px ;
    font-size: 36px;

}

p{
    margin: 20px 0;
}
</style>
