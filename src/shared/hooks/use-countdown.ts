"use client";

import { useCallback, useEffect, useState } from "react";
import moment from "moment";

interface CountdownResult {
  timeLeft: string;
  timeLeftText: string;
  isExpired: boolean;
}

export const useCountdown = (targetDate: Date): CountdownResult => {
  const [timeLeft, setTimeLeft] = useState<string>("00:00:00");
  const [timeLeftText, setTimeLeftText] = useState<string>("Before the start");
  const [isExpired, setIsExpired] = useState<boolean>(false);

  const calculateTimeLeft = useCallback(() => {
    const now = moment();
    const target = moment(targetDate);
    const difference = target.diff(now);
    
    if (difference <= 0) {
      setTimeLeftText("Already started");
      setIsExpired(true);
      return "00:00:00";
    }
    
    const duration = moment.duration(difference);
    const hours = Math.floor(duration.asHours());
    const minutes = duration.minutes();
    const seconds = duration.seconds();
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, [targetDate]);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return { timeLeft, timeLeftText, isExpired };
}; 