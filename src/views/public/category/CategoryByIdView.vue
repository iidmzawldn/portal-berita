<template>
  <h1>ByID</h1>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { query, collection, where, getDocs } from 'firebase/firestore'
import { useRoute } from 'vue-router'
import { db } from '@/config/firebase'

// state
const newsData = ref(null)

// register
const route = useRoute()

const readData = async () => {
  const q = query(collection(db, 'news'), where('category.id', '==', route.params.id))
  const querySnapShot = await getDocs(q)
  newsData.value = querySnapShot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id }
  })
  console.log(querySnapShot)
}

onMounted(() => {
  readData()
})
</script>
