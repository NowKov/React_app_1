import logo from './logo.svg';
import './App.css';


import Profile from './components/Profile/Profile.jsx';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';



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
