import React from 'react';
import { string } from 'prop-types';
import './style.css';

const Example = ({ text }) => {
    return (
        <div className="example-component">
            <span>{text}</span>
        </div>
    );
};

Example.propTypes = {
    text : string
};

export default Example;
