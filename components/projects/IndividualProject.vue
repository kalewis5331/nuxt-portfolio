<script setup lang="ts">
import { replace } from 'feather-icons'
import type { IProject } from '~/interfaces/projects'
import { useProjectStore } from '~/store'
const route = useRoute()
const store = useProjectStore()
const project: IProject | undefined = store.getProjectById(route.params.id)

onMounted(() => {
  replace()
})
onUpdated(() => {
  replace()
})
</script>

<template>
  <div class="container mx-auto">
    <!-- Check if there are projects and then load -->
    <div v-if="project">
      <!-- Project heading and meta info -->
      <div>
        <p
          class="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"
        >
          {{ project.title }}
        </p>
        <div class="flex">
          <div class="flex items-center mr-10">
            <i
              data-feather="clock"
              class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            ></i>
            <span
              class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
              >{{ project.publishDate }}</span
            >
          </div>
          <div class="flex items-center">
            <i
              data-feather="tag"
              class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            ></i>
            <span
              class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
              >{{ project.category }}</span
            >
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 mt-10">
        <!-- Single project left section details -->
        <!-- Project gallery -->
        <div class="w-full text-left">
          <div class="w-1/3">
            <div v-if="project.projectImages[0]" class="mb-10 sm:mb-0">
              <img
                :src="project.projectImages[0].img"
                class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                :alt="project.projectImages[0].title"
              />
            </div>
          </div>

          <!-- Project info -->
          <div class="block sm:flex gap-0 sm:gap-10 mt-4">
            <!-- Single project client details -->
            <div v-if="project.client" class="mb-7">
              <p
                class="font-general-medium text-xl text-secondary-dark dark:text-secondary-light mb-2"
              >
                {{ store.clientTitle }}
              </p>
              <ul class="leading-loose">
                <li
                  v-for="(info, index) in project.client.companyInfos"
                  :key="index"
                  class="font-general-regular text-ternary-dark dark:text-ternary-light mb-1"
                >
                  <span class="font-general-semibold">{{ info.title }}: </span>
                  <a
                    href="#"
                    :class="
                      info.title === 'Website' || info.title === 'Phone'
                        ? 'hover:underline cursor-pointer'
                        : ''
                    "
                    aria-label="Project website and phone"
                    >{{ info.details }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Single project right section details -->
        <div class="w-full text-primary-light float-right">
          <p
            class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"
          >
            {{ store.detailsTitle }}
          </p>
          <p
            class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
          >
            {{ project.details }}
          </p>

          <!-- Single project technologies -->
          <div v-if="project" class="mb-7">
            <p
              class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
            >
              {{ store.techTitle }}
            </p>
            <p
              class="font-general-regular text-lg text-primary-dark dark:text-ternary-light"
            >
              {{ project.technologies.join(', ') }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Project related projects -->

    <!-- Load not found components if no project found -->
    <div v-else class="font-general-medium container mx-auto text-center">
      <h1>No projects yet</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
