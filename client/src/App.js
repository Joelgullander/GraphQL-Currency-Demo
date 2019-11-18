import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import StartPage from './routes/StartPage';
import AuthPage from './routes/AuthPage';
import ApolloClient from 'apollo-boost';
import './App.css';
import AuthService from './services/AuthService';

const apolloClient = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
});

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => (
            AuthService.hasValidSession() ? (
              <StartPage />
            ) : <AuthPage />
          )} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
