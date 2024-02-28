import { GraphQLResolveInfo } from 'graphql'
import { DataSourceContext } from './context'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export type GhQuery = {
  __typename?: 'Query'
  /** Personal Repos. */
  // eslint-disable-next-line no-use-before-define
  repos: Array<Repository>
}

export type License = {
  __typename?: 'License'
  key: Scalars['String']['output']
  name: Scalars['String']['output']
  node_id: Scalars['String']['output']
  spdx_id: Scalars['String']['output']
  url: Scalars['String']['output']
}

export type Owner = {
  __typename?: 'Owner'
  avatar_url: Scalars['String']['output']
  events_url: Scalars['String']['output']
  followers_url: Scalars['String']['output']
  following_url: Scalars['String']['output']
  gists_url: Scalars['String']['output']
  gravatar_id: Scalars['String']['output']
  html_url: Scalars['String']['output']
  id: Scalars['Int']['output']
  login: Scalars['String']['output']
  node_id: Scalars['String']['output']
  organizations_url: Scalars['String']['output']
  received_events_url: Scalars['String']['output']
  repos_url: Scalars['String']['output']
  site_admin: Scalars['Boolean']['output']
  starred_url: Scalars['String']['output']
  subscriptions_url: Scalars['String']['output']
  type: Scalars['String']['output']
  url: Scalars['String']['output']
}

export type Repository = {
  __typename?: 'Repository'
  allow_forking: Scalars['Boolean']['output']
  archive_url: Scalars['String']['output']
  archived: Scalars['Boolean']['output']
  assignees_url: Scalars['String']['output']
  blobs_url: Scalars['String']['output']
  branches_url: Scalars['String']['output']
  clone_url: Scalars['String']['output']
  collaborators_url: Scalars['String']['output']
  comments_url: Scalars['String']['output']
  commits_url: Scalars['String']['output']
  compare_url: Scalars['String']['output']
  contents_url: Scalars['String']['output']
  contributors_url: Scalars['String']['output']
  created_at: Scalars['String']['output']
  default_branch: Scalars['String']['output']
  deployments_url: Scalars['String']['output']
  description: Scalars['String']['output']
  disabled: Scalars['Boolean']['output']
  downloads_url: Scalars['String']['output']
  events_url: Scalars['String']['output']
  fork: Scalars['Boolean']['output']
  forks: Scalars['Int']['output']
  forks_count: Scalars['Int']['output']
  forks_url: Scalars['String']['output']
  full_name: Scalars['String']['output']
  git_commits_url: Scalars['String']['output']
  git_refs_url: Scalars['String']['output']
  git_tags_url: Scalars['String']['output']
  git_url: Scalars['String']['output']
  has_discussions: Scalars['Boolean']['output']
  has_downloads: Scalars['Boolean']['output']
  has_issues: Scalars['Boolean']['output']
  has_pages: Scalars['Boolean']['output']
  has_projects: Scalars['Boolean']['output']
  has_wiki: Scalars['Boolean']['output']
  homepage: Scalars['String']['output']
  hooks_url: Scalars['String']['output']
  html_url: Scalars['String']['output']
  id: Scalars['Int']['output']
  is_template: Scalars['Boolean']['output']
  issue_comment_url: Scalars['String']['output']
  issue_events_url: Scalars['String']['output']
  issues_url: Scalars['String']['output']
  keys_url: Scalars['String']['output']
  labels_url: Scalars['String']['output']
  language?: Maybe<Scalars['String']['output']>
  languages_url: Scalars['String']['output']
  license?: Maybe<License>
  merges_url: Scalars['String']['output']
  milestones_url: Scalars['String']['output']
  mirror_url?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  node_id: Scalars['String']['output']
  notifications_url: Scalars['String']['output']
  open_issues: Scalars['Int']['output']
  open_issues_count: Scalars['Int']['output']
  owner: Owner
  private: Scalars['Boolean']['output']
  pulls_url: Scalars['String']['output']
  pushed_at: Scalars['String']['output']
  releases_url: Scalars['String']['output']
  size: Scalars['Int']['output']
  ssh_url: Scalars['String']['output']
  stargazers_count: Scalars['Int']['output']
  stargazers_url: Scalars['String']['output']
  statuses_url: Scalars['String']['output']
  subscribers_url: Scalars['String']['output']
  subscription_url: Scalars['String']['output']
  svn_url: Scalars['String']['output']
  tags_url: Scalars['String']['output']
  teams_url: Scalars['String']['output']
  topics: Array<Scalars['String']['output']>
  trees_url: Scalars['String']['output']
  updated_at: Scalars['String']['output']
  url: Scalars['String']['output']
  visibility: Scalars['String']['output']
  watchers: Scalars['Int']['output']
  watchers_count: Scalars['Int']['output']
  web_commit_signoff_required: Scalars['Boolean']['output']
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  // eslint-disable-next-line no-use-before-define
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  // eslint-disable-next-line no-use-before-define
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>
  Query: ResolverTypeWrapper<GhQuery>
  Int: ResolverTypeWrapper<Scalars['Int']['output']>
  License: ResolverTypeWrapper<License>
  Owner: ResolverTypeWrapper<Owner>
  Repository: ResolverTypeWrapper<Repository>
  String: ResolverTypeWrapper<Scalars['String']['output']>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output']
  Query: GhQuery
  Int: Scalars['Int']['output']
  License: License
  Owner: Owner
  Repository: Repository
  String: Scalars['String']['output']
}

