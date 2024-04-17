<template>
  <v-app>
    <!-- Header -->
    <HeaderComponent />
    <!-- Main -->
    <main>
      <v-container class="my-10" style="min-height: 65vh">
        <RouterView />
      </v-container>
    </main>
    <!-- Footer -->
    <FooterComponent />
  </v-app>
</template>
<script setup>
import HeaderComponent from '../components/public/HeaderComponent.vue'
import FooterComponent from '../components/public/FooterComponent.vue'
</script>
