import { defineStore } from 'pinia'
import { projectsState } from '~/static/projects.js'
import type { IProject } from '~/interfaces/projects'

export const useProjectStore = defineStore('projects', {
  state: projectsState,
  getters: {
    getProjects: (state) => () => {
      return state.projects
    },
    getProjectById:
      (state) =>
      (id: string | string[]): IProject | undefined => {
        return state.projects.find((project: IProject) => project.id === id)
      },
  },
})
