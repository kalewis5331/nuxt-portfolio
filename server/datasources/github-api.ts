import { RESTDataSource } from '@apollo/datasource-rest'
import { Repository } from '~/server/types'

export class GitHubAPI extends RESTDataSource {
  baseURL = 'https://api.github.com/'

  async getGHRepos(): Promise<Repository[]> {
    return await this.get('users/kalewis5331/repos')
  }
}
