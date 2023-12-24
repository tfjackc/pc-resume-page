<template>
  <v-container>
    <v-card elevation="10">
    <v-row>
      <v-col class="d-flex justify-center pt-10" cols="12">
          <v-progress-circular
              v-if="isLoading"
              :size="70"
              :width="7"
              color="purple"
              indeterminate
          ></v-progress-circular>
          <NuxtImg
              quality="80"
              :src="`/paigevoegeli_logo_blacktext.png`"
              :lazy-src="`/paigevoegeli_logo_blacktext.png`"
              cover
              sizes="100vw sm:80vw md:600px lg:700px xl:800px"
              @load="handleImageLoad"
          />
      </v-col>
      <v-col class="about-div pb-10 pl-10 pr-10 mb-10 d-flex flex-column align-center justify-center" cols="12">
        <h1>Tulsa, Oklahoma, United States</h1>
        <h3><i>11+ Years of Industry Experience</i></h3>
        <p>Graduated in the fall of 2013 from The University of Tulsa with a bachelor’s degree in Petroleum Engineering. Paige is intimately familiar with the complexities of the oil and gas industry, being raised in a family that has owned, drilled, completed and operated wells the industry for three generations.</p>
        <ContactCard />
      </v-col>
    </v-row>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ContactCard from "~/components/ContactCard.vue";
const isLoading = ref(true);
function handleImageLoad() {
isLoading.value = false;
}
</script>

<style scoped>

</style>