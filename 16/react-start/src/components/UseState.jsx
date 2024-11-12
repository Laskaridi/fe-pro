import React, {useState} from 'react';

function UseState(props) {
    let [counterValue, setCounterValue] = useState(0);
    function upValue(){
        setCounterValue(counterValue=>counterValue+1);
    }
    function downValue(){
        setCounterValue(counterValue-1);
    }
    let [userName, setUserName] = useState('');
    function changeUserName(e){
        setUserName(e.target.value)
    }
    let [showState, setShowState] = useState(false);
    function changeShowState(){
        setShowState(showState=>!showState);
    }
    return (
        <div>
            <button className='btn' onClick={changeShowState}>
                Search
            </button>
            {showState ? <input type='text' placeholder='Search'></input>:null}
            <input 
            type="text" 
            placeholder='Type your name'
            value={userName}
            onChange={(e)=>changeUserName(e)} />
            <p>
                {userName}
            </p>
            <button className="btn btn-secondary" onClick={upValue}>
                Counter
            </button>
            <p>
                {counterValue>0 ? counterValue:'0'}
            </p>
            <button className="btn btn-secondary" onClick={downValue}>
                Timer
            </button>

        </div>
    );
}

export default UseState;