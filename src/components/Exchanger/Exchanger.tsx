"use client";

import { useState } from "react";
import { useEffect } from "react";
import { Slide, ToastContainer, toast } from 'react-toastify';
import AddPrice from "@/components/Exchanger/AddPrice";
import ChangeMode from "@/components/Exchanger/ChangeMode";
import ExchangerPanel from "@/components/Exchanger/ExchangerPanel";
import { COURSE } from "@/shared/constants/wallet";
import { useMode, useWallet } from "@/store/jotai";
import useCurrency from "@/components/Exchanger/hooks/use-currency";
import { TAddPrice } from "@/components/Exchanger/exchanger.types";

const Exchanger = () => {
    const [inputValue, setInputValue] = useState<number | null>(null);
    const [outputValue, setOutputValue] = useState<number | null>(null);
    const [disabledExchange, setDisabledExchange] = useState<boolean>(false);
    const { currWallet } = useCurrency();
    const [mode] = useMode();
    const [wallet, setWallet] = useWallet();

    const handleSetInputValue = (value: number) => {
        if (value > currWallet.balance) {
            setInputValue(currWallet.balance);
        } else {
            setInputValue(value);
        }
    }

    const resetValues = () => {
        setInputValue(null);
        setOutputValue(null);
    }

    useEffect(() => {
        const usedInputValue = inputValue ? inputValue : 0;
        const output = mode === 'buy' ? usedInputValue * COURSE : +(usedInputValue / COURSE).toFixed(2);
        setOutputValue(output);
    }, [inputValue]);

    const handleAddPrice = (price: TAddPrice) => {
        const usedInputValue = inputValue ? inputValue : 0;
        if (typeof price === 'number' && price + usedInputValue > currWallet.balance || price === 'all') {
            setInputValue(currWallet.balance);
        } else {
            setInputValue(usedInputValue + price);
        }
    }

    const acceptExchange = () => {
        if (disabledExchange) return;
        if (inputValue && outputValue) {
            setDisabledExchange(true);
            toast.info('Exchange in progress...');
            setTimeout(() => {
                const newWallet = {
                    eur: {
                        ...wallet.eur,
                        balance: mode === 'buy' ? wallet.eur.balance + outputValue : wallet.eur.balance - outputValue
                    },
                    usd: {
                        ...wallet.usd,
                        balance: mode === 'buy' ? wallet.usd.balance - inputValue : wallet.usd.balance + inputValue
                    }
                };
                setWallet(newWallet);
                resetValues();
                toast.success('Exchange successful');
                setDisabledExchange(false);
            }, 2000);
        }
    }
                
    return (
        <div className="flex flex-col gap-2">
            <ChangeMode resetValues={resetValues} />
            <ExchangerPanel acceptExchange={acceptExchange} inputValue={inputValue} outputValue={outputValue} handleSetInputValue={handleSetInputValue} />
            <AddPrice handleAddPrice={handleAddPrice} />
            <ToastContainer            
                position="top-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                draggable
                pauseOnHover
                theme="light"
                transition={Slide}
            />
        </div>
    )
}

export default Exchanger;
