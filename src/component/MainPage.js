import '../App.css';

function MainPage() {
  return (
    <div className='MainPage'>
      <div className='ExamplesAbout'>
        <div className='ExamplesAboutTextBlock'>
          <div className='ExamplesAboutTextName'>Это сайт позволяет облегчить обучение армянского языка и не я вляется точным переводом.</div>
          <div className='ExamplesAboutTextItem'>
            Сайт трансформирует русский язык в "подобие" армянского и позволяет, на начальных этапах обучения, легче
            начать в нем разбираться. Армянский же, в свою очередь, он трансформирует так, что бы его было легче читать.
          </div>
        </div>
      </div>
      <div className='Examples'>
        <div className='ExamplesRus'>
          <div className='ExamplesAboutTextItem'>Ниже приведены примеры известных пословиц.</div>
          <div className='ExamplesRusItem'>Копейка рубл<span class="letter">ь</span> бережет</div>
          <div className='ExamplesRusItem'>В тихом омуте черти водятс<span class="letter">я</span></div>
          <div className='ExamplesRusItem'>Дуракам закон не писан</div>
          <div className='ExamplesRusItem'>Не буди лихо, пока оно тихо</div>
          <div className='ExamplesRusItem'>Друг познаетс<span class="letter">я</span> в беде</div>
        </div>
        <div className='ExamplesArm'>
          <div className='ExamplesAboutTextItem'>Ниже на армянском приведены числа от 1 до 10, а так же "природа"</div>
          <div className='ExamplesArmItem'>1 - ՄԵԿ, 2 - ԵՐԿՈՒ, 3 - ԵՐԵՔ, 4 - ՉՈՐՍ, 5 - ՀԻՆԳ, 6 - ՎԵՑ, 7 - ՅՈԹ, 8 - ՈՒԹ, 9 - ԻՆԸ, 10 - ՏԱՍԸ</div>
          <div className='ExamplesArmItem'>ОГОНЬ - ԿՐԱԿ, ВОДА - ՋՈՒՐ, ЗЕМЛЯ - ՀՈՂ, ВОЗДУХ - ՕԴ, ВЕТЕР - ՔԱՄԻ, ДЕРЕВО - ԾԱՌ</div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
