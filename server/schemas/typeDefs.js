const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type query {
  me: [user]!
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    createVote(username: String!, email: String!, password:String!): Auth
    
  }

  type user {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]!
  }

  type Book {
    bookId (Not the _id, but the book's id value returned from Google's Book API.)
    authors: [authors]!
    description: String!
    title: String!
    image: String!
    link: String!
  }

  type auth {
    token
    user: user!
  }

`;

module.exports = typeDefs;
