import React from 'react';
import PropTypes from 'prop-types';

TextComponent.propTypes ={
    title:PropTypes.string,
    text:PropTypes.string
}
// TextComponent.defaultProps ={
//     title:'No info about title',
//     text:'No text info'
// }

function TextComponent(props) {
    return (
        <div>
            <h1 className="text-body-emphasis">
                {props.title}
            </h1>
            <p className="fs-5 col-md-8">
                {props.text}
                </p>
        </div>
    );
}

export default TextComponent;