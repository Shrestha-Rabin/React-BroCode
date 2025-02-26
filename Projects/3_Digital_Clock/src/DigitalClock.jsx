import React, {useState, useEffect} from "react";

function DigitalClock () {

    const [TimeRanges, setTime] = useState(new Date());

    useEffect(() => {
        // set date to new date in every 1000ms ie, 1 sec
        // in simple updating time in every second
        const intervalId = setInterval(() => {
            setTime(new Date());
        },1000);

        // this is for clean up code
        // when this component unmounts, do the following
        // we are freeing up the resources
        return () => {
            clearInterval(intervalId);
        }

    }, []);


    function formatTime() {
        let hours = TimeRanges.getHours();
        const minutes = TimeRanges.getMinutes();
        const seconds = TimeRanges.getSeconds();

        const meridiem = hours >= 12 ? "PM" : "AM"

        // if the value is 0 then return 12
        hours = hours % 12 || 12;

        // adding 0 in front
        // const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        // const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

        // 👆 method is alternative of the formattednumber()

        return `${formattedNumber(hours)}:${formattedNumber(minutes)}:${formattedNumber(seconds)} ${meridiem}`;
    }

    function formattedNumber (number) {
        return (number < 10 ? "0" : "") + number;
    }


    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default DigitalClock