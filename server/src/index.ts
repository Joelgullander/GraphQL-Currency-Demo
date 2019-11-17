import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import schema from './typedefs'

interface AuthContext {
  token: string
}
interface Context {
  userContext?: AuthContext
}

// todo: verify() npm install jsonwebtoken
const server = new ApolloServer({
    schema,
  //   context: ({ req, res }) => {
  //     const context : Context = {};

  //     // Verify jwt token
  //     const parts = req.headers.authorization ? req.headers.authorization.split(' ') : [''];
  //     const token = parts.length === 2 && parts[0].toLowerCase() === 'bearer' ? parts[1] : undefined;
  //     context.userContext = token ? verify(token) : undefined;

  //     return context;
  // }
})

const app = express()
server.applyMiddleware({ app })

// The `listen` method launches a web server.
app.listen({ port: 4000 }, () =>
    console.log(
        `🚀 Server ready at http://localhost:${4000}${server.graphqlPath}`
    )
)
