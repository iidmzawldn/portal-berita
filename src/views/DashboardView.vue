<template>
  <div v-if="!currentUser">
    <h1>Loading</h1>
  </div>
  <div v-else>
    <h1>Halo {{ currentUser.name }} ({{ currentUser.email }})🚀</h1>
    <p>Welcame brader!!!</p>
  </div>
</template>
<script setup>
import { useAuthStores } from '../stores/AuthStores'
import { storeToRefs } from 'pinia'

// store
const auth = useAuthStores()
const { currentUser } = storeToRefs(auth)
</script>
