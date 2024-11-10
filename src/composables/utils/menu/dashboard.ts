import { Box, ReceiptText, Wallet, Settings, Layers2, User } from 'lucide-vue-next'

export const dashboardRoutes = () => [
	{
		icon: Box,
		name: 'Products',
		route: '/products',
		main: true,
		bg: '#e5e7eb',
		color: '#18181B'
	},
	{
		icon: ReceiptText,
		name: 'Orders',
		route: '/orders',
		main: true,
		bg: '#e5e7eb',
		color: '#18181B'
	},
	{
		icon: User,
		name: 'Customers',
		route: '/customers',
		main: true,
		bg: '#e5e7eb',
		color: '#18181B'
	},
	{
		icon: Layers2,
		name: 'Categories',
		route: '/categories',
		bg: '#e5e7eb',
		color: '#18181B'
	},
	{
		icon: Wallet,
		name: 'Wallet',
		route: '/wallet',
		bg: '#e5e7eb',
		color: '#18181B'
	},
	{
		icon: Settings,
		name: 'Settings',
		route: '/settings',
		bg: '#e5e7eb',
		color: '#18181B'
	}

]
