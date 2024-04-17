<template>
  <div>
    <v-card class="mx-auto pa-12 pb-8 mt-3" elevation="8" max-width="90%" rounded="lg">
      <v-form v-model="formInput" @submit.prevent="handleSubmit()">
        <v-text-field
          density="compact"
          placeholder="Judul Berita"
          class="my-5"
          variant="outlined"
          v-model="news.title"
        ></v-text-field>

        <v-textarea
          density="compact"
          label="Konten Berita"
          class="my-5"
          variant="outlined"
          v-model="news.content"
        ></v-textarea>

        <div v-if="categories">
          <v-select
            class="my-5"
            :items="categories"
            item-title="name"
            item-value="id"
            label="category"
            variant="outlined"
            v-model="news.category"
            return-object
          >
          </v-select>
        </div>

        <v-btn
          :disabled="!formInput"
          type="submit"
          class="mb-8"
          color="green"
          size="large"
          variant="tonal"
        >
          Submit
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>
<script setup>
import { useCategoryStore } from '../../stores/CategoryStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useNewsStore } from '../../stores/NewsStores'

// store
const CategoryStore = useCategoryStore()
const NewsStore = useNewsStore()

// state
const { categories } = storeToRefs(CategoryStore)
const { news, formInput } = storeToRefs(NewsStore)

// action
const { readCategory } = CategoryStore
const { handleSubmit } = NewsStore

onMounted(() => {
  readCategory
})
</script>
