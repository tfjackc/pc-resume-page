<script setup lang="ts">
import { useDataStore } from "~/store/data_store.js";
import { EText } from 'vue-email'
const dataStore = useDataStore();
const { name, email, message } = storeToRefs(dataStore);
</script>

<template>
  <EText>{{name}}</EText>
  <EText>{{email}}</EText>
  <EText>{{message}}</EText>
</template>