<script setup lang="ts">
import axios from 'axios'
import { onMounted, onUnmounted } from 'vue'
import GithubReposItem from '~/components/github/GitHubRepoItem.vue'
import type { LanguageTrending } from '~/interfaces/projects'

const { data } = await useFetch('/api/github')
const repos = data.value
const getColors = async () => {
  return await axios
    .get(
      'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json',
    )
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log(err)
      return []
    })
}

const colors = ref({})

onMounted(async () => {
  colors.value = await getColors()
})

onUnmounted(() => {
  colors.value = {}
})

const getLanguageColor = (
  language: string,
  colors: LanguageTrending,
): string => {
  if (language && colors && colors[language]) {
    return colors[language].color
  } else {
    return '#ffffff'
  }
}
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
    <div
      v-if="repos && repos.length > 0 && colors"
      class="flex flex-wrap pt-4 md:-mr-6"
    >
      <div
        v-for="repo in repos"
        :key="repo.id"
        class="w-full md:w-1/2 lg:w-1/2 md:pr-6 pb-4"
      >
        <GithubReposItem
          :repository="repo"
          :bg-color="getLanguageColor(repo.language, colors)"
        />
      </div>
    </div>
  </div>
</template>
