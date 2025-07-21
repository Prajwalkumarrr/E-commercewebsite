import './App.css';
import Navigation from './customer/component/navigation/Navbar';
import MainCarousel from './customer/component/navigation/HomeCarousel/Carousel';
import HomePage from './customer/component/navigation/Pages/HomePage';
function App() {
  return (
    <div className="fullscreen-layout">
      <header className="header-grow">
        <Navigation />
        <MainCarousel />
        <HomePage />
      </header>
    </div>
  );
}

export default App;
