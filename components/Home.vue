<template>
  <v-container>
    <v-card elevation="10">
    <v-row>
      <v-col class="d-flex justify-center pt-10" cols="12">
        <div class="ma-6 mt-0 pt-0">
          <div v-if="isLoading">
            <v-progress-circular
                :size="70"
                :width="7"
                color="purple"
                indeterminate
            ></v-progress-circular>
          </div>
        </div>
          <NuxtImg
              quality="80"
              :src="`/paigevoegeli_logo_blacktext.png`"
              :lazy-src="`/paigevoegeli_logo_blacktext.png`"
              cover
              sizes="100vw sm:80vw md:600px lg:700px xl:800px"
              @load="handleImageLoad"
          >
<!--            <template v-slot:placeholder>-->
<!--              <v-row-->
<!--                  class="fill-height ma-0"-->
<!--                  align="center"-->
<!--                  justify="center"-->
<!--              >-->
<!--                <v-progress-circular-->
<!--                    indeterminate-->
<!--                    color="grey-lighten-5"-->
<!--                ></v-progress-circular>-->
<!--              </v-row>-->
<!--            </template>-->
          </NuxtImg>
      </v-col>
      <v-col class="about-div pb-10 pl-10 pr-10 mb-10 d-flex flex-column align-center justify-center" cols="12">
        <h1>Tulsa, Oklahoma, United States</h1>
        <h3><i>11+ Years of Industry Experience</i></h3>
        <p>Graduated in the fall of 2013 from The University of Tulsa with a bachelor’s degree in Petroleum Engineering. Paige is intimately familiar with the complexities of the oil and gas industry, being raised in a family that has owned, drilled, completed and operated wells the industry for three generations.</p>
      </v-col>
    </v-row>

    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
const isLoading = ref(false);
function handleImageLoad() {
  console.log(isLoading.value)
  isLoading.value = false;
  console.log('Image has been loaded');
}
</script>

<style scoped>

</style>