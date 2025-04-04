import clsx from "clsx"
import { IMenuItem } from "@/components/Menu/hooks/use-menu-items";
import Image from "next/image";

interface IMenuItemProps {
    item: IMenuItem;
    setActive: (id: number) => void;
}

const MenuItem: React.FC<IMenuItemProps> = ({item, setActive}) => {
    return (
        <div
            className={clsx(
                'flex items-center gap-2 py-1 px-3 rounded-lg transition-all text-[13px] font-medium',
                item.isActive && 'bg-viking',
            )}
            key={item.id}
            onClick={() => setActive(item.id)}
        >
            <Image src={item.icon} alt={item.title} width={20} height={20} />
            {item.title}
        </div>
    )
}

export default MenuItem;
