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

const customFetch = (uri, options) => {
  return fetch(uri, options)
  .then(response => {
    if (response.status === 401) {  // or handle 400 errors
      return Promise.reject(response.status);
    }
    return response;
  });
}

const apolloClient = new ApolloClient({
    uri: '/graphql',
    fetch: customFetch,
    request: async operation => {
      // Get JWT token from local storage
      const token = AuthService.getAuthHeader()

      // Pass token to headers
      operation.setContext({
        headers: {
          Authorization: token
        }
      })
    },
    onError: ({ networkError }) => {
      if(networkError === 401) {
          AuthService.clearSession();
          window.location.reload()
        }
    }
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
