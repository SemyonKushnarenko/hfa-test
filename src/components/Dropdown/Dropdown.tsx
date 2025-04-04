"use client";

import DropdownItem from "@/components/Dropdown/DropdownItem";
import useDropdownList from "@/shared/hooks/use-dropdown-list";

const Dropdown: React.FC = () => {
    const {dropdownList, handleOpenItem } = useDropdownList();

    return (
        <div className="p-3 rounded-sm bg-shark flex flex-col gap-3">
            {dropdownList.map(item => (
                <DropdownItem 
                    key={item.id} 
                    item={item} 
                    handleOpenItem={handleOpenItem} 
                />
            ))}
        </div>
    )
}

export default Dropdown;
