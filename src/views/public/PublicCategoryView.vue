<template>
  <div>
    <h1>Halaman Category</h1>
    <v-container>
      <v-row class="my-3">
        <v-col v-for="data in categories" :key="data.id" cols="12" md="3">
          <v-sheet
            class="align-center justify-center flex-wrap text-center py-6"
            color="green-lighten-1"
            height="200"
            rounded="lg"
            width="90%"
            elevation="6"
          >
            <h2 class="text-h5 mb-6">{{ data.name }}</h2>
            <p class="mb-4 text-body-2">{{ data.description.substring(0, 50) }}...</p>
            <RouterLink
              :to="{ name: 'CategoryById', params: { id: data.id } }"
              class="text-decoration-none text-green"
              >Read More</RouterLink
            >
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useCategoryStore } from '@/stores/CategoryStore'

// register Storage
const CategoryStore = useCategoryStore()

// action
const { readCategory } = CategoryStore

// state
const { categories } = storeToRefs(CategoryStore)

onMounted(() => {
  readCategory()
})
</script>
