"use client";

import useCurrency from "@/shared/hooks/use-currency";
import ExchangeInput from "./ExchangeInput";
import AcceptButton from "@/components/Exchanger/AcceptButton";

interface ExchangerPanelProps { 
    inputValue: number | null;
    outputValue: number | null;
    handleSetInputValue: (value: number) => void;
    acceptExchange: () => void;
}

const ExchangerPanel: React.FC<ExchangerPanelProps> = ({inputValue, outputValue, handleSetInputValue, acceptExchange}) => {
    const { currWallet, otherWallet } = useCurrency();

    return (
        <div className="flex flex-col gap-1 relative">
            <ExchangeInput wallet={currWallet} value={inputValue} setValue={handleSetInputValue} />
            <AcceptButton acceptExchange={acceptExchange} />
            <ExchangeInput wallet={otherWallet} value={outputValue} setValue={()=>{}} output />
        </div>
    )
}

export default ExchangerPanel;
