import './App.css';
import Navigation from './customer/Component/Navigation/Navigation';
import HomePage from './customer/Pages/HomePage/HomePage.jsx';
function App() {
  return (
    <div className="fullscreen-layout">
    <div className="header-grow" ><Navigation/></div>
    <div className="grow"><HomePage/></div>
    </div>
  );
}

export default App;   
