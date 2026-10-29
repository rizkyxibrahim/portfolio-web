<template>
    <Auth>
        <div class="mt-8 text-center">
            <h4 class="mb-2.5 text-xl font-semibold text-primary">Selamat Datang Kembali!</h4>
            <p class="text-base text-default-500">Masuk untuk melanjutkan ke dashboard.</p>
        </div>
        <form @submit.prevent="handleLogin" class="text-left w-full mt-10">
            <div class="mb-4">
                <label for="identity" class="block font-medium text-default-900 text-sm mb-2">Username / Email</label>
                <input v-model="identity" type="text" id="identity" class="form-input"
                    placeholder="Masukkan username atau email" style="padding: 0 12px" />
            </div>
            <div class="mb-4">
                <label for="password" class="block font-medium text-default-900 text-sm mb-2">Kata Sandi</label>
                <input v-model="password" type="password" id="password" class="form-input"
                    placeholder="Masukkan kata sandi" style="padding: 0 12px" />
            </div>
            <div class="flex items-center gap-2 mb-4">
                <input id="remember" type="checkbox" class="form-checkbox" v-model="remember" />
                <label class="text-default-900 text-sm font-medium" for="remember">Ingat Saya</label>
            </div>
            <div class="mt-10 text-center">
                <button type="submit" class="btn bg-primary text-white w-full">Masuk</button>
            </div>
            <p v-if="error" class="mt-4 text-center text-sm text-red-500">{{ error }}</p>
        </form>
    </Auth>
</template>

<script setup lang="ts">
import Auth from '~/layouts/auth.vue'
import { useApi } from '../composables/useApi'
import { navigateTo, useCookie } from '#imports'
import { useAuthStore } from '~/stores/auth'

const { fetchApi } = useApi()
const identity = ref('')
const password = ref('')
const remember = ref(false)
const error = ref('')

const handleLogin = async () => {
    error.value = ''
    try {
        const data: any = await fetchApi('/auth/login', {
            method: 'POST',
            body: { identity: identity.value, password: password.value },
        })
        const token = data?.token || data?.data?.token
        if (token) {
            const cookie = useCookie('xibra_token', { maxAge: remember.value ? 60 * 60 * 24 * 30 : undefined })
            cookie.value = token
            const auth = useAuthStore()
            await auth.fetchProfile()
            await navigateTo('/dashboard')
        } else {
            error.value = 'Token tidak ditemukan dalam respons.'
        }
    } catch (e: any) {
        error.value = e?.response?._data?.message || 'Login gagal. Periksa kembali kredensial Anda.'
    }
}

definePageMeta({
    layout: false,
    middleware: 'auth',
})
</script>
