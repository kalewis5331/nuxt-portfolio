<script setup lang="ts">
import type { IClient } from '~/interfaces/projects'
const clients: IClient[] = [{ id: 1, img: '', title: 'Self' }]
</script>

<template>
  <!-- About clients section -->
  <div class="mt-10 sm:mt-20">
    <p
      class="font-general-medium text-2xl text-center sm:text-3xl text-primary-dark dark:text-primary-light"
    >
      Featured Clients
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
      <AboutClientSingle
        v-for="client in clients"
        :key="client.id"
        :client="client"
      />
    </div>
  </div>
</template>
