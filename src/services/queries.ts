import { gql } from '@apollo/client'

export const GET_USER = gql`
  query GetUser($login: String!) {
    user(login: $login) {
      id
      login
      name
      email
      avatarUrl
      bio
      company
      location
      websiteUrl
      twitterUsername
      followers {
        totalCount
      }
      following {
        totalCount
      }
      repositories(first: 10, orderBy: { field: UPDATED_AT, direction: DESC }) {
        totalCount
        nodes {
          id
          name
          description
          url
          stargazerCount
          forkCount
          primaryLanguage {
            name
            color
          }
          updatedAt
        }
      }
    }
  }
`

export const GET_REPOSITORY = gql`
  query GetRepository($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      id
      name
      description
      url
      stargazerCount
      forkCount
      watchers {
        totalCount
      }
      primaryLanguage {
        name
        color
      }
      languages(first: 10) {
        nodes {
          name
          color
        }
      }
      defaultBranchRef {
        name
      }
      createdAt
      updatedAt
      pushedAt
    }
  }
`