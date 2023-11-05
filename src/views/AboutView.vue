<script setup lang="ts">


import {ref} from "vue";
import {useStoreCounter} from "@/stores/counter";

const bu = ref<boolean>(true)

const store = useStoreCounter();

</script>

<template>
  <div class="about p-6" :class="[bu ? 'bg-red-500' : 'bg-blue-400' ]">
    <h1 @click="bu = !bu">This is an about page {{store.count}} + {{store.doubleCount}}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
