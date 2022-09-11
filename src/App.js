import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Edit from './components/edit/Edit';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar/>
        <Edit/>
      </div>
    </>
  );
}

export default App;
