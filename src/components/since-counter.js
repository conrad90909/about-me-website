import React, { useEffect, useState } from 'react';

function SinceCounter(props) {

    const[since, setSince] = useState(0);

    // function refreshCounter() {
    //     setSinceDate(new Date());
    // }

    useEffect(() => {
        const timerId = setInterval(updateSince, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    });

    
    function updateSince(){
        let START_DATE = new Date(props.sinceDate);
        let intlNumberFormatter = new Intl.NumberFormat("en-GB");
        
        const now = new Date();
        const difference = Math.floor(
            (now.getTime() - START_DATE.getTime()) / 1000
        );
        setSince( intlNumberFormatter.format(difference) );
    };

    return (
        <b>
            Fun fact,  I've been a programmer for {since} seconds!
        </b>
    );

}
export default SinceCounter;
