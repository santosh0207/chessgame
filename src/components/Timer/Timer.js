import React, { useEffect, useState }from 'react';

export default function Timer(props) {
    let startTimer = props.currentDate;

    const calculateTimeLeft = () => {

        const difference =  +new Date() - +startTimer;
        let timeLeft = {};
        
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach(interval => {
        //console.log(timeLeft,"all time")
        if (!timeLeft[interval]) {
            return;
        }
        let TimerString ="";

        if(timeLeft.hours){
            TimerString = timeLeft.hours+" : "+timeLeft.minutes+" : " + timeLeft.seconds; 

        }else if(timeLeft.minutes){
            TimerString = "00 : "+timeLeft.minutes+" : " + timeLeft.seconds;

        }else if(timeLeft.seconds){
            TimerString ="00 : 00 : "+ timeLeft.seconds;
            console.log("---------", timeLeft.seconds)
        }
            
        timerComponents.push(
            <span style={{fontWeight:"bold", fontSize:"20px"}}>
                {TimerString}
            </span>
        );
    });
      
    return (
        <div>
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    )
       
}
