import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import jwt from 'jsonwebtoken'
import fs from 'fs'

import schema from './typedefs'


// PRIVATE and PUBLIC key
const privateKey = fs.readFileSync('./private.key', 'utf8');
const publicKey = fs.readFileSync('./public.key', 'utf8');

const i  = 'Mysoft corp';          // Issuer
const s  = 'some@user.com';        // Subject
const a  = 'http://mysoftcorp.in'; // Audience

// SIGNING OPTIONS
const signOptions = {
  issuer:  i,
  subject:  s,
  audience:  a,
  expiresIn:  "12h",
  algorithm:  "RS256"
};

const verifyOptions = {
  issuer:  i,
  subject:  s,
  audience:  a,
  expiresIn:  "12h",
  algorithm:  ["RS256"]
 };


interface AuthContext {
  token: string
}
interface Context {
  userContext?: AuthContext
}

// todo: verify() npm install jsonwebtoken
const server = new ApolloServer({
    schema,
    context: ({ req, res }) => {
      const context : Context = {};

      // Verify jwt token
      const parts = req.headers.authorization ? req.headers.authorization.split(' ') : [''];
      const token = parts.length === 2 && parts[0].toLowerCase() === 'bearer' ? parts[1] : undefined;
      // context.userContext = token ? jwt.verify(token, publicKey, verifyOptions) : undefined;
      console.log( token ? jwt.verify(token, publicKey, verifyOptions) : null)
      return context;
  }
})

const app = express()
app.post('/login', (req, res) => {
  const token = jwt.sign({}, privateKey, signOptions);
  console.log(token)
  res.send(token)
});
server.applyMiddleware({ app })

// The `listen` method launches a web server.
app.listen({ port: 4000 }, () =>
    console.log(
        `🚀 Server ready at http://localhost:${4000}${server.graphqlPath}`
    )
)
