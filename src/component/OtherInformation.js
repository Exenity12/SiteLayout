import '../App.css';

function OtherInformation() {

    // let arr = [
    //     {
    //         img: "https://avatars.mds.yandex.net/i?id=12ccc4faa4949208bf29d25daec98e60-4513202-images-thumbs&n=13",
    //         main: "НЕ МНОГО ТЕКСТА",
    //         smallOne: "ОЧень много текста маленькими буквамитекста тут вообще очень много и еще больше Управление громкостью наушников осуществляется ",
    //         smallTwo: "посредством встроенного в гарнитуру Meta Quest 2 регулятора."
    //     },
    //     {
    //         img: "https://lovesvet.ru/upload/iblock/16b/16b9af227b645e144be0e73f836e4099.jpg",
    //         main: "НЕ МНОГО ТЕКСТА",
    //         smallOne: "ОЧень много текста маленькими буквамитекста тут вообще очень много и еще больше Управление громкостью наушников осуществляется ",
    //         smallTwo: "посредством встроенного в гарнитуру Meta Quest 2 регулятора."
    //     },
    //     {
    //         img: "https://www.freepngimg.com/thumb/email_marketing/140740-picture-symbol-email-png-image-high-quality.png",
    //         main: "НЕ МНОГО ТЕКСТА",
    //         smallOne: "ОЧень много текста маленькими буквамитекста тут вообще очень много и еще больше Управление громкостью наушников осуществляется ",
    //         smallTwo: "посредством встроенного в гарнитуру Meta Quest 2 регулятора."
    //     },
    //     {
    //         img: "https://plus-clean.ru/wp-content/uploads/2021/06/em3kkwtweaa3vtd.jpg",
    //         main: "НЕ МНОГО ТЕКСТА",
    //         smallOne: "ОЧень много текста маленькими буквамитекста тут вообще очень много и еще больше Управление громкостью наушников осуществляется ",
    //         smallTwo: "посредством встроенного в гарнитуру Meta Quest 2 регулятора."
    //     },
    // ]


  return (
    <div className='OtherInformation'>
        <div className='OtherInformationMainName'>DID YOU NOW?</div>
        <div className='OtherInformationMainContentList'>
            <div className='OtherInformationMainContentItem'>
                <div>
                    <img src="https://avatars.mds.yandex.net/i?id=ec7aedee4c8f463108838bd3672e6d1b-5888854-images-thumbs&n=13" alt="alt" className='OtherInformationMainContentItemImg'></img>
                </div>
                <div className='OtherInformationMainContentItemTextMain'>
                    <div className='OtherInformationMainContentItemText'>
                        "НЕ МНОГО ТЕКСТА"
                    </div>
                    <div className='OtherInformationMainContentItemTextSmall'>
                        "ОЧень много текста маленькими буквамитекста тут вообще очень много и еще больше Управление громкостью наушников осуществляется
                        посредством встроенного в гарнитуру Meta Quest 2 регулятора.
                    </div>
                </div>
            </div>

            <div className='OtherInformationMainContentItem'>
                <div>
                    <img src="https://avatars.mds.yandex.net/i?id=b76afc0ca8f82767cb43cd1e5cd9d8fe-5869703-images-thumbs&n=13" alt="alt" className='OtherInformationMainContentItemImg'></img>
                </div>
                <div className='OtherInformationMainContentItemTextMain'>
                    <div className='OtherInformationMainContentItemText'>
                        "НЕ МНОГО ТЕКСТА"
                    </div>
                    <div className='OtherInformationMainContentItemTextSmall'>
                        "ОЧень много текста маленькими буквамитекста тут вообще очень много и еще больше Управление громкостью наушников осуществляется
                        посредством встроенного в гарнитуру Meta Quest 2 регулятора.
                    </div>
                </div>
            </div>

            <div className='OtherInformationMainContentItem'>
                <div>
                    <img src="https://www.freepngimg.com/thumb/email_marketing/140740-picture-symbol-email-png-image-high-quality.png" alt="alt" className='OtherInformationMainContentItemImg'></img>
                </div>
                <div className='OtherInformationMainContentItemTextMain'>
                    <div className='OtherInformationMainContentItemText'>
                        "НЕ МНОГО ТЕКСТА"
                    </div>
                    <div className='OtherInformationMainContentItemTextSmall'>
                        "ОЧень много текста маленькими буквамитекста тут вообще очень много и еще больше Управление громкостью наушников осуществляется
                        посредством встроенного в гарнитуру Meta Quest 2 регулятора.
                    </div>
                </div>
            </div>

            <div className='OtherInformationMainContentItem'>
                <div>
                    <img src="https://plus-clean.ru/wp-content/uploads/2021/06/em3kkwtweaa3vtd.jpg" alt="alt" className='OtherInformationMainContentItemImg'></img>
                </div>
                <div className='OtherInformationMainContentItemTextMain'>
                    <div className='OtherInformationMainContentItemText'>
                        "НЕ МНОГО ТЕКСТА"
                    </div>
                    <div className='OtherInformationMainContentItemTextSmall'>
                        "ОЧень много текста маленькими буквамитекста тут вообще очень много и еще больше Управление громкостью наушников осуществляется
                        посредством встроенного в гарнитуру Meta Quest 2 регулятора.
                    </div>
                </div>
            </div>


            {/* {arr.map(item => {
                <div className='OtherInformationMainContentItem'>
                    <div>
                        <img src={item.img} className='OtherInformationMainContentItemImg'></img>
                    </div>
                    <div className='OtherInformationMainContentItemTextMain'>
                        <div className='OtherInformationMainContentItemText'>
                            {item.main}
                        </div>
                        <div className='OtherInformationMainContentItemTextSmall'>
                            {item.smallOne}
                            {item.smallTwo}
                        </div>
                    </div>
                </div>
            })} */}
        </div>
    </div>
  );
}

export default OtherInformation;