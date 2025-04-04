import Image from "next/image"
import clsx from "clsx";
interface AcceptButtonProps {
    isAbsolute?: boolean;
    acceptExchange: () => void;
}

 const AcceptButton: React.FC<AcceptButtonProps> = ({isAbsolute = true, acceptExchange}) => {
    return (
        <button 
            onClick={acceptExchange}
            className={clsx(
                "bg-shark rounded-full py-[2px] px-[18px] flex justify-center items-center border-cod-gray border-[3px]",
                isAbsolute && "absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
            )}
        >
            <Image src="/exchanger/arrow.svg" alt="arrow" width={24} height={24} />
        </button>
    )
 }

 export default AcceptButton;
