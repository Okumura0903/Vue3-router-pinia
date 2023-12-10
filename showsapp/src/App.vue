<script setup>
import BreakingBadCardsSuspense from "./components/BreakingBadCardsSuspense.vue";
import RickMortyCardsSuspense from "./components/RickMortyCardsSuspense.vue";
import Hero from "./components/Hero.vue";
import { ref } from "vue";

const isBreakingBad=ref(true);

</script>

<template>
  <main>
    <Hero :isBreakingBad="isBreakingBad" @selectShow="isBreakingBad=!isBreakingBad" />
    <!-- <BreakingBadCardsSuspense v-if="isBreakingBad" />
    <RickMortyCardsSuspense v-else /> -->
    <KeepAlive>
      <Component :is="isBreakingBad ? BreakingBadCardsSuspense : RickMortyCardsSuspense" />
    </KeepAlive>
  </main>
</template>

<style scoped>

</style>