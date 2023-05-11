import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';

function App() {
  return (
    <>
     
    <Navbar aboutText='About us'/>
    <div className = 'container'>
    <TextForm heading = 'Enter the text below'/>
    </div>
    
    </>
  );
}

export default App;
