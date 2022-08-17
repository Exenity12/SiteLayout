import '../App.css';
import AboutHotel from './AboutHotel';
import Logo from './Logo';
import OtherInformation from './OtherInformation';
import Reviews from './Reviews';
import Search from './Search';
import UsefulLinks from './UsefulLinks';

function MainBoard() {
  return (
    <div className='MainBoard'>
        <div className='MainBoardOfContent'>
            <div className='MainPartOfContent'>
                <Logo />
                <Search />
                <UsefulLinks />
                <AboutHotel />
                <OtherInformation />
                <Reviews />
                <img className='SearchItemImgTwitter'  alt="alt" src="https://igorzuevich.com/wp-content/uploads/2015/03/Twitter.png"></img>
                <img className='SearchItemImgFaceBook'  alt="alt" src="https://www.itrn.ru/etc/images/915/5cd48fc5ad951.png"></img>
                <img className='SearchItemImgGoogle'  alt="alt" src="https://img2.freepng.ru/20180607/poh/kisspng-google-logo-computer-icons-mei-qi-5b19042809dd50.8354117915283661200404.jpg"></img>
                <div className='privacy'>2014 @ privacydffasf</div>
                <div className='helper'>SUPPORT ● FAQS ● SITEMAP ● HELP</div>
            </div>
        </div>
    </div>
  );
}

export default MainBoard;
