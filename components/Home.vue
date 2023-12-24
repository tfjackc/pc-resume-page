<template>
  <v-container>
    <v-card elevation="10">
    <v-row>
      <v-col class="d-flex justify-center" cols="12">
        <div>
          <v-progress-circular
              v-if="isLoading"
              indeterminate
              color="grey-lighten-5"
          ></v-progress-circular>
          <NuxtImg
              v-else
              format="webp"
              src="/paigevoegeli_logo_blacktext.png"
              sizes="100vw sm:80vw md:600px lg:700px xl:800px"
              @loadstart="isLoading = true"
              @load="isLoading = false"
          />
        </div>
      </v-col>
      <v-col class="about-div pa-10 mb-10 d-flex flex-column align-center justify-center" cols="12">
        <h1>Tulsa, Oklahoma, United States</h1>
        <h3><i>11+ Years of Industry Experience</i></h3>
        <p>Graduated in the fall of 2013 from The University of Tulsa with a bachelor’s degree in Petroleum Engineering. Paige is intimately familiar with the complexities of the oil and gas industry, being raised in a family that has owned, drilled, completed and operated wells the industry for three generations.</p>
      </v-col>
    </v-row>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isLoading = ref(false);
</script>

<style scoped>

</style>