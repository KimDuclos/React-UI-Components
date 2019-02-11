import React from 'react';
import './Header.css';

//********COMPONENTS********//

//****HEADER****//

// MVP - <ImageThumbnail />
const ImageThumbnail = () => {
    return (
        <div className="headerImage">
            <img src="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png"></img>
        </div>
    );
}


// MVP - <HeaderTitle />
const HeaderTitle = () => {
    return (
        <div className="headTitle">
            <h4>Lambda School</h4><p>@LambdaSchool &middot 26 Jan</p>
        </div>
    );
}


// MVP - <HeaderContent />
const HeaderContent = () => {
    return (
        <div className="HeadContent">
            <p>Let's learn React by building simple interfaces with components.  Don't try to
            overthink it, just keep it simple and have fun.  Once you feel comfortable using
            components you are well on your way to masterting React!
            </p>
        </div>
    );
}

//***CARD****//

const CardBanner = () => {
    return (
        <div className="CardBan">
            <img src=" https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png"></img>
        </div>
    );
}

const CardContent = () => {
    return (
        <a href="http://www.reactjs.org" ><div className="CardCont">
            <h3>Get Started with React</h3>
            <p>React makes it painless to create interactive UIs. Design simple views for
                each state in your application.
            </p>
            <p>reactjs.org</p>
        </div></a>
    );
}



//*********CONTAINERS***********//

// MVP - <HeaderContainer />
const HeaderContainer = () => {
    return (
        <div className="head">
            <ImageThumbnail />
            <HeaderTitle />
            <HeaderContent />
        </div>
    );
}

// MVP - Card Container
const CardContainer = () => {
    return (
        <div className="card">
            <CardBanner />
            <CardContent />
        </div>
    );
}



console.log(<HeaderContainer />);
ReactDom.render(<HeaderContainer />, rootDiv);