<script setup lang="ts">
import { useProjectStore } from '~/store'
const store = useProjectStore()
const socialSites = store.socialSharings
const aboutMe = `I'm Kevin, a Lead Developer with 10 years of extensive experience developing and
        maintaining web applications using modern technologies such as React, Typescript, Node.js,
        MongoDB, PostgresQL, Docker, and Amazon Web Services. Expert in supervising multiple teams of developers and dev-ops engineers of all levels. If you believe
        my experience and expertise would be a great fit, you can reach me via one of the methods below!`
</script>

<template>
  <div class="sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="sm:w-1/4 mb-7 sm:mb-0">
      <img
        src="/images/profile.jpg"
        class="w-1/2 rounded-lg sm:w-full m-auto sm:m-0"
        alt=""
      />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left">
      <p
        class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-sm sm:text-lg"
      >
        {{ aboutMe }}
      </p>
      <p
        class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-sm sm:text-lg sm:p-4"
      >
        Email: kalewis5331@gmail.com
      </p>
      <NuxtLink
        :to="socialSites[0].url"
        class="text-ternary-dark dark:text-ternary-light hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer text-sm sm:text-lg sm:p-4"
        target="_blank"
      >
        LinkedIn
      </NuxtLink>
    </div>
  </div>
</template>
