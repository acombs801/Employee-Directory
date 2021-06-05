import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import EnhanceTable from "./components/EnhancedTable"

function App() {
  return (
    <div className="App">
      <Header />
      <EnhanceTable />
      <Footer />
    </div>
  );
}

export default App;
