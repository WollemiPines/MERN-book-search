const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
  me: User!
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, email: String!, password:String!): Auth
    saveBook(input:saveBookInput): [Book]
    removeBook(bookId:ID):User
  }
  input saveBookInput{
    bookId: ID!
    authors: authors
    description: String
    title: String
    image: String
    link: String
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

  type authors{
    name: String
  }

  type Auth {
    token: ID!
    user: User
  }

`;

module.exports = typeDefs;
