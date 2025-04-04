import { useState } from "react";

export interface IMenuItem {
    id: number;
    title: string;
    icon: string;
    isActive: boolean;
  }

const useMenuItems = () => {
    const [menuItems, setMenuItems] = useState<IMenuItem[]>([
        {id: 1, title: 'Section 1', icon: '/menu/1.svg', isActive: true },
        {id: 2, title: 'Section 2', icon: '/menu/2.svg', isActive: false },
        {id: 3, title: 'Section 3', icon: '/menu/3.svg', isActive: false },
        {id: 4, title: 'Section 4', icon: '/menu/4.svg', isActive: false },
    ])

    const setActive = (id: number) => {
        setMenuItems(menuItems.map(item => {
            item.isActive = item.id === id;
            return item;
        }))
    }

    return {menuItems, setActive};
}

export default useMenuItems;
