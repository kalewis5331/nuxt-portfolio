<script setup lang="ts">
import type { IClient } from '~/interfaces/projects'
const props = defineProps<IClient>()
</script>

<template>
  <!-- About single client -->
  <div>
    <img
      :src="props.img"
      :alt="props.title"
      class="w-64 py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer dark:bg-secondary-light"
    />
  </div>
</template>

<style lang="scss" scoped></style>
