
import './App.css';

import Navbar from './components/nav/Navbar.jsx'
import Footer from './components/Footer'
import Ourproducts from './components/products/Ourproducts'
import Resources from './components/resources/Resources'
import Home from './components/Home'



function App() {
  return (
    <>
<Navbar/>
    <Home/>
    <Ourproducts/>
    <Resources/>
<Footer/>


</>
  );
}

export default App;
