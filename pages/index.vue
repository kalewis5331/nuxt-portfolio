<script>
import AppBanner from '../components/shared/AppBanner.vue'

export default {
  components: { AppBanner },
  scrollToTop: true,
}
</script>

<template>
  <div class="container mx-auto">
    <AppBanner />

    <ProjectsGrid />

    <!-- View more projects button -->
    <div
      class="mt-5 sm:mt-14 w-full sm:w-1/4 m-auto flex justify-center items-center text-md shadow-lg rounded-lg focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 hover:text-white duration-500 dark:hover:bg-indigo-500 dark:hover:text-white dark:duration-500 text-primary-light dark:text-primary-dark bg-slate-800 border border-indigo-200 dark:border-ternary-dark dark:bg-amber-50 p-2.5 sm:py-3"
    >
      <button aria-label="More Projects">
        <NuxtLink to="/projects">More Projects</NuxtLink>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
