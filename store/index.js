import { defineStore } from 'pinia'
import { projectsState } from '~/static/projects.js'

export const useProjectStore = defineStore('projects', {
  state: projectsState,
  getters: {
    getProjects: (state) => () => {
      return state.projects
    },
    getProjectById: (state) => (id) => {
      return state.projects.find((project) => project.id === id)
    },
  },
})
