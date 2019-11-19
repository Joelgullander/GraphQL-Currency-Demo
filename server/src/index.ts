import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import jwt from 'jsonwebtoken'
import uuidGen from 'uuid/v1';
import schema from './typedefs';
import { authMiddleware, apiLimiterMiddleware } from './middlewares';
import config from './config';
const { issuer, subject, audience, jwtSecret } = config;

// SIGNING OPTIONS
const signOptions = {
  issuer,
  subject,
  audience,
  expiresIn:  "12h",
  algorithm:  "HS256"
};

const server = new ApolloServer({
    schema
})

const app = express()
app.post('/login', (req, res) => {
  try {
    const token = jwt.sign({ id: uuidGen() }, jwtSecret, signOptions);
    res.send(token)
  } catch (e) {
    console.error(e)
    res.sendStatus(500)
  }
});

app.use(authMiddleware);
app.use(apiLimiterMiddleware)
server.applyMiddleware({ app })

// The `listen` method launches a web server.
app.listen({ port: 4000 }, () =>
    console.log(
        `🚀 Server ready at http://localhost:${4000}${server.graphqlPath}`
    )
)
