import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link,} from "react-router-dom";
import Home from './pages/Home';
import Property from './pages/Property';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

ReactDOM.render(

  <React.StrictMode>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/property" element={<Property />} />
              <Route path=":id" element={<Property />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        <Footer />
      </BrowserRouter>
  </React.StrictMode>,

document.getElementById('root')
)