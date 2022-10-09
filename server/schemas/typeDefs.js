const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type query {
  me: [user]!
  }

  Input saveBookInput{
    bookId: ID!
    authors: [authors]
    description: String
    title: String
    image: String
    link: String
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, email: String!, password:String!): Auth
    saveBook(Input:saveBookInput): SavedBook
    removeBook(bookId:ID):[User]
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]!
  }

  type Book {
    bookId: ID!
    authors: [authors]
    description: String
    title: String
    image: String
    link: String
  }

  type auth {
    token
    user: [User!]
  }

`;

module.exports = typeDefs;
