<script setup lang="ts">
import GithubReposItem from '~/components/github/GitHubRepoItem.vue'
const { data } = await useFetch('/api/github')
const repos = data.value
</script>

<template>
  <div class="container h-96 overflow-y-auto">
    <header class="pt-4">
      <h2
        class="font-bold text-lg md:text-2xl text-ternary-dark dark:text-primary-light"
      >
        Github Repositories
      </h2>
    </header>
    <div v-if="repos && repos.length > 0" class="flex flex-wrap pt-4 md:-mr-6">
      <div
        v-for="repo in repos"
        :key="repo.id"
        class="w-full md:w-1/2 lg:w-1/2 md:pr-6 pb-4"
      >
        <GithubReposItem :repository="repo" />
      </div>
    </div>
  </div>
</template>
