import { ApolloServer } from '@apollo/server'
import { startServerAndCreateH3Handler } from '@as-integrations/h3'
import { Resolvers } from '../types'
import { GitHubAPI } from '~/server/datasources/github-api'
import { DataSourceContext } from '~/server/context'
// @ts-ignore
import { schema } from '#graphql/schema'

const resolvers: Resolvers = {
  Query: {
    repos: (_: any, __: any, { dataSources }) => {
      return dataSources.ghAPI.getGHRepos()
    },
    repo: (_: any, args: { id: number }, { dataSources }) => {
      return dataSources.ghAPI.getGHRepoById(args.id)
    },
  },
}

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
})

export default startServerAndCreateH3Handler<DataSourceContext>(server, {
  // eslint-disable-next-line require-await
  context: async () => {
    const { cache } = server
    const token = useRuntimeConfig().ghToken
    return {
      dataSources: { ghAPI: new GitHubAPI({ token, cache }) },
    }
  },
})
