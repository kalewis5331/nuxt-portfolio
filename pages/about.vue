<script>
import feather from 'feather-icons'
const { replace } = feather

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
