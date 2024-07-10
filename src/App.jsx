import React from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
// import NewsItems from "./components/NewsItems";
function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <NewsBoard />
      </div>
    </>
  );
}

export default App;
