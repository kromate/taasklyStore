
import { User } from '@firebase/auth'
import { useUser } from '../auth/user'
import { getFirestoreCollectionWithWhereQuery } from '@/firebase/firestore/query'


interface Store {
    id: string
    name: string
    created_at: string
}



export const useSelectedStore = () => {
    const loading = ref(false)
    const { id: user_id } = useUser()

    const _selectedStoreCookie = useCookie('selectedStore')
    const userStores = ref([] as Store[])

    const selectedStore = computed(() => {
    if (_selectedStoreCookie.value) {
        if (typeof _selectedStoreCookie.value === 'string') {
            return JSON.parse(_selectedStoreCookie.value)
        } else if (typeof _selectedStoreCookie.value === 'object') {
            return _selectedStoreCookie.value
        }
    }
    return null
    }) as Ref<User | null>


    const setSelectedStore = (store: Store) => {
        if (store) {
            _selectedStoreCookie.value = JSON.stringify(store)
        }
    }

    const clearSelectedStore = () => {
        _selectedStoreCookie.value = null
    }

    const fetchUserStores = async () => {
        loading.value = true
        if (user_id.value) {
            await getFirestoreCollectionWithWhereQuery('stores', userStores, { name: 'user_id', operator: '==', value: user_id.value })
        }
        loading.value = false
    }




    return { selectedStore, userStores, fetchUserStores, setSelectedStore, loading }
}
