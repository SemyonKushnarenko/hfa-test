"use client";

import clsx from "clsx"
import { useMode } from "@/store/jotai";

interface ChangeModeProps {
    resetValues: () => void;
}

const ChangeMode: React.FC<ChangeModeProps> = ({resetValues}) => {
    const [mode, setMode] = useMode();
    const handleSetMode = (mode: 'buy' | 'sell') => {
        setMode(mode);
        resetValues();
    }
    
    return (
        <div className="bg-shark rounded-lg p-1 flex h-15 relative mb-1">
            <div className={
                clsx(
                    'z-1 bg-viking rounded-lg absolute top-0 h-full w-1/2 transition-all scale-[0.95]',
                    mode === 'buy' ? 'left-0' : 'left-[50%]',
                )
            }></div>
            <div 
                onClick={() => handleSetMode('buy')}
                className="relative z-2 flex-1 text-white tracking-[-3%] text-md font-medium flex items-center justify-center">Buy</div>
            <div 
                onClick={() => handleSetMode('sell')}
                className="relative z-2 flex-1 text-white tracking-[-3%] text-md font-medium flex items-center justify-center">Sell</div>
        </div>
    )
}

export default ChangeMode;
