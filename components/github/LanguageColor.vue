<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import type { LanguageTrending } from '~/interfaces/github'
import * as untypedColors from '~/static/colors.json'

const props = withDefaults(defineProps<{ language: string }>(), {
  language: 'N/A',
})

const color = ref<String | null>('')
const colors: LanguageTrending = untypedColors

const getLanguageColor = (language: string): string | null => {
  if (language && colors && colors[language]) {
    return colors[language].color
  } else {
    return '#ffffff'
  }
}

onMounted(() => {
  color.value = getLanguageColor(props.language)
})

onUnmounted(() => {
  color.value = ''
})
</script>

<template>
  <div v-if="language" class="flex items-center mr-4">
    <span
      :style="{ backgroundColor: language ? color : '' }"
      class="w-3 h-3 rounded-full relative"
    ></span>
    <span class="pl-2 text-primary-dark dark:text-primary-light">{{
      language
    }}</span>
  </div>
</template>
