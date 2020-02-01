import React, { Component } from 'react';
import './App.css';
import BookContextProvider from "./context/BookContext";
import Navbar from "./components/Navbar";
import NewBookForm from "./components/NewBookForm";
import BookList from "./components/BookList";

class App extends Component {
  render() {
    return (
      <div className="App">
          <BookContextProvider>
              <Navbar />
              <BookList />
              <NewBookForm />
          </BookContextProvider>
      </div>
    );
  }
}

export default App;
