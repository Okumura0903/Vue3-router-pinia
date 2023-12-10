<script setup>
import { ref } from "vue";
const count=ref(0);
const addToCount=()=>{
  count.value = count.value+1;
}
const subFromCount=()=>{
  count.value = count.value-1;
}

</script>

<template>
  <main>
    <div>
      <h4>The curren count is...</h4>
      <h1>{{count}}</h1>
      <button @click="subFromCount()">-</button>
      <button @click="addToCount()">+</button>
    </div>
  </main>
</template>

<style scoped>
  main {
    background-color: aliceblue;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div{
    text-align: center;
  }
</style>