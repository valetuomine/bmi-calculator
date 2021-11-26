import React from 'react';

import './welcome-page.styles.css';

import {
    welcomeText
} from '../Texts/texts.js';

const WelcomePage = () => {
    return(
        <div className='welcome-page'>
            <h1>{welcomeText}</h1>
            <h2>Testi</h2>
        </div>
    );
};

export default WelcomePage;