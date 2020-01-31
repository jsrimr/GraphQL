import { GraphQLServer } from 'graphql-yoga'

const server = new GraphQLServer({})
server.start(() => console.log('Server is running on localhost:4000'))
// import resolvers from './schemes/resolvers' // 추가된 코드

// const server = new GraphQLServer({
//   typeDefs: "graphql/scheme.graphql", // 추가된 코드
//   resolvers // 추가된 코드
// })
// server.start(() => console.log('Server is running on localhost:4000'))