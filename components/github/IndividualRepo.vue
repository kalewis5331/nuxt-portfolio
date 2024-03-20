<script setup lang="ts">
import pkg from 'feather-icons'
import { Chart, registerables } from 'chart.js'
import { onMounted } from 'vue'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import type { IRepository, LanguageTrending } from '~/interfaces/github'
import LanguageColor from '~/components/github/LanguageColor.vue'
import * as untypedColors from '~/static/colors.json'
import BackButton from '~/components/reusable/BackButton.vue'

const colors: LanguageTrending = untypedColors
const { replace } = pkg
const route = useRoute()
const repositoryId = route.params.id
const query = `
  {
    repo(id: ${repositoryId}) {
      id
      language
      name
      description
      stargazers_count
      forks
      html_url
      private
      created_at
      visibility
      topics
      languages_url
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

const repo: IRepository = data.value.data.repo

const formattedDate = (repoDate: string) => {
  // Convert the original date string to a Date object
  const date = new Date(repoDate)

  // Get the components of the date
  const day = date.getDate()
  const month = date.getMonth() + 1 // Months are zero-based, so add 1
  const year = date.getFullYear()

  return `${month}/${day}/${year}`
}

const icon = {
  book: 'M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z',
  star: 'M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z',
  fork: 'M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z',
}

const repoLangs = await useFetch(repo.languages_url).then((res) => {
  return res.data.value
})
const langsArray = Object.keys(repoLangs || {})
const values = Object.values(repoLangs || {})

const getLanguageColor = (language: string): string => {
  if (language && colors) {
    return colors[language]?.color
  } else {
    return '#ffffff'
  }
}

const labelColors: string[] = langsArray.map((lang) => {
  return getLanguageColor(lang)
})

// Chart Creation
// Define a reactive variable to hold the chart instance
const totalSum = values.reduce((sum, num) => sum + num, 0)
const percentages = values.map((value) => (value / totalSum) * 100)

Chart.defaults.color = '#000'
const chartData = {
  labels: langsArray,
  datasets: [
    {
      label: 'Repository Language Utilization',
      data: percentages,
      backgroundColor: labelColors,
      borderColor: labelColors,
      borderWidth: 1,
    },
  ],
}

// noinspection JSUnusedGlobalSymbols
const chartOptions = {
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        min: 0,
        max: 100,
        callback: function (value: any) {
          return value + '%'
        },
      },
      scaleLabel: {
        display: true,
        labelString: 'Percentage',
      },
    },
  },
  plugins: {
    datalabels: {
      formatter: function (value: number) {
        return value.toFixed(2) + '%'
      },
    },
  },
}
// Define a reactive variable to hold the chart instance
const chartInstance = ref<any>(null)
Chart.register(...registerables)

onMounted(() => {
  const canvas = document.getElementById('languages') as HTMLCanvasElement
  if (canvas) {
    const ctx = canvas.getContext('2d')
    if (ctx) {
      chartInstance.value = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: chartOptions,
        plugins: [ChartDataLabels],
      })
    }
  }

  replace()
})
onUpdated(() => {
  replace()
})
</script>

<template>
  <div class="container">
    <!-- Check if there are projects and then load -->
    <BackButton />
    <div v-if="repo">
      <!-- Project heading and meta info -->
      <div>
        <p
          class="font-general-medium text-center sm:text-left text-md sm:text-4xl font-bold text-primary-dark dark:text-primary-light mb-7"
        >
          {{ repo.name }}
        </p>
        <div class="flex flex-col sm:flex-row items-center gap-4">
          <div class="flex items-center">
            <LanguageColor :language="repo.language" />
            <div class="flex items-center">
              <i
                data-feather="clock"
                class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
              ></i>
              <span
                class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
                >{{ formattedDate(repo.created_at) }}</span
              >
            </div>
            <div v-if="repo.stargazers_count" class="flex items-center mr-4">
              <svg
                class="w-4 h-4 fill-current mr-2"
                aria-label="stars"
                viewBox="0 0 16 16"
                role="img"
              >
                <path fill-rule="evenodd" :d="icon.star"></path>
              </svg>
              <span>{{ repo.stargazers_count }}</span>
            </div>
            <div v-if="repo.forks" class="flex items-center">
              <svg
                class="w-4 h-4 fill-current mr-2"
                aria-label="fork"
                viewBox="0 0 16 16"
                role="img"
              >
                <path fill-rule="evenodd" :d="icon.fork"></path>
              </svg>
              <span>{{ repo.forks }}</span>
            </div>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 mt-10">
          <!-- Single project left section details -->
          <!-- Repo gallery -->
          <div class="w-2/3 text-left">
            <!-- Repo Info -->
            <div>
              <p
                class="font-general-medium text-primary-dark dark:text-primary-light text-xl sm:text-2xl font-bold mb-7 text-center sm:text-left"
              >
                Details
              </p>
              <!-- Single project client details -->

              <div
                class="font-general-regular text-ternary-dark dark:text-ternary-light mb-1"
              >
                <p>
                  <b class="font-general-bold">Description: </b
                  >{{ repo.description }}
                </p>
              </div>
              <div
                v-if="repo.topics.length > 0"
                class="font-general-regular text-ternary-dark dark:text-ternary-light mb-1"
              >
                <p>
                  <b class="font-general-bold">Topics: </b>{{ repo.topics }}
                </p>
              </div>
              <div
                class="font-general-regular text-ternary-dark dark:text-ternary-light mb-1"
              >
                <p class="capitalize">
                  <b class="font-general-bold">Visibility: </b
                  >{{ repo.visibility }}
                </p>
              </div>
            </div>
            <div class="w-full">
              <a
                :href="repo.html_url"
                target="__blank"
                class="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100"
              >
                <i data-feather="github" class="w-6 sm:w-8 h-6 sm:h-8"></i>
              </a>
            </div>
          </div>

          <!-- Single project right section details -->
          <div class="w-full text-primary-light float-right">
            <p
              class="font-general-medium text-primary-dark dark:text-primary-light text-xl sm:text-2xl font-bold mb-7 text-center"
            >
              Languages
            </p>
            <div>
              <canvas id="languages" ref="languages" class="bg-white"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
