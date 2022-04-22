import React, { useEffect } from 'react';
import './App.css';
import Menu from './components/menu';
import AboutMe from './components/about-me';
import Projects from './components/projects';
import Skills from './components/skills';
import Footer from './components/footer';
import profilePic from './assets/image.jpg';

function App() {

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Conrad Hill`;
  });

  return (
      <div className="App">
        <Menu />
        <main>
          <img
              src={profilePic}
              alt="Conrad Hill"
              className="portrait"
          />
          <div>
            <AboutMe />
            <Projects />
            <Skills />
          </div>
        </main>
        <Footer/>
      </div>
  );
}

export default App;
