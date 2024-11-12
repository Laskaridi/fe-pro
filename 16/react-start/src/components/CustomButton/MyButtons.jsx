import React from 'react';
import style from './MyButtons.module.css'

function MyButtons(props) {
    const buttonStyle = {
        color: 'white',
        fontSize: '20px',
        backgroundColor: 'blue',
        padding: '10px 30px'
    }
    return (
        <div>
            <button style={buttonStyle}>
                Download examples
            </button>
            {/* <button className={style.custom}>
                Custom Button
            </button> */}
            {/* <button className={`${style.custom} py-2`}>New Custom</button> */}
        </div>
    );
}

export default MyButtons;