import { v4 as uuidv4 } from 'uuid'
import { useSelectedStore } from './global'
import { setFirestoreDocument } from '@/firebase/firestore/create'
import { useAlert } from '@/composables/core/notification'
import { useUser } from '@/composables/auth/user'
import { getFirestoreCollectionWithWhereQuery } from '@/firebase/firestore/query'



const createStoreForm = reactive({
    name: '',
    username: '',
    desc: ''
})

export const useCreateStore = () => {
    const { setSelectedStore } = useSelectedStore()
    const loading = ref(false)
    const { id: user_id } = useUser()


    const create = async () => {
        loading.value = true
        const id = uuidv4()

        const sentData = {
            id,
            user_id: user_id.value as string,
            ...createStoreForm,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        }


        await setFirestoreDocument('stores', id, sentData)
        loading.value = false
            setSelectedStore(sentData)
          const redirectUrl = useUser().redirectUrl.value
        useUser().redirectUrl.value = null

        useRouter().push(redirectUrl ?? '/products')
        useAlert().openAlert({ type: 'SUCCESS', msg: 'Availability created successfully!' })
    }

    return { loading, create, createStoreForm }
}


export const useStoreUsername = () => {
	const isUsernameAvailable = ref(true)
	const loading = ref(false)

	const checkUsername = async () => {
		loading.value = true
		createStoreForm.username = createStoreForm.username.replace(/ /g, '').toLowerCase()

        const usernames = ref([])

		await getFirestoreCollectionWithWhereQuery('stores', usernames, { name: 'username', operator: '==', value: createStoreForm.username })



		if (usernames.value.length) {
			isUsernameAvailable.value = false
		} else {
			isUsernameAvailable.value = true
		}
		loading.value = false
	}

	watchDebounced(() => createStoreForm.username, checkUsername, { debounce: 500 })

	return { isUsernameAvailable, checkUsername, loading }
}
