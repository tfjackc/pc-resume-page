<template>
  <v-app-bar>
<!--    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>-->

    <v-spacer></v-spacer> <!-- This will push the next elements to the right -->

    <v-tabs
        v-model="tab"
        color="#1e859a"
        align-tabs="center"
    >
      <v-tab :value="1">About</v-tab>
      <v-tab :value="2">Resume</v-tab>
      <v-tab :value="3">Business Card</v-tab>
    </v-tabs>

    <v-spacer></v-spacer> <!-- This will push the next elements to the right -->

<!--    <v-btn @click="toggleTheme"><v-icon icon="mdi-theme-light-dark" /></v-btn>-->
  </v-app-bar>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useDataStore} from "~/store/data_store";
const dataStore = useDataStore();
const { tab, drawer } = storeToRefs(dataStore);
// import { useTheme } from 'vuetify'
// const theme = useTheme()
// function toggleTheme () {
//   theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
//   console.log(theme.global.name.value)
// }
</script>