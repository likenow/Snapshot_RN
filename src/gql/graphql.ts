/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Any: any;
};

export type Alias = {
  __typename?: 'Alias';
  address: Scalars['String'];
  alias: Scalars['String'];
  created: Scalars['Int'];
  id: Scalars['String'];
  ipfs?: Maybe<Scalars['String']>;
};

export type AliasWhere = {
  address?: InputMaybe<Scalars['String']>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  alias?: InputMaybe<Scalars['String']>;
  alias_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created?: InputMaybe<Scalars['Int']>;
  created_gt?: InputMaybe<Scalars['Int']>;
  created_gte?: InputMaybe<Scalars['Int']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  created_lt?: InputMaybe<Scalars['Int']>;
  created_lte?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ipfs?: InputMaybe<Scalars['String']>;
  ipfs_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Follow = {
  __typename?: 'Follow';
  created: Scalars['Int'];
  follower: Scalars['String'];
  id: Scalars['String'];
  ipfs?: Maybe<Scalars['String']>;
  space: Space;
};

export type FollowWhere = {
  created?: InputMaybe<Scalars['Int']>;
  created_gt?: InputMaybe<Scalars['Int']>;
  created_gte?: InputMaybe<Scalars['Int']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  created_lt?: InputMaybe<Scalars['Int']>;
  created_lte?: InputMaybe<Scalars['Int']>;
  follower?: InputMaybe<Scalars['String']>;
  follower_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ipfs?: InputMaybe<Scalars['String']>;
  ipfs_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  space?: InputMaybe<Scalars['String']>;
  space_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Item = {
  __typename?: 'Item';
  id: Scalars['String'];
  spacesCount?: Maybe<Scalars['Int']>;
};

export type Message = {
  __typename?: 'Message';
  address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  ipfs?: Maybe<Scalars['String']>;
  mci?: Maybe<Scalars['Int']>;
  receipt?: Maybe<Scalars['String']>;
  sig?: Maybe<Scalars['String']>;
  space?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type MessageWhere = {
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mci?: InputMaybe<Scalars['Int']>;
  mci_gt?: InputMaybe<Scalars['Int']>;
  mci_gte?: InputMaybe<Scalars['Int']>;
  mci_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  mci_lt?: InputMaybe<Scalars['Int']>;
  mci_lte?: InputMaybe<Scalars['Int']>;
  space?: InputMaybe<Scalars['String']>;
  space_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Metrics = {
  __typename?: 'Metrics';
  categories?: Maybe<Scalars['Any']>;
  total?: Maybe<Scalars['Int']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Proposal = {
  __typename?: 'Proposal';
  app?: Maybe<Scalars['String']>;
  author: Scalars['String'];
  body?: Maybe<Scalars['String']>;
  choices: Array<Maybe<Scalars['String']>>;
  created: Scalars['Int'];
  discussion: Scalars['String'];
  end: Scalars['Int'];
  flagged?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  ipfs?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  network: Scalars['String'];
  plugins: Scalars['Any'];
  privacy?: Maybe<Scalars['String']>;
  quorum: Scalars['Float'];
  scores?: Maybe<Array<Maybe<Scalars['Float']>>>;
  scores_by_strategy?: Maybe<Scalars['Any']>;
  scores_state?: Maybe<Scalars['String']>;
  scores_total?: Maybe<Scalars['Float']>;
  scores_updated?: Maybe<Scalars['Int']>;
  snapshot?: Maybe<Scalars['String']>;
  space?: Maybe<Space>;
  start: Scalars['Int'];
  state?: Maybe<Scalars['String']>;
  strategies: Array<Maybe<Strategy>>;
  symbol: Scalars['String'];
  title: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  validation?: Maybe<Validation>;
  votes?: Maybe<Scalars['Int']>;
};

export type ProposalWhere = {
  app?: InputMaybe<Scalars['String']>;
  app_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  app_not?: InputMaybe<Scalars['String']>;
  app_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  author?: InputMaybe<Scalars['String']>;
  author_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created?: InputMaybe<Scalars['Int']>;
  created_gt?: InputMaybe<Scalars['Int']>;
  created_gte?: InputMaybe<Scalars['Int']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  created_lt?: InputMaybe<Scalars['Int']>;
  created_lte?: InputMaybe<Scalars['Int']>;
  end?: InputMaybe<Scalars['Int']>;
  end_gt?: InputMaybe<Scalars['Int']>;
  end_gte?: InputMaybe<Scalars['Int']>;
  end_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  end_lt?: InputMaybe<Scalars['Int']>;
  end_lte?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ipfs?: InputMaybe<Scalars['String']>;
  ipfs_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  network?: InputMaybe<Scalars['String']>;
  network_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  plugins_contains?: InputMaybe<Scalars['String']>;
  scores_state?: InputMaybe<Scalars['String']>;
  scores_state_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  space?: InputMaybe<Scalars['String']>;
  space_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  space_verified?: InputMaybe<Scalars['Boolean']>;
  start?: InputMaybe<Scalars['Int']>;
  start_gt?: InputMaybe<Scalars['Int']>;
  start_gte?: InputMaybe<Scalars['Int']>;
  start_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  start_lt?: InputMaybe<Scalars['Int']>;
  start_lte?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<Scalars['String']>;
  strategies_contains?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  validation?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aliases?: Maybe<Array<Maybe<Alias>>>;
  follows?: Maybe<Array<Maybe<Follow>>>;
  messages?: Maybe<Array<Maybe<Message>>>;
  networks?: Maybe<Array<Maybe<Item>>>;
  plugins?: Maybe<Array<Maybe<Item>>>;
  proposal?: Maybe<Proposal>;
  proposals?: Maybe<Array<Maybe<Proposal>>>;
  ranking?: Maybe<RankingObject>;
  skins?: Maybe<Array<Maybe<Item>>>;
  space?: Maybe<Space>;
  spaces?: Maybe<Array<Maybe<Space>>>;
  strategies?: Maybe<Array<Maybe<StrategyItem>>>;
  strategy?: Maybe<StrategyItem>;
  subscriptions?: Maybe<Array<Maybe<Subscription>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
  validations?: Maybe<Array<Maybe<Item>>>;
  vote?: Maybe<Vote>;
  votes?: Maybe<Array<Maybe<Vote>>>;
  vp?: Maybe<Vp>;
};


export type QueryAliasesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AliasWhere>;
};


export type QueryFollowsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FollowWhere>;
};


export type QueryMessagesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhere>;
};


export type QueryProposalArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryProposalsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProposalWhere>;
};


export type QueryRankingArgs = {
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RankingWhere>;
};


export type QuerySpaceArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QuerySpacesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SpaceWhere>;
};


