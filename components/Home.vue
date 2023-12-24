<template>
  <v-container>
    <v-card elevation="10">
    <v-row>
      <v-col class="d-flex justify-center" cols="12">
        <div>
          <NuxtImg
              preload
              format="webp"
              src="/paigevoegeli_logo_blacktext.png"
              lazy-src="/paigevoegeli_logo_blacktext.png"
              quality="85"
              cover
              sizes="100vw sm:80vw md:600px lg:700px xl:800px"
          >
            <template v-slot:placeholder>
              <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
              >
                <v-progress-circular
                    indeterminate
                    color="grey-lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
            </NuxtImg>
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
// import { storeToRefs } from "pinia";
// import { useDataStore} from "~/store/data_store";
// const dataStore = useDataStore();
</script>

<style scoped>

</style>