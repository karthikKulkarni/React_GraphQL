import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./App.css";
import Courses from "./Courses";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Hello Apollo</h1>
        <Courses />
      </div>
    </ApolloProvider>
  );
};

export default App;
