import { AugmentedRequest, RESTDataSource } from '@apollo/datasource-rest'
import { KeyValueCache } from '@apollo/utils.keyvaluecache'
import { Repository } from '~/server/types'

export class GitHubAPI extends RESTDataSource {
  baseURL = 'https://api.github.com/'
  private readonly token: string
  constructor(options: { token: string; cache: KeyValueCache }) {
    super(options)

    this.token = options.token
  }

  override willSendRequest(_path: string, request: AugmentedRequest) {
    request.headers.authorization = `Bearer ${this.token}`
  }

  async retrieveRepo(substring: string): Promise<Repository[]> {
    return await this.get(substring)
  }

  async getGHRepos(): Promise<Repository[]> {
    const runtimeConfig = useRuntimeConfig()
    const kalewisUrl = this.retrieveRepo(runtimeConfig.professionalGHUrl)
    const kl5331Url = this.retrieveRepo(runtimeConfig.personalGHUrl)
    return await Promise.all([kalewisUrl, kl5331Url])
      .then((repos) => {
        return repos.flat()
      })
      .catch((err) => {
        console.log(err)
        return []
      })
  }
}
