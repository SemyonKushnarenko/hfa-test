"use client";

import { useDate } from "@/store/jotai";
import moment from "moment";
import { useEffect, useState } from "react";

const Counter = () => {
    const [targetDate] = useDate();
    const [timeLeft, setTimeLeft] = useState<string>("00:00:00");
    const [timeLeftText, setTimeLeftText] = useState<string>("Before the start");

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = moment();
            const target = moment(targetDate);
            const difference = target.diff(now);
            
            if (difference <= 0) {
                setTimeLeftText("Already started");
                return "00:00:00";
            }
            
            const duration = moment.duration(difference);
            const hours = Math.floor(duration.asHours());
            const minutes = duration.minutes();
            const seconds = duration.seconds();
            
            return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="rounded-2xl bg-shark bg-[url(/counter/bg.png)] bg-cover bg-center py-16 flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col justify-between items-center gap-[6px] text-base font-medium leading-none">
                <span>{timeLeftText}</span>
                <span className="text-viking text-[32px] font-bold">{timeLeft}</span>
            </div>
        </div>
    )
}   

export default Counter;
