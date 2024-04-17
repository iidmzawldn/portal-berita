<template>
  <v-toolbar app class="bg-green-darken-1">
    <RouterLink :to="{ name: 'Home' }">
      <v-btn size="x-large" color="white" prepend-icon="mdi-artstation" class="mx-5">
        <template v-slot:prepend>
          <v-icon color="white"></v-icon>
        </template>
        GONEWS
      </v-btn>
    </RouterLink>
    <v-spacer></v-spacer>
    <v-toolbar-item class="mx-5" v-if="!currentUser">
      <v-btn
        size="small"
        flat
        v-for="item in menuItems"
        :key="item.title"
        :to="{ name: `${item.pathName}` }"
      >
        <v-icon left>{{ item.icon }}</v-icon>
        <span>{{ item.title }}</span>
      </v-btn>
    </v-toolbar-item>
    <v-toolbar-item class="mx-5" v-else>
      <v-btn
        size="small"
        flat
        v-for="item in menuAdmin"
        :key="item.title"
        :to="{ name: `${item.pathName}` }"
      >
        <v-icon left>{{ item.icon }}</v-icon>
        <span>{{ item.title }}</span>
      </v-btn>
    </v-toolbar-item>
  </v-toolbar>
</template>

<script setup>
import { inject } from 'vue'

const currentUser = inject('currentUser')

const menuItems = [
  {
    title: 'Category',
    icon: 'mdi-newspaper',
    pathName: 'CategoryPublic'
  },
  {
    title: 'Login',
    icon: 'mdi-login',
    pathName: 'Login'
  },
  {
    title: 'Register',
    icon: 'mdi-account-plus',
    pathName: 'Register'
  }
]

const menuAdmin = [
  {
    title: 'Category',
    icon: 'mdi-newspaper',
    pathName: 'CategoryPublic'
  },
  {
    title: 'Dashboard',
    icon: 'mdi-view-dashboard',
    pathName: 'Dashboard'
  }
]
</script>
<style scoped>
a {
  text-decoration: none;
  cursor: pointer;
}
</style>
