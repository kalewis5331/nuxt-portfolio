<script>
import feather from 'feather-icons'
import { mapState } from 'pinia'
import { useProjectStore } from '~/store/index.ts'
const { replace } = feather

export default {
  data: () => {
    return {
      selectedProject: '',
      searchProject: '',
      projects: useProjectStore().getProjects(),
    }
  },
  mounted() {
    replace()
  },
  // eslint-disable-next-line vue/order-in-components
  computed: {
    ...mapState(useProjectStore, {
      filteredProjects() {
        if (this.selectedProject) {
          return this.filterProjectsByCategory()
        } else if (this.searchProject) {
          return this.filterProjectsBySearch()
        }
        return this.projects
      },
      heading: 'projectsHeading',
      description: 'projectsDescription',
    }),
  },
  methods: {
    filterProjectsByCategory() {
      return this.projects.filter((item) => {
        const category =
          item.category.charAt(0).toUpperCase() + item.category.slice(1)
        return category.includes(this.selectedProject)
      })
    },
    filterProjectsBySearch() {
      const project = new RegExp(this.searchProject, 'i')
      return this.projects.filter((el) => el.title.match(project))
    },
    get() {
      return useProjectStore().getProjects()
    },
  },
}
</script>

<template>
  <div class="pt-10 sm:pt-20 md:pt-24">
    <!-- Projects grid header -->
    <div class="text-center">
      <p
        class="font-bold text-lg md:text-2xl text-ternary-dark dark:text-primary-light"
      >
        {{ heading }}
      </p>
      <!-- Note: This description is commented out, but if you want to see it, just uncomment this -->
      <p class="text-medium text-gray-500 dark:text-ternary-light">
        {{ description }}
      </p>
    </div>

    <!-- Filter and search projects -->
    <div class="mt-8 sm:mt-10">
      <div
        class="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2"
      >
        <div class="flex justify-between gap-2">
          <span
            class="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer"
          >
            <i
              data-feather="search"
              class="text-ternary-dark dark:text-ternary-light"
            ></i>
          </span>
          <input
            id="name"
            v-model="searchProject"
            class="font-general-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
            name="name"
            type="search"
            required=""
            placeholder="Search Projects"
            aria-label="Name"
          />
        </div>
        <ProjectsFilter @change="selectedProject = $event" />
      </div>
    </div>

    <!-- Projects grid -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6 sm:gap-10 justify-items-center items-stretch"
    >
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark w-60"
        aria-label="Single Project"
      >
        <NuxtLink :to="`/projects/${project.id}`" class="items-stretch">
          <div>
            <img
              :src="project.img"
              :alt="project.title"
              class="object-fill h-48 w-full"
            />
          </div>
          <div class="text-center px-4 py-6">
            <p
              class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
            >
              {{ project.title }}
            </p>
            <span
              class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
              >{{ project.category }}</span
            >
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
