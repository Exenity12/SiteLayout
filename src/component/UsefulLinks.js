import '../App.css';
import { NavLink } from 'react-router-dom';

function UsefulLinks() {
  return (
    <div className="UsefulLinksMain">
        <ul className="UsefulLinks">
            <div className='UsefulLinksItem'></div>
            <div className='UsefulLinksItemCrushing'>|</div>
            <NavLink to="/" className='UsefulLinksItem'>Главная страница</NavLink>
            <div className='UsefulLinksItemCrushing'>|</div>
            <NavLink to="/RusArmTransform" className='UsefulLinksItem'>Рус-Арм трансформация</NavLink>
            <div className='UsefulLinksItemCrushing'>|</div>
            <NavLink to="/About" className='UsefulLinksItem'>О сайте</NavLink>
            <div className='UsefulLinksItemCrushing'>|</div>
            <NavLink to="/AboutMe" className='UsefulLinksItem'>О мне</NavLink>
            <div className='UsefulLinksItemCrushing'>|</div>
            <div className='UsefulLinksItem'></div>
        </ul>
    </div>
  );
}

export default UsefulLinks;
