import React, { useEffect, useState } from "react";

const Stopwatch = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        } else if (!isRunning && seconds !== 0) {
            clearInterval(intervalId);
        }
        return () => clearInterval(intervalId);
    }, [isRunning, seconds]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainSeconds = seconds % 60;
        return `${minutes}:${remainSeconds < 10 ? "0" : ""}${remainSeconds}`;
    };

    const handleStartStop = () => {
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    return (
        <div>
            <h1>Stopwatch</h1>
            <p>Time: {formatTime(seconds)}</p>
            <button onClick={handleStartStop}>
                {isRunning ? "Stop" : "Start"}
            </button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Stopwatch;