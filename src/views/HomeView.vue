<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import {useStoreCounter} from "@/stores/counter";

const store = useStoreCounter();

</script>

<template>
  <main>
    <h2>H2 {{store.doubleCount}}</h2>
    <TheWelcome />
  </main>
</template>
