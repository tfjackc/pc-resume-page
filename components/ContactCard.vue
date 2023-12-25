<template>
  <v-col cols="auto">
    <v-dialog
        transition="dialog-top-transition"
        width="600"
    >
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" color="#dfc8a8" size="large" variant="elevated">Contact Me</v-btn>
      </template>
      <template v-slot:default="{ isActive }">
        <v-card>
          <v-toolbar
              color="grey-lighten-5"
              title="Contact Me"
          ></v-toolbar>
          <v-card-text class="contact-me">
            <v-form>
              <v-text-field
                  label="Name"
                  :model-value="name"
                  required
                  prepend-icon="mdi-account"
              ></v-text-field>
              <v-text-field
                  label="Email"
                  :model-value="email"
                  required
                  prepend-icon="mdi-email"
              ></v-text-field>
              <v-textarea
                  label="Message"
                  :model-value="message"
                  required
                  prepend-icon="mdi-message"
              ></v-textarea>
            </v-form>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn
                variant="elevated"
                @click="isActive.value = false"
                color="grey-darken-1"
            >Close</v-btn>
            <v-btn
                variant="elevated"
                color="#dfc8a8"
                @click="submitForm"
            >Submit</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-col>
</template>

<script setup lang="ts">
import { storeToRefs} from "pinia";
import { useDataStore} from "~/store/data_store";
const data_store = useDataStore();
const { name, email, message } = storeToRefs(data_store);

async function submitForm() {
  console.log('submitting form');
  // const response = await fetch('/api/send-email');
  //
  // if (!response.ok) {
  //   console.error('Error sending email:', response.statusText);
  // } else {
  //   const responseData = await response.json();
  //   console.log(responseData.message); // logs 'Email sent'
  // }
}
</script>

<style scoped>

</style>


