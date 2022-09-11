import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Edit from './components/edit/Edit';
import { useState } from 'react';

function App() {
  // Functional State is defined here
  const [name, setName] = useState('Store Name')
  return (
    <>
      <Navbar name={name} />
      <div className="container">
        <Sidebar name={name}/>
        <Edit name={name} setName={setName}/>
      </div>
    </>
  );
}

export default App;
