<template>
	<div>
		products
	</div>
</template>

<script setup lang="ts">

import { usePageHeader } from '@/composables/utils/header'

definePageMeta({
	layout: 'dashboard',
	middleware: ['is-authenticated', 'has-selected-store', () => {
	usePageHeader().setPageHeader({
	title: 'Products',
	description: 'Manage your products here',

	shouldShowFab: false,
	shouldShowTab: false

})
	}]
})
</script>

<style scoped>

</style>
