<script setup>
// import useNumbers from "../composables/useNumbers";
// const {numbers,filterNum}=useNumbers();
import { useNumbersStore } from "../stores/numbers";

const {numbers,filterNum}=useNumbersStore();

</script>
<template>
  <div>
    <h1>GreatGrandChild Component  {{ filterNum(7) }}</h1>
    <div class="line"></div>
  </div>
</template>