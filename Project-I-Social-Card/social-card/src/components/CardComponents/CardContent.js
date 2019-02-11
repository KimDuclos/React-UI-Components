import React from 'react';
import './Card.css';


const CardContent = () => {
    return (
        <div className="CardCont">
            <h3 class="CardTitle">Get Started with React</h3>
            <p class="CardParagraph">React makes it painless to create interactive UIs. Design simple views for
                each state in your application.
            </p>
            <p class="reactLink">reactjs.org</p>
        </div>
    );
}

export default CardContent;