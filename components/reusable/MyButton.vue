<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    default: '',
    type: String,
    required: true,
  },
})

const emit = defineEmits(['click'])
</script>

<template>
  <button @click="emit('click')">{{ props.title }}</button>
</template>

<style lang="scss" scoped></style>
