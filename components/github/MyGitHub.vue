<script setup lang="ts">
import GithubReposItem from '~/components/github/GitHubRepoItem.vue'
import type { IRepository } from '~/interfaces/github'
const query = `
  {
    repos {
      id
      language
      name
      description
      stargazers_count
      forks
      html_url
    }
  }
`
const { data } = await useFetch('/api/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: { query },
})

const repos: IRepository[] = data.value.data.repos
const filteredRepos =
  repos && repos.length ? repos.filter((repo) => repo.language) : repos
</script>

<template>
  <div class="max-w-full h-full overflow-y-auto">
    <header>
      <h2
        class="font-bold text-lg md:text-2xl text-ternary-dark dark:text-primary-light text-center sm:text-left"
      >
        Github Repositories
      </h2>
    </header>
    <div
      v-if="repos && filteredRepos && filteredRepos.length > 0"
      class="grid sm:grid-cols-3 grid-cols-1 gap-5 pt-4 w-full sm:pr-5"
    >
      <div v-for="repo in filteredRepos" :key="repo.id" class="">
        <GithubReposItem :repository="repo" />
      </div>
    </div>

    <div v-else class="flex flex-wrap pt-4 md:-mr-6">
      <p class="text-medium text-gray-500 dark:text-ternary-light">
        No Repositories Found.
      </p>
    </div>
  </div>
</template>
