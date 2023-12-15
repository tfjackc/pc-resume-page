<template>
  <v-window v-model="tab">
    <v-window-item
        :value="1">
        <Home />
    </v-window-item>
    <v-window-item
        :value="2">

    </v-window-item>
    <v-window-item
        :value="3">
        <BusinessCard />
    </v-window-item>
  </v-window>
</template>

<script setup lang="ts">
import Home from "~/components/Home.vue"
import BusinessCard from "~/components/BusinessCard.vue";
import { useDataStore } from "~/store/data_store";
const dataStore = useDataStore();
const { tab } = storeToRefs(dataStore);
</script>

<style scoped>

</style>