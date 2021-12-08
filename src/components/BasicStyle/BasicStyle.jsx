import React from 'react';
import './BasicStyle.scss';

const BasicStyle = () => {
    return (
        <div className="BasicStyle">
            <h1 className="title">테스트입니당</h1>

            <div className="wrapper">
                <div className="box red"></div>
                <div className="box orange"></div>
                <div className="box yellow"></div>
                <div className="box blue"></div>
            </div>
            
        </div>
    );
};

export default BasicStyle;