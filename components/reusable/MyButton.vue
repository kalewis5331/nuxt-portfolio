<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    default: '',
    type: String,
    required: true,
  },
  onClick: {
    type: Function,
    required: false,
    default: () => {},
  },
  isLink: {
    type: Boolean,
    required: true,
  },
  link: {
    default: '',
    type: String,
    required: true,
  },
})

const emit = defineEmits(['onClick'])
</script>

<template>
  <div
    v-if="props.isLink"
    class="flex justify-center items-center text-md shadow-lg rounded-lg focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 hover:text-white duration-500 dark:hover:bg-indigo-500 dark:hover:text-white dark:duration-500 text-primary-light dark:text-primary-dark bg-slate-800 border border-indigo-200 dark:border-ternary-dark dark:bg-amber-50 p-2.5 sm:py-3"
  >
    <button :aria-label="props.title">
      <NuxtLink :to="props.link" target="_blank">{{ props.title }}</NuxtLink>
    </button>
  </div>
  <div
    v-else
    class="flex justify-center items-center text-md shadow-lg rounded-lg focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 hover:text-white duration-500 dark:hover:bg-indigo-500 dark:hover:text-white dark:duration-500 text-primary-light dark:text-primary-dark bg-slate-800 border border-indigo-200 dark:border-ternary-dark dark:bg-amber-50 p-2.5 sm:py-3"
  >
    <button :aria-label="props.title" @click="emit('onClick')">
      {{ props.title }}
    </button>
  </div>
  <!--  <div-->
  <!--    v-else-->
  <!--    class="flex justify-center items-center text-md border border-indigo-200 dark:border-ternary-dark p-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"-->
  <!--    aria-label="Download Resume"-->
  <!--  >-->
  <!--    <button @click="emit('click')">{{ props.title }}</button>-->
  <!--  </div>-->
</template>

<style lang="scss" scoped></style>
<!--focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500-->
