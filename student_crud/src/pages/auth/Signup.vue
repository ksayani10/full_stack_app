<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')

function submit() {
  error.value = ''
  if (!email.value || !password.value) {
    error.value = 'Enter email and password.'
    return
  }
  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match.'
    return
  }

  // Simple demo sign-up: store user and go to dashboard
  const user = { email: email.value }
  localStorage.setItem('user', JSON.stringify(user))
  router.push('/dashboard')
}
</script>

<template>
  <v-container class="mt-10" style="max-width:480px">
    <v-card>
      <v-card-title>Sign up</v-card-title>
      <v-card-text>
        <form @submit.prevent="submit">
          <v-text-field v-model="email" label="Email" type="email" required />
          <v-text-field v-model="password" label="Password" type="password" required />
          <v-text-field v-model="confirmPassword" label="Confirm Password" type="password" required />
          <div v-if="error" class="red--text">{{ error }}</div>
          <v-card-actions class="mt-4">
            <v-btn color="primary" type="submit" @click="submit">Create account</v-btn>
            <v-spacer />
            <v-btn text @click="router.push('/login')">Already have an account?</v-btn>
          </v-card-actions>
        </form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
.mt-10 { margin-top: 2rem; }
</style>
