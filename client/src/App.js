import React, { useState } from "react";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Header from "./components/Header";
import Battleground from "./components/Battleground";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [currentPage, setCurrentPage] = useState();

  const renderPage = () => {
    if (currentPage === "PlayGame") {
      return (
        <div className="center">
          <Battleground />
        </div>
      );
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <>
      <ApolloProvider client={client}>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </ApolloProvider>
    </>
  );
}

export default App;