export type GhQueryResolvers<
  ContextType = DataSourceContext,
  ParentType extends
    ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  repos?: Resolver<Array<ResolversTypes['Repository']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type LicenseResolvers<
  ContextType = DataSourceContext,
  ParentType extends
    ResolversParentTypes['License'] = ResolversParentTypes['License'],
> = {
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  node_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  spdx_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type OwnerResolvers<
  ContextType = DataSourceContext,
  ParentType extends
    ResolversParentTypes['Owner'] = ResolversParentTypes['Owner'],
> = {
  avatar_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  events_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  followers_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  following_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  gists_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  gravatar_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  html_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  login?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  node_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  organizations_url?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >
  received_events_url?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >
  repos_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  site_admin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  starred_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  subscriptions_url?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type RepositoryResolvers<
  ContextType = DataSourceContext,
  ParentType extends
    ResolversParentTypes['Repository'] = ResolversParentTypes['Repository'],
> = {
  allow_forking?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  archive_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  archived?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  assignees_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  blobs_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  branches_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  clone_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  collaborators_url?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >
  comments_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  commits_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  compare_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  contents_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  contributors_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  default_branch?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  deployments_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  disabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  downloads_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  events_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  fork?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  forks?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  forks_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  forks_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  full_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  git_commits_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  git_refs_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  git_tags_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  git_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  has_discussions?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  has_downloads?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  has_issues?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  has_pages?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  has_projects?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  has_wiki?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  homepage?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  hooks_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  html_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  is_template?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  issue_comment_url?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >
  issue_events_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  issues_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  keys_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  labels_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  languages_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  license?: Resolver<Maybe<ResolversTypes['License']>, ParentType, ContextType>
  merges_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  milestones_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  mirror_url?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  node_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  notifications_url?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >
  open_issues?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  open_issues_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  owner?: Resolver<ResolversTypes['Owner'], ParentType, ContextType>
  private?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  pulls_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  pushed_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  releases_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  ssh_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  stargazers_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  stargazers_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  statuses_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  subscribers_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  subscription_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  svn_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  tags_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  teams_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  topics?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>
  trees_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updated_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  visibility?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  watchers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  watchers_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  web_commit_signoff_required?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type Resolvers<ContextType = DataSourceContext> = {
  Query?: GhQueryResolvers<ContextType>
  License?: LicenseResolvers<ContextType>
  Owner?: OwnerResolvers<ContextType>
  Repository?: RepositoryResolvers<ContextType>
}
