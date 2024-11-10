import { useUser } from '@/composables/auth/user'
import { useSelectedStore } from '@/composables/stores/global'



export default async function hasSelectedStore(route: any) {
	const { isLoggedIn } = useUser()
	const { selectedStore } = useSelectedStore()

		if (isLoggedIn.value && !selectedStore.value) {
			useUser().redirectUrl.value = route.fullPath
			return navigateTo('/stores')
		}
}
