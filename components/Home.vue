<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useDataStore} from "~/store/data_store";
const dataStore = useDataStore();
const { src_url } = storeToRefs(dataStore);


</script>

<template>
  <v-container>
    <v-row>
      <v-col class="d-flex justify-center">
        <div class="ma-6">
          <v-img
              class="bg-white"
              width="400"
              :aspect-ratio="1"
              :src="src_url"
              cover
          ></v-img>
        </div>
      </v-col>
      <v-col class="about-div">
        <h1>About ...</h1>
        <h3>Reservoir Engineer w/ Skills etc...</h3>
        <p>Blurb paragraph...</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>