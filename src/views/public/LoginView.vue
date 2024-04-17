<template>
  <div>
    <FormAuthComponent :isLogin="isLogin" />
  </div>
</template>
<script setup>
import FormAuthComponent from '../../components/public/FormAuthComponent.vue'
const isLogin = true
</script>
