import { readFileSync } from 'fs'
import path from 'path'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateH3Handler } from '@as-integrations/h3'
import { gql } from 'graphql-tag'
import { resolvePath } from '@nuxt/kit'
import { Resolvers } from '../types'
import { GitHubAPI } from '~/server/datasources/github-api'
import { DataSourceContext } from '~/server/context'
// const __dirname = path.resolve()
const entrypoint = await resolvePath('/')
// const root = path.join(entrypoint, 'server')
const typeDefs = gql(
  readFileSync(path.join(entrypoint, 'schema.graphql'), {
    encoding: 'utf-8',
  }),
)

const resolvers: Resolvers = {
  Query: {
    repos: (_: any, __: any, { dataSources }) => {
      return dataSources.ghAPI.getGHRepos()
    },
  },
}

const server = new ApolloServer({
  typeDefs,
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
