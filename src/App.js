import React from 'react';
import { About, Header, Work, Skills, Footer, Stats } from './container';
import { Navbar } from "./components";
import "./App.scss"

function App() {
    return (
        <div className='app'>
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            {/* <Testimonial /> */}
            <Stats />
            <Footer />
        </div>
    )
}

export default App;
