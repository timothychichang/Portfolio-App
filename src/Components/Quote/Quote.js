import React, { useState } from 'react';


const Quote = () => {

    let [responseObj, setResponseObj] = useState({});

    function getQuote() {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c90dc2044fmsh4cb2e3ea3a7fb72p1a848djsnda6d691ef7d2',
                'X-RapidAPI-Host': 'inspiring-quotes.p.rapidapi.com'
            }
        };
        
        fetch('https://inspiring-quotes.p.rapidapi.com/random', options)
            .then(response => response.json())
            .then(response => setResponseObj(response))
            .catch(err => console.error(err));

    }

    return (
        <div onload={getQuote}>
            <p>{responseObj.quote}</p>
        </div>
    )

}

export default Quote;