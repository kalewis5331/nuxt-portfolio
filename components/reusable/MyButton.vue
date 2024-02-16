<script>
import { defineProps } from 'vue'

export default {
  props: defineProps(['title']),
  emits: ['click'],
  data: () => {
    return {
      // @todo
    }
  },
}
</script>

<template>
  <button @click="$emit('click')">{{ title }}</button>
</template>

<style lang="scss" scoped></style>
