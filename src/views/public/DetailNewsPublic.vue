<template>
  <div v-if="detailNews">
    <DetailNewsComponent :data="detailNews" />
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import DetailNewsComponent from '@/components/news/DetailNewsComponent.vue'
import { useNewsStore } from '@/stores/NewsStores'
import { storeToRefs } from 'pinia'

// register store, route
const NewsStore = useNewsStore()
const route = useRoute()

// state
const { detailNews } = storeToRefs(NewsStore)

// action
const { detailHandling } = NewsStore

onMounted(() => {
  detailHandling(route.params.id)
})
</script>
