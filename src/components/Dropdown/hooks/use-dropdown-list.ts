"use client";

import { useState } from "react";

export interface IDropdownItem {
    id: number;
    title: string;
    text: string;
    isOpen: boolean;
}

const useDropdownList = () => {
    const [dropdownList, setDropdownList] = useState<IDropdownItem[]>([
        {id: 1, title: 'Title', text: 'Приятно, граждане, наблюдать, как непосредственные участники технического прогресса, превозмогая сложившуюся непростую.', isOpen: false},
        {id: 2, title: 'Title', text: 'Приятно, граждане, наблюдать, как непосредственные участники технического прогресса, превозмогая сложившуюся непростую.', isOpen: false},
        {id: 3, title: 'Title', text: 'Приятно, граждане, наблюдать, как непосредственные участники технического прогресса, превозмогая сложившуюся непростую.', isOpen: false},
    ]);

    const handleOpenItem = (id: number) => {
        setDropdownList(prev => prev.map(item => item.id === id ? {...item, isOpen: !item.isOpen} : item));
    }

    return {dropdownList, handleOpenItem};
}

export default useDropdownList;
