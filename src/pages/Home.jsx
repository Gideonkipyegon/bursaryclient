import React from 'react';
import './Home.css';

function Home() {
    return ( <
        div className = 'home' >
        <
        div className = 'homecontainer' >
        <
        h3 style = {
            { textAlign: 'center', fontFamily: 'sans-serif', fontSize: 'medium' }
        } > Education Loan Application < /h3> <
        div className = 'homeimage' >
        <
        img src = "./images/moneybackground1.jpg"
        alt = "car image"
        className = "bg1" / >
        <
        img src = "./images/moneybackground2.jpg"
        alt = "car image"
        className = "bg2" / >
        <
        img src = "./images/moneybackground3.jpg"
        alt = "car image"
        className = "bg3" / >
        <
        img src = "./images/moneybackground.jpg"
        alt = "car image"
        className = "bg4" / > { /* Duplicate images to ensure continuity of animation */ } <
        img src = "./images/moneybackground1.jpg"
        alt = "car image"
        className = "bg1" / >
        <
        img src = "./images/moneybackground2.jpg"
        alt = "car image"
        className = "bg2" / >
        <
        img src = "./images/moneybackground3.jpg"
        alt = "car image"
        className = "bg3" / >
        <
        img src = "./images/moneybackground.jpg"
        alt = "car image"
        className = "bg4" / >
        <
        /div> </div > < /div>
    );
}

export default Home;