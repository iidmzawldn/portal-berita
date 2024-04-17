import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'

export const useUserStorage = defineStore('User', () => {
  const userData = ref([
    {
      name: 'Asep Jumawa',
      email: 'asep@gmail.com'
    }
  ])

  const userInput = reactive({
    name: '',
    email: ''
  })

  const clearInput = () => {
    userInput.name = ''
    userInput.email = ''
  }

  const tambahUser = () => {
    userData.value.push({
      name: userInput.name,
      email: userInput.email
    })

    clearInput()
  }

  const JumlahUser = computed(() => {
    return userData.value.length
  })

  return { userData, userInput, tambahUser, JumlahUser }
})
