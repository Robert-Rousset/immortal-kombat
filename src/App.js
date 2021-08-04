import React, { useState } from "react";
import Header from "./components/Header";
import Battleground from "./components/Battleground";
import "./style.css";

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
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </>
  );
}

export default App;
