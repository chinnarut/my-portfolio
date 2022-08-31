import React from 'react';
import {About, Footer, Header, Skills, Testimonials, Works} from "./container/index";
import {Navbar} from "./components/index";
import "./app.scss";

const App = () => {
  return (
    <div className="app">
        <Navbar />
        <Header />
        <About />
        <Works />
        <Skills />
        <Testimonials />
        <Footer />
    </div>
  );
};

export default App;