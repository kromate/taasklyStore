<template>
	<div>
		Customers
	</div>
</template>

<script setup lang="ts">

import { usePageHeader } from '@/composables/utils/header'

definePageMeta({
	layout: 'dashboard',
	middleware: ['is-authenticated', () => {
	usePageHeader().setPageHeader({
	title: 'Customers',
	description: 'Manage your customers here',
	shouldShowFab: false,
	shouldShowTab: false

})
	}]
})
</script>

<style scoped>

</style>
