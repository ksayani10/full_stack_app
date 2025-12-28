<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
	// If user is authenticated, go to dashboard
	const raw = localStorage.getItem('user')
	if (raw) router.push('/dashboard')
})
</script>

<template>
	<v-container class="mt-10">
		<v-row justify="center">
			<v-col cols="12" md="8" lg="6">
				<v-card>
					<v-card-title>Welcome to Student Hub</v-card-title>
					<v-card-text>
						<p>This is a minimal demo. Use the buttons to Login or Sign up.</p>
					</v-card-text>
					<v-card-actions>
						<v-btn color="primary" @click="$router.push('/login')">Login</v-btn>
						<v-spacer />
						<v-btn text @click="$router.push('/signup')">Sign up</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<style scoped>
.mt-10 { margin-top: 2rem; }
</style>