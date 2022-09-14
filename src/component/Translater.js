import '../App.css';
import { React, useState, useEffect } from 'react';

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
    }

    let funct = () => {
        let renderValue = getStorageForRender().map((item, index) => 
            <div
                className='localItem'>
                <div 
                    id={item}
                    onClick={loadThis}
                    className='UsersSave'>
                    Save{index + 1}
                </div>
                <button
                    id={item}
                    className='DeleteSave'
                    onClick={deleteThis}>
                    Delete
                </button>
            </div>
        )
        return renderValue
    }

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
        <div className='PageContent'>
            <div className='SavesUsersText'>
                <div className='SaveItem'>
                    {renderValueState}
                </div>
            </div>
            <div className='UserWork'>
                <h2 className='HeadingPage'>Translater</h2>
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
                <div className='TranslatedText' dangerouslySetInnerHTML={{__html: getFormatedText(allInformation.arrValue)}}></div>
                <button
                    className='ButtonSave'
                    onClick={creatingSave}>
                    Save
                </button>
            </div>
        </div>
    );
}

export default Translater;