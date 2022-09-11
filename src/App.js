import './App.css';
// import MainBoard from './component/MainBoard.js'

function App(props) {

  let MassegesElement = props.appState.allInformation.arrValue.map(m => 
    <div className='word'>
      {m.split('').map((i, index) => <span className={'letter' + index}>{i}</span>)}
    </div>
  );

  const updateNewMassageBody = (body) => {
    return {
      type: 'UPDATE',
      body: body,
    }
  };

  const  sendMassageCreator = () => ({
    type: 'SAND'
  });

  let onNewMassageChange = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewMassageBody(body));
    console.log(props.appState.allInformation.value)
  };

  let onNewMassegeClick = () => {
    props.dispatch(sendMassageCreator());
    console.log(props.appState.allInformation.arrValue)
  };

  return (
    <div className="App">
        <div className='Board'>
          <textarea
            className='TextArea'
            onChange={onNewMassageChange}
            value={props.appState.allInformation.value}
            placeholder='Enter your massage'>
          </textarea>
          <button className='Button' onClick={onNewMassegeClick}>Обработать</button>
        </div>
        <div className='Red'>{MassegesElement}</div>
        {/* <MainBoard /> */}
    </div>
  );
}

export default App;
