<template>
  <v-layout>
    <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

    <!-- sidebar -->
    <SideBar v-model="drawer" />

    <!-- navbar -->
    <NavBar @openClose="drawerOpenClose" />

    <!-- main -->
    <v-main>
      <v-card>
        <v-container>
          <RouterView />
        </v-container>
      </v-card>
    </v-main>
  </v-layout>
</template>

<script setup>
import { ref, provide } from 'vue'
import SideBar from '../components/SideBar.vue'
import NavBar from '../components/NavBar.vue'
import { RouterView } from 'vue-router'

const drawer = ref(true)

provide('username', 'GONEWS')

const drawerOpenClose = () => {
  drawer.value = !drawer.value
}
</script>
