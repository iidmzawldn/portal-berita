<template>
  <div v-if="detailNews">
    <DetailNewsComponent :data="detailNews" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useNewsStore } from '../../stores/NewsStores'
import { storeToRefs } from 'pinia'
import DetailNewsComponent from '../../components/news/DetailNewsComponent.vue'

// stores
const newsStores = useNewsStore()

// route
const route = useRoute()

// state
const { detailNews } = storeToRefs(newsStores)

// action
const { detailHandling } = newsStores

onMounted(() => {
  detailHandling(route.params.id)
})
</script>
