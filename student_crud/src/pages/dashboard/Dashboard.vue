<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const user = ref(null)

onMounted(() => {
	const raw = localStorage.getItem('user')
	if (raw) user.value = JSON.parse(raw)
	else router.push('/login')
})

function logout() {
	localStorage.removeItem('user')
	router.push('/login')
}
</script>

<template>
	<v-container class="mt-10">
		<v-card>
			<v-card-title>Dashboard</v-card-title>
			<v-card-text>
				<div v-if="user">Welcome, <strong>{{ user.email }}</strong></div>
				<div v-else>Redirecting to login...</div>
			</v-card-text>
			<v-card-actions>
				<v-btn color="primary" @click="logout">Logout</v-btn>
			</v-card-actions>
		</v-card>
	</v-container>
</template>

<style scoped>
.mt-10 { margin-top: 2rem; }
</style>
