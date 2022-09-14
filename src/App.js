import { React } from 'react';
import './App.css';
import Header from './component/Header.js'
import UsefulLinks from './component/UsefulLinks.js'
import Translater from './component/Translater.js'


function App(props) {

  return (
    <div className="App">
      <Header />
      <UsefulLinks />
      <Translater appState={props.appState} dispatch={props.dispatch}/>
    </div>
  );
}

export default App;
