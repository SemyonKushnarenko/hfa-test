export type TMode = 'buy' | 'sell';
export type TCurrency = 'USD' | 'EUR';
export interface ICurrencyWallet {
    balance: number;
    currency: TCurrency;
    currencyIcon: string;
    tax: number;
}
export interface IWallet {
    usd: ICurrencyWallet,
    eur: ICurrencyWallet
}
