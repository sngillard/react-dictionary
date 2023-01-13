import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="delightful" />
        </main>
        <footer className="text-center">
          {" "}
          <small>Coded by Sarah Gillard</small>
        </footer>
      </div>
    </div>
  );
}
