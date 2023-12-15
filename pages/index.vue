<template>
  <v-window v-model="tab">
    <v-window-item
        :value="1">

    </v-window-item>
    <v-window-item
        :value="2">
      <v-col>

      </v-col>
    </v-window-item>
    <v-window-item
        :value="3">
      <v-col>

      </v-col>
    </v-window-item>
  </v-window>
</template>

<script setup lang="ts">
import { useDataStore } from "~/store/data_store";
const dataStore = useDataStore();
const { tab } = storeToRefs(dataStore);
</script>

<style scoped>

</style>