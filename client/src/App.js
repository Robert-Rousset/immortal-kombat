import React, { useState } from "react";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Header from "./components/Header";
import Profile from "./components/Profile";
import UpdateStats from "./components/UpdateStats";
import GameOver from "./components/GameOver";

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
  const [Class, setClass] = useState("opaque");

  const renderPage = () => {
    if (currentPage === "PlayGame") {
      setTimeout(() => {
        setClass("center");
      }, 1000);
      return (
        <div className={Class}>
          <Profile />
        </div>
      );
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <ApolloProvider client={client}>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <UpdateStats />
        <GameOver />
      </ApolloProvider>
    </>
  );
}

export default App;
