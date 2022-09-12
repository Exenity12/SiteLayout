import './App.css';
import MainBoard from './component/MainBoard.js'

function App(props) {


  return (
    <div className="App">
        <MainBoard appState={props.appState} dispatch={props.dispatch}/>
    </div>
  );
}

export default App;
