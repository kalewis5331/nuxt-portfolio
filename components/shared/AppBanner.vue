<script>
import { replace } from 'feather-icons'
import ReUseButton from '~/components/reusable/MyButton.vue'

export default {
  components: { ReUseButton },
  data: () => {
    return {
      // Todo
    }
  },

  mounted() {
    replace()
  },
  updated() {
    replace()
  },
}
</script>

<template>
  <section
    class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"
  >
    <!-- Banner left contents -->
    <div class="w-full md:w-1/3 text-left">
      <h1
        class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
      >
        Welcome!
      </h1>
      <p
        class="font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400"
      >
        A portfolio of a passionate Full Stack Lead Developer.
      </p>
      <div class="flex justify-center sm:block">
        <NuxtLink
          to="https://profile.indeed.com/p/kevinl-k9n2cmz"
          target="_blank"
          class="flex justify-center items-center w-60 sm:w-60 mt-6 mb-6 sm:mb-0 p-2.5 sm:py-3"
          aria-label="Download Resume"
        >
          <!--          <i-->
          <!--            data-feather="arrow-down-circle"-->
          <!--            class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"-->
          <!--          ></i>-->
          <ReUseButton title="Download Resume" />
        </NuxtLink>
      </div>
    </div>

    <!-- Banner right illustration -->
    <div class="w-full md:w-2/3 text-right float-right">
      <img
        v-if="$colorMode.value === 'dark'"
        src="/developer-dark.svg"
        alt="Developer Dark"
      />
      <img v-else src="/developer.svg" alt="Developer Light" />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
