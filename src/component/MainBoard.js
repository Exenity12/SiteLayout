import '../App.css';
import AboutHotel from './AboutHotel';
import Header from './Header';
import OtherInformation from './OtherInformation';
import Reviews from './Reviews';
import UsefulLinks from './UsefulLinks';

function MainBoard() {
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
                            <AboutHotel />
                            <OtherInformation />
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
