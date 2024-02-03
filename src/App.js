import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CoverPage from './components/CoverPage';
import ViewHotel from './components/ViewHotel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <CoverPage/>
      <ViewHotel/>
      <Footer/>
    </div>
  );
}

export default App;