export type QueryStrategyArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QuerySubscriptionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscriptionWhere>;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryUsersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UsersWhere>;
};


export type QueryVoteArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryVotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VoteWhere>;
};


export type QueryVpArgs = {
  proposal?: InputMaybe<Scalars['String']>;
  space: Scalars['String'];
  voter: Scalars['String'];
};

export type RankingObject = {
  __typename?: 'RankingObject';
  items?: Maybe<Array<Maybe<Space>>>;
  metrics?: Maybe<Metrics>;
};

export type RankingWhere = {
  category?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  network?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
};

export type Space = {
  __typename?: 'Space';
  about?: Maybe<Scalars['String']>;
  activeProposals?: Maybe<Scalars['Int']>;
  admins?: Maybe<Array<Maybe<Scalars['String']>>>;
  avatar?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  children?: Maybe<Array<Maybe<Space>>>;
  coingecko?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  filters?: Maybe<SpaceFilters>;
  flagged?: Maybe<Scalars['Boolean']>;
  followersCount?: Maybe<Scalars['Int']>;
  followersCount7d?: Maybe<Scalars['Int']>;
  github?: Maybe<Scalars['String']>;
  guidelines?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  members?: Maybe<Array<Maybe<Scalars['String']>>>;
  moderators?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  network?: Maybe<Scalars['String']>;
  parent?: Maybe<Space>;
  plugins?: Maybe<Scalars['Any']>;
  private?: Maybe<Scalars['Boolean']>;
  proposalsCount?: Maybe<Scalars['Int']>;
  proposalsCount7d?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Float']>;
  skin?: Maybe<Scalars['String']>;
  strategies?: Maybe<Array<Maybe<Strategy>>>;
  symbol?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  terms?: Maybe<Scalars['String']>;
  treasuries?: Maybe<Array<Maybe<Treasury>>>;
  twitter?: Maybe<Scalars['String']>;
  validation?: Maybe<Validation>;
  verified?: Maybe<Scalars['Boolean']>;
  voteValidation?: Maybe<Validation>;
  votesCount?: Maybe<Scalars['Int']>;
  votesCount7d?: Maybe<Scalars['Int']>;
  voting?: Maybe<SpaceVoting>;
  website?: Maybe<Scalars['String']>;
};

export type SpaceFilters = {
  __typename?: 'SpaceFilters';
  minScore?: Maybe<Scalars['Float']>;
  onlyMembers?: Maybe<Scalars['Boolean']>;
};

