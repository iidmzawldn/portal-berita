<template>
  <div>
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <div class="mx-auto text-center mb-6 font-weight-bold text-h5">
        <v-icon icon="mdi-artstation"></v-icon>
        <div>{{ isLogin ? 'Login' : 'Register' }}</div>
      </div>
      <v-form v-model="formInput" @submit.prevent="isLogin ? authUser(true) : authUser()">
        <v-alert
          v-if="isError"
          type="error"
          title="Error"
          :text="message"
          variant="tonal"
        ></v-alert>
        <div v-if="!isLogin">
          <div class="text-subtitle-1 text-medium-emphasis">Name</div>
          <v-text-field
            density="compact"
            placeholder="Username"
            prepend-inner-icon="mdi-account"
            variant="outlined"
            :rules="nameRules"
            v-model="user.name"
          ></v-text-field>
        </div>

        <div class="text-subtitle-1 text-medium-emphasis">Email</div>
        <v-text-field
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          :rules="emailRules"
          v-model="user.email"
        ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Password
        </div>

        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          :rules="[passwordRules.required, passwordRules.min]"
          v-model="user.password"
          @click:append-inner="visible = !visible"
        ></v-text-field>

        <v-btn
          :disabled="!formInput"
          type="submit"
          class="mb-8"
          color="green"
          size="large"
          variant="tonal"
          block
        >
          {{ isLogin ? 'Log In' : 'Register' }}
        </v-btn>
      </v-form>

      <v-card-text class="text-center" v-if="isLogin">
        <router-link
          :to="{ name: 'Register' }"
          class="text-green text-decoration-none"
          rel="noopener noreferrer"
        >
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </router-link>
      </v-card-text>

      <v-card-text class="text-center" v-else>
        <router-link
          :to="{ name: 'Login' }"
          class="text-green text-decoration-none"
          rel="noopener noreferrer"
        >
          Login Now <v-icon icon="mdi-chevron-right"></v-icon>
        </router-link>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStores } from '../../stores/AuthStores'
import { storeToRefs } from 'pinia'

// store
const authStore = useAuthStores()

// state
const { formInput, user, isError, message } = storeToRefs(authStore)

// action
const { authUser } = authStore

// validation
const nameRules = [
  (value) => {
    if (value) return true
    return 'Name harus diisi'
  }
]

const emailRules = [
  (v) => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
]

const passwordRules = {
  required: (value) => !!value || 'Password harus diisi',
  min: (value) => value.length >= 6 || 'Password min 6 Karakter'
}

const visible = ref(false)

defineProps({
  isLogin: {
    type: Boolean,
    default: false
  }
})
</script>
