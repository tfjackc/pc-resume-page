<template>
  <v-layout class="rounded rounded-md">
    <AppBar />
    <v-main class="d-flex align-center justify-center">
      <slot />
    </v-main>
  </v-layout>
</template>
<script setup lang="ts">
import AppBar from "~/components/AppBar.vue";
</script>