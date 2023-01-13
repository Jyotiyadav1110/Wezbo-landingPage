import Banner1 from "./Components/Banner/Banner1";
import Banner2 from "./Components/Banner/Banner2";
import Banner3 from "./Components/Banner/Banner3";
import Banner4 from "./Components/Banner/Banner4";
import Banner5 from "./Components/Banner/Banner5";
import Banner6 from "./Components/Banner/Banner6";
import Banner7 from "./Components/Banner/Banner7";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import './App.css';
// import logo from './logo.svg';
function App() {
  return (
    <div className="app">
      <Header/>
      <Banner1/>
      <Banner2/>
      <Banner3/>
      <Banner4/>
      <Banner5/>
      <Banner6/>
      <Banner7/>
      <Footer/>
    </div>
  );
}

export default App;
