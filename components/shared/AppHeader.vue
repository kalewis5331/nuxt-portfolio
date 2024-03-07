<script>
import { mapState } from 'pinia'
import AppNavigation from './AppNavigation.vue'
import { useProjectStore } from '~/store/index.ts'
import ReUseButton from '~/components/reusable/MyButton.vue'
const store = useProjectStore()
const socialSites = store.socialSharings
export default {
  components: {
    ReUseButton,
    AppNavigation,
  },
  data: () => {
    return {
      isOpen: false,
      modal: false,
      socialSites,
    }
  },

  computed: {
    ...mapState(useProjectStore, {}),
  },
  methods: {
    themeSwitcher() {
      this.$colorMode.preference =
        this.$colorMode.value === 'light' ? 'dark' : 'light'
    },
  },
}
</script>

<template>
  <nav id="nav" class="sm:container sm:mx-auto">
    <!-- Header -->
    <div
      class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6"
    >
      <!-- Header menu links and small screen hamburger menu -->
      <div class="flex justify-between items-center px-1 sm:px-0">
        <!-- Header logos -->
        <div>
          <NuxtLink to="/">
            <img
              v-if="$colorMode.value === 'dark'"
              src="/logo-light.svg"
              class="w-36"
              alt="Light Logo"
            />
            <img v-else src="/logo-dark.svg" alt="Color Logo" class="w-36" />
          </NuxtLink>
        </div>

        <!-- Theme switcher small screen -->
        <button
          class="sm:hidden ml-8 bg-primary-light dark:bg-ternary-dark px-2 py-1.5 sm:px-3 sm:py-2 shadow-sm rounded-xl cursor-pointer"
          @click="themeSwitcher"
        >
          <!-- Dark mode icon -->
          <svg
            v-if="$colorMode.value === 'light'"
            xmlns="http://www.w3.org/2000/svg"
            class="text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          <!-- Light mode icon -->
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="text-gray-200 hover:text-gray-50 w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </button>
      </div>

      <!-- Header links -->
      <AppNavigation />

      <!-- Header right section buttons -->
      <div
        class="hidden sm:flex justify-between items-center flex-col md:flex-row"
      >
        <!-- Hire me button -->
        <div class="font-general-medium hidden md:block">
          <ReUseButton
            title="Download Resume"
            is-link
            :link="socialSites[1].url"
          />
        </div>

        <!-- Theme switcher large screen -->
        <button
          class="sm:ml-6 bg-primary-light dark:bg-ternary-dark px-2 py-2 shadow-sm rounded-lg cursor-pointer"
          @click="themeSwitcher"
        >
          <!-- Dark mode icon -->
          <svg
            v-if="$colorMode.value === 'light'"
            xmlns="http://www.w3.org/2000/svg"
            class="text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          <!-- Light mode icon -->
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="text-gray-200 hover:text-gray-50 w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>
