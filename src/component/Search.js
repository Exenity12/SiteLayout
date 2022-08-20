import '../App.css';

function Search() {
  return (
    <div className='Search'>
        <div className='BoardLogoLinks'>
            <img className='SearchItemImgTwitter'  alt="alt" src="https://igorzuevich.com/wp-content/uploads/2015/03/Twitter.png"></img>
            <img className='SearchItemImgFaceBook'  alt="alt" src="https://www.itrn.ru/etc/images/915/5cd48fc5ad951.png"></img>
            <img className='SearchItemImgGoogle'  alt="alt" src="https://img2.freepng.ru/20180607/poh/kisspng-google-logo-computer-icons-mei-qi-5b19042809dd50.8354117915283661200404.jpg"></img>
        </div>
        <div className='BorderSearchItem'>
            <div className='SearchItem'>
                <input className='SearchItemInput' />
                <img className='SearchItemImg'  alt="alt" src="https://avatars.mds.yandex.net/i?id=2a00000179f0e08bd9e6095b051076a36f11-4642926-images-thumbs&n=13"></img>
            </div>
        </div>
    </div>
  );
}

export default Search;
