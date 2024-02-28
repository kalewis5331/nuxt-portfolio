import { readFileSync } from 'fs'
import path from 'path'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateH3Handler } from '@as-integrations/h3'
import { gql } from 'graphql-tag'
import { Resolvers } from '../types'
import { GitHubAPI } from '~/server/datasources/github-api'
import { DataSourceContext } from '~/server/context'

const typeDefs = gql(
  readFileSync(path.resolve('./server/', './schema.graphql'), {
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
    return {
      dataSources: { ghAPI: new GitHubAPI() },
    }
  },
})
