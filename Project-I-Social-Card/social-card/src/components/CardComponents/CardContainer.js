import React from 'react';
import './Card.css';

import CardBanner from './CardBanner';
import CardContent from './CardContent';


const CardContainer = () => {
    return (
        // MVP linked <CardContainer /> to ReactJS site
        <a href="http://www.reactjs.org">" <div className="card">
            <CardBanner />
            <CardContent />
        </div></a>
    )
}

export default CardContainer;