import '../App.css';
import AboutHotel from './AboutHotel';
import Header from './Header';
import OtherInformation from './OtherInformation';
import Reviews from './Reviews';
import UsefulLinks from './UsefulLinks';


let getFormatedText = (str) => {
    let number = 0;
    let formatedStr = '';
    while(number < str.length) {
        if(str[number] === "й" || str[number] === "я" || str[number] === "ъ") {
            formatedStr += `<span class="letter">${str[number]}</span>`;
        } else {
            formatedStr += str[number];
        };
        number++;
    };
    return formatedStr;
}

function MainBoard(props) {

    let onNewMassageChange = (e) => {
    let body = e.target.value;
    props.dispatch({
        type: 'UPDATE',
        body: body,
    });
    };

    let onNewMassegeClick = () => {
    if(!props.appState.allInformation.value) return;
    props.dispatch({type: 'SAND'});
    };

  return (
    <div className='MainBoard'>
        <div className='MainBoardOfContent'>
            <div className='MainPartOfContent'>
                <div className='header'>
                    <Header />
                </div>
                <div className='BoardOfMainContent'>
                    <UsefulLinks />
                    <div className='BoardOfAboutOtherReviews'>
                        <div className='BoardOfAboutAndOther'>
                            {/* <AboutHotel /> */}
                            {/* <OtherInformation /> */}
                            <h2 className='MainName'>Translater</h2>
                            <div className='Board'>
                                <textarea
                                    className='TextArea'
                                    onChange={onNewMassageChange}
                                    value={props.appState.allInformation.value}
                                    placeholder='Enter your massage'>
                                </textarea>
                                <button className='Button' onClick={onNewMassegeClick}>Обработать</button>
                            </div>
                            <div className='Red'  dangerouslySetInnerHTML={{ __html: getFormatedText(props.appState.allInformation.arrValue) }}></div>
                        </div>
                        <div>
                            <Reviews />
                        </div>
                    </div>
                </div>
            </div>
            <div className='BoardOfEnd'>
                <div className='privacy'>2014 @ privacydffasf</div>
                <div className='helper'>SUPPORT ● FAQS ● SITEMAP ● HELP</div>
            </div>
        </div>
    </div>
  );
}

export default MainBoard;
