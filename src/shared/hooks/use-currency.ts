import { useMode, useWallet } from "@/store/jotai";
import { ICurrencyWallet } from "@/store/types";

const useCurrency: () => {
    currWallet: ICurrencyWallet;
    otherWallet: ICurrencyWallet;
} = () => {
    const [wallet] = useWallet();
    const [mode] = useMode();
    
    const currWallet = mode === 'buy' ? wallet.usd : wallet.eur;
    const otherWallet = mode === 'buy' ? wallet.eur : wallet.usd;

    return {
        currWallet,
        otherWallet,
    };
}

export default useCurrency;
