<template>
	<div class="auth-box">
		<img src="/lt2.svg" alt="logo">
		<h1 class="text-2xl text-dark text-center font-semibold  tracking-wide">
			Select a store
		</h1>


		<form v-if="!loading && userStores.length > 0" class="auth-form mt-1.5 form-height p-2 btn_shadow border border-dark rounded-md overflow-hidden">
			<div v-for="store in userStores" :key="store.id" class="flex border border-dark w-full rounded-md p-3 cursor-pointer" @click="onCardClick(store)">
				<Avatar :size="48" :name="store.name" bg="#EDE8FD" color="#7A50FF" />
				<div class="flex flex-col ml-4 text-base font-semibold">
					<h3 class="text-lg">
						{{ store.name }}
					</h3>
					<span class="text-sm font-normal">Created {{ formatDate(store.created_at) }}</span>
				</div>
				<Icon name="down" class="-rotate-90 w-6 ml-auto" />
			</div>
		</form>

		<div v-else-if="loading" class="flex flex-col gap-4 justify-center items-center w-full">
			<Skeleton v-for="i in 3" :key="i" height="80px" radius="6px" />
		</div>

		<div v-else-if="!loading && userStores.length === 0" class="flex flex-col gap-4 justify-center items-center w-full border border-dark rounded-md py-8">
			<Store class="w-9 h-9" />
			<p class="text-lg text-dark">
				No stores found
			</p>
		</div>


		<nuxt-link to="/stores/create" class="btn-primary w-full mt-4">
			<span v-if="!loading"> Create a store</span>
			<Spinner v-else />
		</nuxt-link>
	</div>
</template>

<script setup lang="ts">
import { Store } from 'lucide-vue-next'

import { useSelectedStore } from '@/composables/stores/global'
import { formatDate } from '@/composables/utils/formatter'


const onCardClick = (store) => {
	setSelectedStore(store)
	useRouter().push('/products')
}


const { userStores, setSelectedStore, loading, fetchUserStores } = useSelectedStore()

fetchUserStores()



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
