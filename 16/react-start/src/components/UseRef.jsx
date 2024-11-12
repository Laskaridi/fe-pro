import React, {useState, useEffect, useRef} from 'react';

function UseRef(props) {
    let inputEl = useRef(null);
    function changeStyle(){
        if(inputEl.current){
            inputEl.current.style.backgroundColor = 'orange';
            inputEl.current.style.color = 'blue';
            inputEl.current.style.padding = '20px';
        }
    }
    return (
        <div>
            <input type="text" ref={inputEl} />
            <button onClick={changeStyle} className="btn btn-danger">
                Change style
            </button>
        </div>
    );
}

export default UseRef;