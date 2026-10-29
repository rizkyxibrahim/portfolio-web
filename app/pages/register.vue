<template>
    <Auth>
        <div class="mt-8 text-center">
            <h4 class="mb-2.5 text-xl font-semibold text-primary">Daftar Akun Baru</h4>
            <p class="text-base text-default-500">
                Isi data berikut untuk membuat akun Xibra Platform Anda.
            </p>
        </div>
        <form @submit.prevent="handleRegister" class="text-left w-full mt-10">
            <div class="mb-4">
                <label for="name" class="block font-medium text-default-900 text-sm mb-2">
                    Nama Lengkap
                </label>
                <input v-model="name" type="text" id="name" class="form-input" placeholder="Muhammad Rizky Ibrahim"
                    style="padding: 0 12px" />
            </div>
            <div class="mb-4">
                <label for="username" class="block font-medium text-default-900 text-sm mb-2">
                    Username
                </label>
                <input v-model="username" type="text" id="username" class="form-input" placeholder="rizkyxibrahim"
                    style="padding: 0 12px" />
            </div>
            <div class="mb-4">
                <label for="email" class="block font-medium text-default-900 text-sm mb-2">
                    Email
                </label>
                <input v-model="email" type="email" id="email" class="form-input" placeholder="rizkyxibrahim@gmail.com"
                    style="padding: 0 12px" />
            </div>
            <div class="mb-4">
                <label for="phone" class="block font-medium text-default-900 text-sm mb-2">
                    Nomor Telepon
                </label>
                <input v-model="phone" type="tel" id="phone" class="form-input" placeholder="085179706698"
                    style="padding: 0 12px" />
            </div>
            <div class="mb-4">
                <label for="password" class="block font-medium text-default-900 text-sm mb-2">
                    Kata Sandi
                </label>
                <input v-model="password" type="password" id="password" class="form-input"
                    placeholder="Minimal 8 karakter" style="padding: 0 12px" />
            </div>
            <div class="mb-4">
                <label for="password_confirmation" class="block font-medium text-default-900 text-sm mb-2">
                    Konfirmasi Kata Sandi
                </label>
                <input v-model="passwordConfirmation" type="password" id="password_confirmation" class="form-input"
                    placeholder="Masukkan ulang kata sandi" style="padding: 0 12px" />
            </div>
            <div class="mt-10 text-center">
                <button type="submit" class="btn bg-primary text-white w-full">
                    Daftar
                </button>
            </div>
            <p v-if="error" class="mt-4 text-center text-sm text-red-500">{{ error }}</p>
            <p class="mt-6 text-center text-sm text-default-500">
                Sudah punya akun?
                <a href="/login" class="text-primary hover:underline font-medium">Masuk di sini</a>
            </p>
        </form>
    </Auth>
</template>

<script setup lang="ts">
import Auth from '~/layouts/auth.vue'
import { useApi } from '../composables/useApi'
import { navigateTo, useCookie } from '#imports'
import { useAuthStore } from '~/stores/auth'
import type { RegisterRequest, RegisterResponse } from '~/types/api'

const { fetchApi } = useApi()
const name = ref('')
const username = ref('')
const email = ref('')
const phone = ref('')
const password = ref('')
const passwordConfirmation = ref('')
const error = ref('')

const handleRegister = async () => {
    error.value = ''

    if (password.value !== passwordConfirmation.value) {
        error.value = 'Konfirmasi kata sandi tidak cocok.'
        return
    }

    try {
        const body: RegisterRequest = {
            name: name.value,
            username: username.value,
            email: email.value,
            phone: phone.value,
            password: password.value,
            password_confirmation: passwordConfirmation.value,
        }

        const data: any = await fetchApi('/auth/register', {
            method: 'POST',
            body,
        })

        const token: string = data?.token || data?.data?.token
        if (token) {
            const cookie = useCookie('xibra_token')
            cookie.value = token

            const auth = useAuthStore()
            await auth.fetchProfile()

            await navigateTo('/dashboard')
        } else {
            error.value = 'Token tidak ditemukan dalam respons.'
        }
    } catch (e: any) {
        error.value = e?.response?._data?.message || 'Pendaftaran gagal. Coba lagi nanti.'
    }
}
</script>

<style scoped>
/* Gaya dasar jika layout Auth tidak cukup */
</style>