import { useUser } from '@/composables/auth/user'

export default function isNotAuthenticated(route: any) {
	if (process.client) {
			hasReferer()
	if (useUser().isLoggedIn.value && route.path !== '/booking-types') {
		return navigateTo('/booking-types')
	}
	}
}

const hasReferer = () => {
		const params = new URLSearchParams(window.location.search)
		const refer = params.get('refer')

		if (refer) {
			localStorage.setItem('taaskly_referral', refer)
		}
}
