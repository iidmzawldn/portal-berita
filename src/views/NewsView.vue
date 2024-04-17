<template>
  <h1>News</h1>
  <v-divider></v-divider>
  <div class="d-flex justify-end my-6">
    <v-btn color="green" icon="mdi-plus" @click="addNews"></v-btn>
  </div>
  <v-row justify="center">
    <v-col v-for="data in newsData" :key="data.id" cols="4">
      <v-card>
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
          <div>{{ data.content.substring(0, 150) }}</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" @click="detail(data.id)">Detail</v-btn>
          <v-btn color="blue" @click="update(data.id)">Edit</v-btn>
          <v-btn color="error" @click="deleteData(data.id)">Hapus</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup>
import { useNewsStore } from '../stores/NewsStores'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

// router
const router = useRouter()

// stores
const NewsStore = useNewsStore()

// state
const { newsData } = storeToRefs(NewsStore)

// action
const { allNews, clearHandling, deleteHandling } = NewsStore
const detail = (id) => {
  router.push({ name: 'DetailNews', params: { id: id } })
}
const update = (id) => {
  router.push({ name: 'UpdateNews', params: { id: id } })
}

const addNews = () => {
  router.push({ name: 'CreateNews' })
  clearHandling
}

const deleteData = (id) => {
  deleteHandling(id)
}

onMounted(() => {
  allNews()
})
</script>
