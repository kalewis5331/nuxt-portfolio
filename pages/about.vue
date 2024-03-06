<script>
import pkg from 'feather-icons'
const { replace } = pkg

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

    <!--    <AboutCounter />-->
  </div>
</template>

<style scoped></style>
