import '../App.css';
import { React, useState } from 'react';

let getFormatedText = (str) => {
    let number = 0;
    let formatedStr = '';

    while(number < str.length) {
        if(str[number] === "я" || str[number] === "ъ" || str[number] === "ё" || str[number] === "ю" || str[number] === "ь") {
            formatedStr += `<span class="letter">${str[number]}</span>`;
        } else {
            formatedStr += str[number];
        };
        number++;
    };
    return formatedStr;
};

let getStorageForRender = () => {
    let requiredValues = [];
    for(let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
          continue;
        }
        requiredValues.push(key);
    }
    console.log(requiredValues.sort())
    return requiredValues
};

let getShortString = (string) => {
    let str = ""
    let itemNumber = 0;
    let stringNumber = string.length;
    let maxNumber = 20;
    while(itemNumber < stringNumber && itemNumber < maxNumber) {
        if(string[itemNumber] === "<") {
            while(string[itemNumber] !== ">") {
                itemNumber++;
                stringNumber++;
                maxNumber++;
            };
            itemNumber++;
            stringNumber++;
            maxNumber++;
        };
        str += string[itemNumber];
        itemNumber++;
    }
    if(string.length > maxNumber) {
        str += "..."
    };
    console.log(str)
    return str;
}

function Translater(props) {

    let deleteThis = (e) => {
        console.log(e.target.id)
        localStorage.removeItem(e.target.id)
        setRenderValueState(funct())
    };

    let creatingSave = () => {
        if(!allInformation.arrValue) return;
        localStorage.setItem(localStorage.length, getFormatedText(allInformation.arrValue))
        setRenderValueState(funct())
    };

    let loadThis = (e) => {
        props.dispatch({
            type: 'LOAD',
            body: localStorage[e.target.id],
        });
    };

    let funct = () => {
        let renderValue = getStorageForRender().map((item, index) => 
            <div
                className='localItem'>
                <div 
                    id={item}
                    onClick={loadThis}
                    className='UsersSave'>
                    Сохранение{index + 1}
                </div>
                <div
                    dangerouslySetInnerHTML={{__html: getShortString(localStorage.getItem(item))}}
                    className="saveText"
                    ></div>
                <button
                    id={item}
                    className='DeleteSave'
                    onClick={deleteThis}>
                    Delete
                </button>
            </div>
        )
        return renderValue;
    };

    const [renderValueState, setRenderValueState] = useState(funct());
    const { appState } = props;
    const { allInformation } = appState;


    let onNewMassageChange = (e) => {
        let body = e.target.value;
        props.dispatch({
            type: 'UPDATE',
            body: body,
        });
    };

    let onNewMassegeClick = () => {
        if(!allInformation.value) return;
        props.dispatch({type: 'SAND'});
    };
    

    return (
        <div className='ContentTranslate'>
            <div className='UserWork'>
                <h2 className='HeadingPage'>Transform Rus-Arm</h2>
                <div className='CustomActions'>
                    <textarea
                        className='UserInput'
                        onChange={onNewMassageChange}
                        value={allInformation.value}
                        placeholder='Enter your massage'>
                    </textarea>
                    <button
                        className='UserClick'
                        onClick={onNewMassegeClick}>
                        Обработать
                    </button>
                </div>
                <div className='SaveItem'>
                    {renderValueState}
                </div>
                <div className='textOutputAndSaving'>
                    <div className='TranslatedTextRusArm' dangerouslySetInnerHTML={{__html: getFormatedText(allInformation.arrValue)}}></div>
                    <button
                        className='ButtonSave'
                        onClick={creatingSave}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Translater;