<script>
import { replace } from 'feather-icons'

export default {
  name: 'About',
  scrollToTop: true,
  mounted() {
    replace()
  },
  updated() {
    replace()
  },
}
</script>

<template>
  <div>
    <AboutMe class="container mx-auto" />

    <AboutCounter />

    <AboutClients class="container mx-auto" />
  </div>
</template>

<style scoped></style>
