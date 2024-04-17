<template>
  <h1>Profile</h1>
  <div v-for="user in usersData.userData" :key="user.name">
    <p>Name : {{ user.name }}</p>
    <p>Email : {{ user.email }}</p>
  </div>
  <v-divider></v-divider>
  <IconLink color="red" icon="mdi-youtube" link="#" />
  <IconLink color="yellow" icon="mdi-linkedin" link="#" />
  <IconLink color="green" icon="mdi-instagram" link="#" />
</template>

<script setup>
import IconLink from '../components/IconLink.vue'
import { useUserStorage } from '../stores/UserStorage'

// Storage
const usersData = useUserStorage()
</script>
