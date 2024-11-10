<template>
	<div class="auth-box">
		<img src="/lt2.svg" alt="logo">
		<h1 class="text-2xl text-dark text-center font-semibold  tracking-wide">
			Create a Store
		</h1>


		<form class="auth-form mt-1.5 form-height" @submit.prevent="create">
			<div class="field relative">
				<label for="student">Store Name</label>
				<input
					v-model="createStoreForm.name"
					placeholder="What is the name of your store?"
					rows="4"
					class="input-field"
					:class="[!isUsernameAvailable ? '!border-rose-500':'']"
					required
				>
				<span class="flex mt-2 items-center">
					<BadgeSmall :name="createStoreForm.username" :class="[isUsernameAvailable? '!text-green-700 !border-green-700':'!text-rose-700 !border-rose-700']" />
					<span v-if="createStoreForm.username" class="text-rose text-sm mx-2" :class="[ isUsernameAvailable ? 'text-green-700' :'text-rose-700']">{{ isUsernameAvailable ? 'Available':'Unavailable' }}</span>
				</span>
				<Spinner v-if="loading" class="!border-t-dark !border-[#0c030366] absolute right-4 top-9" />
			</div>
			<div class="field relative">
				<label for="student">Short Description of your Store</label>
				<textarea v-model="createStoreForm.desc" placeholder="What makes your store unique" rows="4" class="input-textarea" required />
			</div>

			<button class="btn-primary w-full mt-4" :disabled="!isUsernameAvailable || loading || isStoreUsernameLoading || !createStoreForm.name">
				<span v-if="!loading"> Create</span>
				<Spinner v-else />
			</button>
		</form>
	</div>
</template>

<script setup lang="ts">


import { useCreateStore, useStoreUsername } from '@/composables/stores/create'


const { isUsernameAvailable, loading: isStoreUsernameLoading } = useStoreUsername()


const { loading, create, createStoreForm } = useCreateStore()

watch(() => createStoreForm.name, (value) => {
	if (!value) {
		createStoreForm.username = ''
	} else {
		createStoreForm.username = value.toLowerCase().replace(/ /g, '-').trim()
	}
})



definePageMeta({
	layout: 'auth',
	middleware: ['is-authenticated']
})

</script>

<style scoped lang='scss'>
input:checked {
	@apply hidden
}
</style>
