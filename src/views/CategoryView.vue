<template>
  <h1>Category</h1>
  <v-divider></v-divider>
  <div class="d-flex justify-end my-6">
    <v-btn color="green" icon="mdi-plus" @click="tambahData()" />
  </div>
  <DialogComponent v-model="dialog">
    <template #title>
      <div>{{ category.isUpdate ? 'Update Category' : 'Add Category' }}</div>
    </template>
    <template #content>
      <v-form v-model="form" @submit.prevent="onSubmitData">
        <v-text-field
          class="mb-1"
          :rules="nameRules"
          v-model="category.name"
          label="Name"
        ></v-text-field>
        <v-textarea
          class="mb-1"
          :rules="descriptionRules"
          v-model="category.description"
          label="Descrpition"
        ></v-textarea>
        <v-btn :disabled="!form" block color="success" type="submit" variant="elevated">{{
          category.isUpdate ? 'Update' : 'Submit'
        }}</v-btn>
      </v-form>
    </template>
  </DialogComponent>

  <!-- Dialog Detail -->
  <DialogComponent v-model="dialogDetail">
    <template #title>{{ category.name }}</template>
    <template #content>{{ category.description }}</template>
  </DialogComponent>

  <DialogComponent v-model="dialogDelete">
    <template #title> Delete Category </template>
    <template #content>
      <div class="text-h6 text-error">Yakin ingin menghapus {{ category.name }}</div>
      <v-row>
        <v-col>
          <v-btn color="primary" block @click="destroyData(category.id)">Ya</v-btn>
        </v-col>
        <v-col>
          <v-btn color="error" block @click="dialogDelete = false">Tidak</v-btn>
        </v-col>
      </v-row>
    </template>
  </DialogComponent>

  <!-- Table -->
  <v-table hover>
    <thead>
      <tr>
        <th class="text-left">Nomor</th>
        <th class="text-left">Name</th>
        <th class="text-center">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in categories" :key="item.id">
        <td>{{ index + 1 }}</td>
        <td>{{ item.name }}</td>
        <td class="text-center">
          <v-btn size="x-small" color="warning" icon="mdi-information" @click="getData(item)" />
          <v-btn
            size="x-small"
            color="primary"
            icon="mdi-pencil"
            class="mx-3"
            @click="editData(item)"
          />
          <v-btn size="x-small" color="error" icon="mdi-trash-can" @click="deleteData(item)" />
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
import DialogComponent from '../components/dashboard/DialogComponent.vue'
import { useCategoryStore } from '../stores/CategoryStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

// Storage
const CategoryStorage = useCategoryStore()

// State
const { category, form, dialog, categories, dialogDetail, dialogDelete } =
  storeToRefs(CategoryStorage)

// Action
const { onSubmitData, readCategory, getData, tambahData, editData, deleteData, destroyData } =
  CategoryStorage
onMounted(() => {
  readCategory()
})

// validation
const nameRules = [
  (value) => {
    if (value) return true
    return 'name harus diisi'
  }
]
const descriptionRules = [
  (value) => {
    if (value) return true
    return 'description harus diisi'
  }
]
</script>
