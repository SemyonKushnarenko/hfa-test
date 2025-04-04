import { IDropdownItem } from "@/shared/hooks/use-dropdown-list";
import clsx from "clsx";
import Image from "next/image";

interface IDropdownItemProps {
    item: IDropdownItem;
    handleOpenItem: (id: number) => void;
}

const DropdownItem: React.FC<IDropdownItemProps> = ({
    item: {id, title, text, isOpen},
    handleOpenItem,
}) => {
    return (
        <div
            className="leading-none"
            onClick={() => handleOpenItem(id)}
        >
            <div className="flex items-center justify-between">
                <span className="text-viking text-md font-semibold">{title}</span>
                <Image
                    src="/dropdown/arrow.svg"
                    alt="arrow-down"
                    width={24}
                    height={24}
                    className={clsx(
                        'transition-all duration-300',
                        isOpen ? 'rotate-0' : 'rotate-[-90deg]',
                    )} />
            </div>
            <div className="h-[1px] bg-viking my-2"></div>
            <div className={clsx(
                'transition-all duration-300 overflow-hidden',
                isOpen ? 'max-h-[96px] opacity-100' : 'max-h-0 opacity-0',
            )}>
                <div className="text-[13px] font-light">
                    {text}
                </div>
            </div>
        </div>
    )
}

export default DropdownItem;
