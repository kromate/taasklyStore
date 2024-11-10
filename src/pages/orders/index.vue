<template>
	<div>
		Orders
	</div>
</template>

<script setup lang="ts">

import { usePageHeader } from '@/composables/utils/header'

definePageMeta({
	layout: 'dashboard',
	middleware: ['is-authenticated', () => {
	usePageHeader().setPageHeader({
	title: 'Orders',
	description: 'Manage your orders here',

	shouldShowFab: false,
	shouldShowTab: false

})
	}]
})
</script>

<style scoped>

</style>
