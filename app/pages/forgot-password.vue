<template>
    <Auth>
        <div class="mt-8 text-center">
            <h4 class="mb-2.5 text-xl font-semibold text-primary">Lupa Kata Sandi</h4>
            <p class="text-base text-default-500">
                Masukkan email Anda. Kami akan mengirimkan link reset kata sandi.
            </p>
        </div>
        <form @submit.prevent="handleForgotPassword" class="text-left w-full mt-10">
            <div class="mb-4">
                <label for="email" class="block font-medium text-default-900 text-sm mb-2">
                    Email
                </label>
                <input v-model="email" type="email" id="email" class="form-input" placeholder="rizkyxibrahim@gmail.com"
                    style="padding: 0 12px" />
            </div>
            <div class="mt-10 text-center">
                <button type="submit" class="btn bg-primary text-white w-full">
                    Kirim Link Reset
                </button>
            </div>
            <p v-if="error" class="mt-4 text-center text-sm text-red-500">{{ error }}</p>
            <p v-if="success" class="mt-4 text-center text-sm text-green-500">{{ success }}</p>
            <p class="mt-6 text-center text-sm text-default-500">
                Ingat kata sandi?
                <a href="/login" class="text-primary hover:underline font-medium">Masuk di sini</a>
            </p>
        </form>
    </Auth>
</template>

<script setup lang="ts">
import Auth from '~/layouts/auth.vue'
import { useApi } from '../composables/useApi'
import type { ForgotPasswordRequest } from '~/types/api'

const { fetchApi } = useApi()
const email = ref('')
const error = ref('')
const success = ref('')

const handleForgotPassword = async () => {
    error.value = ''
    success.value = ''

    try {
        const body: ForgotPasswordRequest = { email: email.value }
        await fetchApi('/auth/forgot-password', {
            method: 'POST',
            body,
        })
        success.value =
            'Jika email terdaftar, link reset kata sandi telah dikirim ke inbox Anda.'
    } catch (e: any) {
        error.value = e?.response?._data?.message || 'Gagal mengirim link reset.'
    }
}
</script>