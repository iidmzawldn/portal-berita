<template>
  <v-app-bar color="green-darken-1" prominent>
    <v-app-bar-nav-icon variant="text" @click.stop="$emit('openClose')"></v-app-bar-nav-icon>

    <v-toolbar-title></v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn icon="mdi-logout" variant="text" @click="logoutUser"></v-btn>
  </v-app-bar>
</template>

<script setup>
import { useAuthStores } from '../stores/AuthStores'
defineEmits(['openClose'])

// store
const auth = useAuthStores()
const { logoutUser } = auth
</script>
