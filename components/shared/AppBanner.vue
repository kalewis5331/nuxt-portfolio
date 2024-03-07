<script>
import pkg from 'feather-icons'
import MyGitHub from '../github/MyGitHub.vue'
const { replace } = pkg

export default {
  components: { MyGitHub },
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
  <section>
    <div class="flex flex-col sm:flex-row mt-0 sm:mt-10 gap-10">
      <!-- Banner Left Contents -->
      <div class="w-full md:w-1/4 flex-auto">
        <div class="justify-center">
          <img
            src="/images/profile.jpg"
            class="object-scale-down w-1/2 sm:w-full m-auto sm:m-0"
            alt="Developer Light"
          />
        </div>
        <p
          class="w-full font-general-medium mt-2 text-medium text-center sm:text-left leading-none text-gray-400"
        >
          A portfolio website leveraging Nuxt, featuring my github
          repos/contributions, as well as other projects I'm working on.
        </p>
        <!--      <div class="flex justify-center sm:block">-->
        <!--        <NuxtLink-->
        <!--          to="https://profile.indeed.com/p/kevinl-k9n2cmz"-->
        <!--          target="_blank"-->
        <!--          class="flex justify-center items-center w-60 sm:w-60 mt-6 mb-6 sm:mb-0 p-2.5 sm:py-3"-->
        <!--          aria-label="Download Resume"-->
        <!--        >-->
        <!--          &lt;!&ndash;          <i&ndash;&gt;-->
        <!--          &lt;!&ndash;            data-feather="arrow-down-circle"&ndash;&gt;-->
        <!--          &lt;!&ndash;            class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"&ndash;&gt;-->
        <!--          &lt;!&ndash;          ></i>&ndash;&gt;-->
        <!--          <ReUseButton title="Download Resume" />-->
        <!--        </NuxtLink>-->
        <!--      </div>-->
      </div>

      <!-- Banner Right Contents -->
      <div class="w-full md:w-2/3 flex-auto text-primary-light float-right">
        <MyGitHub />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
