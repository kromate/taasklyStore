<template>
	<div>
		Categories
	</div>
</template>

<script setup lang="ts">

import { usePageHeader } from '@/composables/utils/header'

definePageMeta({
	layout: 'dashboard',
	middleware: ['is-authenticated', () => {
	usePageHeader().setPageHeader({
	title: 'Categories',
	description: 'Manage your categories here',
	shouldShowFab: false,
	shouldShowTab: false

})
	}]
})
</script>

<style scoped>

</style>
