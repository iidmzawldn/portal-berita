<template>
  <RouterView />
</template>

<script setup>
import { onMounted, provide } from 'vue'
import { RouterView } from 'vue-router'
import { useAuthStores } from './stores/AuthStores'
import { storeToRefs } from 'pinia'

const auth = useAuthStores()
const { currentUser } = storeToRefs(auth)

provide('currentUser', currentUser)

onMounted(() => {
  auth.userHandler()
})
</script>
