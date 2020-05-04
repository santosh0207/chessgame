import React from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Layout from './components/Layout/Layout';
window.$gameObject_allMove = {
  game:[],
  currentPlayer:'white',
  winner:'',
  kingOnCheck:false
}
function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
