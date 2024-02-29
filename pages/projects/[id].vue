<script setup lang="ts">
import { replace } from 'feather-icons'
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue'
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

      <!-- Project gallery -->
      <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        <div
          v-for="(projectImage, index) in project.projectImages"
          :key="index"
          class="mb-10 sm:mb-0"
        >
          <img
            :src="projectImage.img"
            class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
            :alt="projectImage.title"
          />
        </div>
      </div>

      <!-- Project info -->
      <div class="block sm:flex gap-0 sm:gap-10 mt-14">
        <!-- Single project left section details -->

        <div class="w-full sm:w-1/3 text-left">
          <!-- Single project client details -->
          <div v-if="project.client" class="mb-7">
            <p
              class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2"
            >
              {{ store.clientTitle }}
            </p>
            <ul class="leading-loose">
              <li
                v-for="(info, index) in project.client.companyInfos"
                :key="index"
                class="font-general-regular text-ternary-dark dark:text-ternary-light mb-3"
              >
                <span class="font-extrabold">{{ info.title }}: </span>
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

          <!-- Single project technologies -->
          <div v-if="project" class="mb-7">
            <p
              class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
            >
              {{ store.techTitle }}
            </p>
            <p
              class="font-general-regular text-primary-dark dark:text-ternary-light"
            >
              {{ project.technologies.join(', ') }}
            </p>
          </div>

          <!-- Single project social sharing -->
          <!--          <div v-if="project">-->
          <!--            <p-->
          <!--              class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"-->
          <!--            >-->
          <!--              {{ store.socialTitle }}-->
          <!--            </p>-->
          <!--            <div class="flex items-center gap-3 mt-5">-->
          <!--              <a-->
          <!--                v-for="(social, index) in store.socialSharings"-->
          <!--                :key="index"-->
          <!--                :href="social.url"-->
          <!--                target="__blank"-->
          <!--                aria-label="Share Project"-->
          <!--                class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"-->
          <!--                ><i-->
          <!--                  :data-feather="social.icon"-->
          <!--                  class="w-4 lg:w-5 h-4 lg:h-5"-->
          <!--                ></i-->
          <!--              ></a>-->
          <!--            </div>-->
          <!--          </div>-->
        </div>

        <!-- Single project right section details -->
        <div v-if="project" class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
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
        </div>
      </div>

      <!-- Project related projects -->
      <ProjectRelatedProjects />
    </div>

    <!-- Load not found components if no project found -->
    <div v-else class="font-general-medium container mx-auto text-center">
      <h1>No projects yet</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
