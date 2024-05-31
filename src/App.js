import logo from './logo.svg';
import './App.css';

import Profile from './components/Profile.jsx';
import Header from './components/Header.jsx';
import Technologies from './components/Technologies.jsx';



const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Technologies />
      <Profile />
    </div>
  );
}

export default App;
