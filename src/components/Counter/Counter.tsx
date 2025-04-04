"use client";

import { useDate } from "@/store/jotai";
import { useCountdown } from "@/shared/hooks/use-countdown";
import { memo } from "react";

const Counter = () => {
    const [targetDate] = useDate();
    const { timeLeft, timeLeftText } = useCountdown(targetDate);

    return (
        <div className="rounded-2xl bg-shark bg-[url(/counter/bg.png)] bg-cover bg-center py-16 flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col justify-between items-center gap-[6px] text-base font-medium leading-none">
                <span>{timeLeftText}</span>
                <span className="text-viking text-[32px] font-bold">{timeLeft}</span>
            </div>
        </div>
    );
}   

export default memo(Counter);
