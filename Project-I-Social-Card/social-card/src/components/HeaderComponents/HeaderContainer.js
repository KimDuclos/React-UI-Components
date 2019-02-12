import React from 'react';
import './Header.css';

import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';


const HeaderContainer = () => {
    return (
        <div className="head">
             <div className="headIcon">
                <ImageThumbnail />
             </div>
            <div className="headContent">
                <HeaderTitle />
                <HeaderContent />   
            </div>
        </div>
    )
}

export default HeaderContainer;