// import { useState } from "react";
import "./App.css";
import "../dist/output.css";
import Header from "./Header";
import Hero from "./Hero";
import TopBar from "./TopBar";
function App() {
  return (
    <div className="App">
      <Header />
      <TopBar />
      <Hero />
    </div>
  );
}

export default App;
