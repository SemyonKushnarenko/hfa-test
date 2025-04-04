import { ICurrencyWallet } from "@/store/types";

interface ExchangeInputProps {
    wallet: ICurrencyWallet;
    value: number | null;
    setValue: (value: number) => void;
    output?: boolean;
}

const ExchangeInput: React.FC<ExchangeInputProps> = ({wallet, value, setValue, output = false}) => {
    const totalBalance = (output 
        ? wallet.balance + (value ? value : 0)
        : wallet.balance - (value ? value : 0)).toFixed(2);
    return (
        <div className="flex gap-2 justify-between items-center bg-shark rounded-lg py-5 px-4 text-base text-white/50 font-medium">
            <div className="flex flex-col gap-1 items-start">
                <input
                    id="exchanger-input"
                    type="number" 
                    className="max-w-[100px] bg-transparent disabled:text-white/50" 
                    placeholder="0"
                    max={ output ? Infinity : wallet.balance }
                    min={0}
                    value={value ? value : ''}
                    onChange={(e) => output ? null : setValue(isNaN(+e.target.value) ? 0 : +e.target.value)}
                    disabled={output}
                />
                <div
                    className="text-sm"
                >
                    {totalBalance}
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <span className="uppercase">{wallet.currency}</span>
                <div className="bg-white rounded-full size-9 flex justify-center items-center text-black-pearl text-2xl font-bold leading-0">
                    {wallet.currencyIcon}
                </div>
            </div>
        </div>
    );
}

export default ExchangeInput;
