import logo from './logo.svg';
import './App.css';


import Profile from './components/Profile.jsx';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';



const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
