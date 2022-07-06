import React from 'react';
import bridge from '../../images/GoldenGateBridge.jpeg';
import "./Home.css";


const Home = () => {
    return (
        <div style={{ backgroundImage:`url(${bridge})`,
            backgroundRepeat:'no-repeat',backgroundSize:'cover', 
            backgroundPosition:'center', height:'950px', width:'100vw' }}>
            <p className='welcome'>HELLO, I'M</p>
            <p className='title'>TIM CHANG</p>
            
        </div>
    )
}

export default Home;