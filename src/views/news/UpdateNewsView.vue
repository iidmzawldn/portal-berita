<template>
  <h1>Edit Berita</h1>
  <v-divider></v-divider>
  <FormInputNews />
</template>
<script setup>
import FormInputNews from '../../components/news/FormInput.vue'
import { useRoute } from 'vue-router'
import { useNewsStore } from '@/stores/NewsStores'
import { onMounted } from 'vue'

// store
const newsStore = useNewsStore()

// route
const route = useRoute()

// action
const { updateHandling } = newsStore

onMounted(() => {
  updateHandling(route.params.id)
})
</script>