export type SpaceVoting = {
  __typename?: 'SpaceVoting';
  aliased?: Maybe<Scalars['Boolean']>;
  blind?: Maybe<Scalars['Boolean']>;
  delay?: Maybe<Scalars['Int']>;
  hideAbstain?: Maybe<Scalars['Boolean']>;
  period?: Maybe<Scalars['Int']>;
  privacy?: Maybe<Scalars['String']>;
  quorum?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type SpaceWhere = {
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Strategy = {
  __typename?: 'Strategy';
  name: Scalars['String'];
  network?: Maybe<Scalars['String']>;
  params?: Maybe<Scalars['Any']>;
};

export type StrategyItem = {
  __typename?: 'StrategyItem';
  about?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  examples?: Maybe<Array<Maybe<Scalars['Any']>>>;
  id: Scalars['String'];
  schema?: Maybe<Scalars['Any']>;
  spacesCount?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  address: Scalars['String'];
  created: Scalars['Int'];
  id: Scalars['String'];
  ipfs?: Maybe<Scalars['String']>;
  space: Space;
};

export type SubscriptionWhere = {
  address?: InputMaybe<Scalars['String']>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created?: InputMaybe<Scalars['Int']>;
  created_gt?: InputMaybe<Scalars['Int']>;
  created_gte?: InputMaybe<Scalars['Int']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  created_lt?: InputMaybe<Scalars['Int']>;
  created_lte?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ipfs?: InputMaybe<Scalars['String']>;
  ipfs_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  space?: InputMaybe<Scalars['String']>;
  space_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Treasury = {
  __typename?: 'Treasury';
  address?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  network?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  about?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  created: Scalars['Int'];
  id: Scalars['String'];
  ipfs?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UsersWhere = {
  created?: InputMaybe<Scalars['Int']>;
  created_gt?: InputMaybe<Scalars['Int']>;
  created_gte?: InputMaybe<Scalars['Int']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  created_lt?: InputMaybe<Scalars['Int']>;
  created_lte?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ipfs?: InputMaybe<Scalars['String']>;
  ipfs_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Validation = {
  __typename?: 'Validation';
  name: Scalars['String'];
  params?: Maybe<Scalars['Any']>;
};

export type Vote = {
  __typename?: 'Vote';
  app?: Maybe<Scalars['String']>;
  choice: Scalars['Any'];
  created: Scalars['Int'];
  id: Scalars['String'];
  ipfs?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['Any']>;
  proposal?: Maybe<Proposal>;
  reason?: Maybe<Scalars['String']>;
  space: Space;
  voter: Scalars['String'];
  vp?: Maybe<Scalars['Float']>;
  vp_by_strategy?: Maybe<Array<Maybe<Scalars['Float']>>>;
  vp_state?: Maybe<Scalars['String']>;
};

export type VoteWhere = {
  app?: InputMaybe<Scalars['String']>;
  app_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  app_not?: InputMaybe<Scalars['String']>;
  app_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created?: InputMaybe<Scalars['Int']>;
  created_gt?: InputMaybe<Scalars['Int']>;
  created_gte?: InputMaybe<Scalars['Int']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  created_lt?: InputMaybe<Scalars['Int']>;
  created_lte?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ipfs?: InputMaybe<Scalars['String']>;
  ipfs_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  proposal?: InputMaybe<Scalars['String']>;
  proposal_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  reason?: InputMaybe<Scalars['String']>;
  reason_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  reason_not?: InputMaybe<Scalars['String']>;
  reason_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  space?: InputMaybe<Scalars['String']>;
  space_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  voter?: InputMaybe<Scalars['String']>;
  voter_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  vp?: InputMaybe<Scalars['Float']>;
  vp_gt?: InputMaybe<Scalars['Float']>;
  vp_gte?: InputMaybe<Scalars['Float']>;
  vp_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  vp_lt?: InputMaybe<Scalars['Float']>;
  vp_lte?: InputMaybe<Scalars['Float']>;
  vp_state?: InputMaybe<Scalars['String']>;
  vp_state_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Vp = {
  __typename?: 'Vp';
  vp?: Maybe<Scalars['Float']>;
  vp_by_strategy?: Maybe<Array<Maybe<Scalars['Float']>>>;
  vp_state?: Maybe<Scalars['String']>;
};

export type SpacesQueryVariables = Exact<{
  first: Scalars['Int'];
}>;


export type SpacesQuery = { __typename?: 'Query', spaces?: Array<{ __typename?: 'Space', id: string, name?: string | null, about?: string | null, network?: string | null, symbol?: string | null, admins?: Array<string | null> | null, members?: Array<string | null> | null, plugins?: any | null, strategies?: Array<{ __typename?: 'Strategy', name: string, params?: any | null } | null> | null, filters?: { __typename?: 'SpaceFilters', minScore?: number | null, onlyMembers?: boolean | null } | null } | null> | null };


export const SpacesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Spaces"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"spaces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"IntValue","value":"0"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"StringValue","value":"created","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"asc"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"strategies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"params"}}]}},{"kind":"Field","name":{"kind":"Name","value":"admins"}},{"kind":"Field","name":{"kind":"Name","value":"members"}},{"kind":"Field","name":{"kind":"Name","value":"filters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minScore"}},{"kind":"Field","name":{"kind":"Name","value":"onlyMembers"}}]}},{"kind":"Field","name":{"kind":"Name","value":"plugins"}}]}}]}}]} as unknown as DocumentNode<SpacesQuery, SpacesQueryVariables>;