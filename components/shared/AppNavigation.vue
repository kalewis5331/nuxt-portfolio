<script setup lang="ts"></script>

<template>
  <!-- App header navigation links -->
  <div
    class="font-general-regular m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
  >
    <NuxtLink
      to="/"
      class="block text-center text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2"
      aria-label="Home"
      >Home</NuxtLink
    >
    <NuxtLink
      to="/projects"
      class="block text-center text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2"
      aria-label="Projects"
      >Projects</NuxtLink
    >
    <NuxtLink
      to="/github"
      class="block text-center text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2"
      aria-label="Github"
      >Github</NuxtLink
    >
    <NuxtLink
      to="/about"
      class="block text-center text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2"
      aria-label="About Me"
      >About Me</NuxtLink
    >
  </div>
</template>

<style>
#nav .nuxt-link-exact-active,
#nav .nuxt-link-active {
  @apply text-indigo-700 dark:text-indigo-400;
}
</style>
