import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header.js'
import UsefulLinks from './component/UsefulLinks.js'
import Translater from './component/Translater.js'
import Footer from './component/Footer.js'
import MainPage from './component/MainPage';
import About from './component/About';
import AboutMe from './component/AboutMe';


function App(props) {

  return (
    <div className="App-Background">
      <div className='App'>
        <Header />
        <UsefulLinks />
        <div className='PageContent'>
          <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/RusArmTransform" element={<Translater appState={props.appState} dispatch={props.dispatch}/>}/>
            <Route path="/About" element={<About />}/>
            <Route path="/AboutMe" element={<AboutMe />}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;