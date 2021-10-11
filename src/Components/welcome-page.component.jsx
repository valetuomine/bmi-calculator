import React from 'react';

import './welcome-page.styles.css';

import {
    welcomeText
} from '../Texts/texts.js';

const WelcomePage = () => {
    return(
        <div className='welcome-page'>
            <h1>{welcomeText}</h1>
        </div>
    );
};

export default WelcomePage;