import './App.css';
import './styles.css';
import Main from './components/Main'; 
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Main/>
    </BrowserRouter>
  );
}

export default App;
