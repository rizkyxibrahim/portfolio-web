<template>
    <Auth>
        <div class="mt-8 text-center">
            <h4 class="mb-2.5 text-xl font-semibold text-primary">Ubah Kata Sandi</h4>
            <p class="text-base text-default-500">
                Masukkan kata sandi baru untuk akun Anda.
            </p>
        </div>

        <!-- Pesan jika link tidak lengkap -->
        <div v-if="!token || !email" class="mt-4 text-center text-sm text-red-500">
            Link reset tidak valid atau tidak lengkap. Silakan cek email Anda kembali.
        </div>

        <form v-else @submit.prevent="handleResetPassword" class="text-left w-full mt-10">
            <div class="mb-4">
                <label for="email" class="block font-medium text-default-900 text-sm mb-2">
                    Email
                </label>
                <input v-model="email" type="email" id="email" class="form-input"
                    :placeholder="email || 'Masukkan email'" style="padding: 0 12px" readonly />
            </div>

            <div class="mb-4">
                <label for="token" class="block font-medium text-default-900 text-sm mb-2">
                    Token Reset
                </label>
                <input v-model="token" type="text" id="token" class="form-input"
                    :placeholder="token || 'Masukkan token'" style="padding: 0 12px" readonly />
            </div>

            <div class="mb-4">
                <label for="password" class="block font-medium text-default-900 text-sm mb-2">
                    Kata Sandi Baru
                </label>
                <input v-model="password" type="password" id="password" class="form-input"
                    placeholder="Minimal 8 karakter" style="padding: 0 12px" />
            </div>

            <div class="mb-4">
                <label for="password_confirmation" class="block font-medium text-default-900 text-sm mb-2">
                    Konfirmasi Kata Sandi Baru
                </label>
                <input v-model="passwordConfirmation" type="password" id="password_confirmation" class="form-input"
                    placeholder="Masukkan ulang kata sandi baru" style="padding: 0 12px" />
            </div>

            <div class="mt-10 text-center">
                <button type="submit" class="btn bg-primary text-white w-full" :disabled="loading">
                    {{ loading ? 'Memproses...' : 'Simpan Perubahan' }}
                </button>
            </div>

            <p v-if="error" class="mt-4 text-center text-sm text-red-500">{{ error }}</p>
            <p v-if="success" class="mt-4 text-center text-sm text-green-500">{{ success }}</p>

            <p class="mt-6 text-center text-sm text-default-500">
                Kembali ke
                <a href="/login" class="text-primary hover:underline font-medium">halaman masuk</a>
            </p>
        </form>
    </Auth>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Auth from '~/layouts/auth.vue'
import { useApi } from '../composables/useApi'
import { useRoute, navigateTo } from '#imports'
import type { ResetPasswordRequest } from '~/types/api'

const route = useRoute()
const { fetchApi } = useApi()

// Ambil token dan email dari URL query parameter (bisa string atau string[])
const email = ref(
    Array.isArray(route.query.email)
        ? String(route.query.email[0] ?? '')
        : ((route.query.email as string) || '')
)
const token = ref(
    Array.isArray(route.query.token)
        ? String(route.query.token[0] ?? '')
        : ((route.query.token as string) || '')
)

const password = ref('')
const passwordConfirmation = ref('')
const error = ref('')
const success = ref('')
const loading = ref(false)

const handleResetPassword = async () => {
    error.value = ''
    success.value = ''
    loading.value = true

    try {
        if (password.value !== passwordConfirmation.value) {
            error.value = 'Konfirmasi kata sandi tidak cocok.'
            return
        }

        if (!email.value || !token.value) {
            error.value = 'Link reset tidak valid.'
            return
        }

        const body: ResetPasswordRequest = {
            email: email.value,
            token: token.value,
            password: password.value,
            password_confirmation: passwordConfirmation.value,
        }

        await fetchApi('/auth/reset-password', {
            method: 'POST',
            body,
        })

        success.value =
            'Kata sandi berhasil diubah. Silakan masuk dengan kata sandi baru.'
    } catch (e: any) {
        error.value = e?.response?._data?.message || 'Gagal mengubah kata sandi.'
    } finally {
        loading.value = false
    }
}
</script>