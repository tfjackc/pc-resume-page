

<template>
<v-container>
  <v-card elevation="10">
  <v-row>
    <v-col class="d-flex justify-center mt-5">
      <h1>Web URL</h1>
    </v-col>
  </v-row>
    <v-row>
    <v-col class="qr-code d-flex justify-center">
        <div class="ma-6 mt-0 pt-0">
          <v-progress-circular
              v-if="isLoading"
              :size="70"
              :width="7"
              color="#1f869b"
              indeterminate
          ></v-progress-circular>
          <NuxtImg
              quality="80"
              :src="`/frame.png`"
              :lazy-src="`/frame.png`"
              sizes="100vw sm:80vw md:400px"
              @load="handleImageLoad"
          />
        </div>
    </v-col>
  </v-row>
  </v-card>
</v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isLoading = ref(true);
function handleImageLoad() {
  isLoading.value = false;
}
</script>

<style scoped>

</style>