"use client";
import useCurrency from "@/components/Exchanger/hooks/use-currency";
import { SUGGESTED_VARIANTS } from "@/shared/constants/wallet";
import { TAddPrice } from "./exchanger.types";

interface AddPriceProps {
    handleAddPrice: (price: TAddPrice) => void;
}

const AddPrice: React.FC<AddPriceProps> = ({handleAddPrice}) => {
    const { currWallet } = useCurrency();

    return (
        <div className="flex gap-2 tracking-[-3%] text-[12px] text-white/50 font-medium">
            {SUGGESTED_VARIANTS.filter(variant => variant <= currWallet.balance).map((variant) => (
                <span key={variant} className="bg-shark rounded-lg py-2 px-3 flex justify-center items-center" onClick={() => handleAddPrice(variant)}>
                    {currWallet.currencyIcon}{variant}
                </span>
            ))}
            <span className="bg-shark rounded-lg py-2 px-3 flex-1 flex justify-center items-center" onClick={() => handleAddPrice('all')}>
                All {currWallet.currencyIcon}{currWallet.balance}
            </span>
        </div>
    )
}

export default AddPrice;
