import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useApi } from '../composables/useApi'

export interface AuthUser {
  id: number
  name: string
  username: string
  phone: string
  email: string
  profile_photo_path: string | null
  profile_photo_url: string | null
  email_verified_at: string | null
  created_at: string
  updated_at: string
}

export const useAuthStore = defineStore(
  'auth',
  () => {
    const user = ref<AuthUser | null>(null)
    const loading = ref(false)
    const error = ref<string | null>(null)

    const fetchProfile = async () => {
      loading.value = true
      error.value = null
      try {
        const { fetchApi } = useApi()
        const res: any = await fetchApi('/auth/me')
        user.value = res?.data || res
      } catch (e: any) {
        error.value = e?.response?._data?.message || 'Gagal memuat profil'
        user.value = null
      } finally {
        loading.value = false
      }
    }

    const clear = () => {
      user.value = null
      error.value = null
    }

    return { user, loading, error, fetchProfile, clear }
  },
  {
    persist: true,
  }
)
