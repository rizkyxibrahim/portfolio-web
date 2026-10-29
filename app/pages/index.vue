<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden py-24 md:py-32">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p class="text-primary font-medium mb-2">Halo, saya</p>
            <h1 class="text-4xl md:text-6xl font-bold text-default-900 mb-4">Muhammad Rizky Ibrahim</h1>
            <p class="text-lg text-default-500 mb-6">
              Full-stack developer yang fokus membangun produk web modern, cepat, dan nyaman digunakan.
              Tertarik pada Vue/Nuxt, Laravel, dan desain antarmuka yang bersih.
            </p>
            <div class="flex gap-3">
              <a href="#projects" class="btn bg-primary text-white">Lihat Proyek</a>
              <a href="#contact" class="btn border border-default-200">Hubungi Saya</a>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="size-64 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon icon="lucide:user" class="size-32 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="py-20 bg-card">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-default-900 mb-6">Tentang Saya</h2>
        <p class="text-default-500 max-w-3xl">
          Saya adalah developer yang senang mengubah ide menjadi produk nyata. Berpengalaman dalam
          membangun aplikasi web end-to-end, mulai dari desain API hingga antarmuka pengguna.
          Terbiasa bekerja dengan tim maupun mandiri, dan selalu belajar teknologi baru.
        </p>
      </div>
    </section>

    <!-- Skills -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-default-900 mb-6">Keahlian</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="skill in skills" :key="skill" class="card p-6">
            <Icon icon="lucide:code-2" class="size-8 text-primary mb-3" />
            <h3 class="font-semibold text-default-900">{{ skill }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="py-20 bg-card">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-default-900 mb-6">Proyek</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="p in projects" :key="p.title" class="card p-6">
            <h3 class="font-semibold text-default-900 mb-2">{{ p.title }}</h3>
            <p class="text-default-500 text-sm mb-4">{{ p.desc }}</p>
            <a :href="p.link" class="text-primary text-sm font-medium">Lihat detail →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="py-20">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-default-900 mb-6">Kontak</h2>
        <p class="text-default-500 mb-4">Tertarik bekerja sama? Kirim email ke
          <a href="mailto:rizkyxibrahim@gmail.com" class="text-primary">rizkyxibrahim@gmail.com</a>.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const skills = ['Vue / Nuxt', 'TypeScript', 'Laravel / PHP', 'Tailwind CSS', 'REST API', 'Database']
const projects = [
  { title: 'Portfolio Web', desc: 'Website portfolio pribadi berbasis Nuxt.', link: '#' },
  { title: 'Dashboard Admin', desc: 'Panel admin dengan Rizky Ibrahim template.', link: '#' },
  { title: 'API Service', desc: 'Layanan backend RESTful.', link: '#' },
]
</script>
