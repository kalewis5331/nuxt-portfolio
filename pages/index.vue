<script>
import AppBanner from '../components/shared/AppBanner.vue'
import ReUseButton from '../components/reusable/MyButton.vue'
export default {
  components: { AppBanner, ReUseButton },
  scrollToTop: true,
}
</script>

<template>
  <div class="container mx-auto">
    <AppBanner />

    <ProjectsGrid />

    <!-- View more projects button -->
    <div class="mt-5 sm:mt-14 flex justify-center">
      <ReUseButton title="More Projects" is-link link="/projects" />
    </div>
  </div>
</template>

<style scoped></style>
