<template>
  <v-container>
    <v-card elevation="10">
    <v-row>
      <v-col class="d-flex justify-center" cols="12">
        <div>
          <NuxtImg
              src="/paigevoegeli_logo_blacktext.png"
              sizes="100vw sm:80vw md:600px lg:700px xl:800px"
          >
          <template v-slot:placeholder>
            <div class="d-flex align-center justify-center fill-height">
              <v-progress-circular
                  color="grey-lighten-4"
                  indeterminate
              ></v-progress-circular>
            </div>
          </template>
            </NuxtImg>
        </div>
      </v-col>
      <v-col class="about-div ma-5 pa-5 mb-10 d-flex flex-column align-center justify-center" cols="12">
        <h1>Tulsa, Oklahoma, United States</h1>
        <h3><i>11+ Years of Industry Experience</i></h3>
        <p>Graduated in the fall of 2013 from The University of Tulsa with a bachelor’s degree in Petroleum Engineering. Paige is intimately familiar with the complexities of the oil and gas industry, being raised in a family that has owned, drilled, completed and operated wells the industry for three generations.</p>
      </v-col>
    </v-row>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
// import { storeToRefs } from "pinia";
// import { useDataStore} from "~/store/data_store";
// const dataStore = useDataStore();
</script>

<style scoped>

</style>