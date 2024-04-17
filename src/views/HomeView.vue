<template>
  <h2 class="text-center">Berita Hari Ini</h2>
  <v-divider></v-divider>
  <v-row>
    <v-col cols="12" v-for="data in newsData" :key="data.id">
      <v-card class="mx-auto my-3">
        <v-img
          class="align-end text-white"
          height="200"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          cover
        >
          <v-card-title>{{ data.title.substring(0, 50) }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pt-4"> {{ data.category.name }} </v-card-subtitle>

        <v-card-text>
          <div>{{ data.content.substring(0, 150) }} ...</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="green" variant="elevated" @click="detailNews(data.id)">Read More</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup>
import { useNewsStore } from '../stores/NewsStores'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

// store
const NewsStore = useNewsStore()
const router = useRouter()

// action
const { allNews } = NewsStore
const detailNews = (id) => {
  router.push({ name: 'DetailPublic', params: { id: id } })
}

// state
const { newsData } = storeToRefs(NewsStore)

onMounted(() => {
  allNews()
})
</script>
