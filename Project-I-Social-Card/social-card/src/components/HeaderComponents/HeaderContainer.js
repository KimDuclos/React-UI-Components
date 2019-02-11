import React from 'react';
import './Header.css';


const HeaderContainer = () => {
    return (
        <div className="head">
            <ImageThumbnail />
            <HeaderTitle />
            <HeaderContent />
        </div>
    );
}



ReactDom.render(<HeaderContainer />, rootDiv);
ReactDom.render(<CardContainer />, rootDiv);