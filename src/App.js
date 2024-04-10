import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import All from './sections/all/all';
import Bags from './sections/bags/bags';
import Belts from './sections/belts/belts';
import Accessories from './sections/accessories/accessories';
import Footer from './components/footer/Footer';
import BackToTopButton from './components/backToTopButton/BackToTopButton';



function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path='' element={<All />} />
        <Route path='all' element={<All />} />
        <Route path='bags' element={<Bags />} />
        <Route path='belts' element={<Belts />} />
        <Route path='accessories' element={<Accessories />} />
      </Routes>
      <Footer />
      <BackToTopButton />
    </>
  );
}

export default App;
