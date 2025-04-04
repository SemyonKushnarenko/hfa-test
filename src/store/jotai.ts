"use client";

import { atom, useAtom } from "jotai";
import { IWallet, TMode } from "@/store/types";
import moment from "moment";
import { EUR_TAX, USD_TAX } from "@/shared/constants/wallet";

export const modeAtom = atom<TMode>('buy');

export const useMode = () => {
    return useAtom(modeAtom);
}

export const walletAtom = atom<IWallet>({
    usd: {
        balance: 143,
        currency: 'USD',
        currencyIcon: '$',
        tax: USD_TAX,
    },
    eur: {
        balance: 15.56,
        currency: 'EUR',
        currencyIcon: '€',
        tax: EUR_TAX,
    }
});

export const useWallet = () => {
    return useAtom(walletAtom);
}

export const dateAtom = atom<Date>(() => {
    return moment().add(19 * 60 + 45, 'seconds').toDate();
});

export const useDate = () => {
    return useAtom(dateAtom);
}
