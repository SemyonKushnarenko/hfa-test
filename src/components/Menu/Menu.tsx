"use client";

import clsx from 'clsx';
import React from 'react'
import useMenuItems from '@/shared/hooks/use-menu-items';
import MenuItem from '@/components/Menu/MenuItem';

interface IMenuProps {
    isOpenedMenu: boolean;
}

const Menu: React.FC<IMenuProps> = ({isOpenedMenu}) => {
    const {menuItems, setActive} = useMenuItems();

    return (
        <div className={clsx(
            'bg-black-pearl mt-21 p-4 pt-5 w-screen h-screen fixed transition-all z-10',
            'flex flex-col gap-2.5',
            isOpenedMenu ? 'top-0' : 'top-full',
        )}>
            {menuItems.map(item => {
                return (
                    <MenuItem
                        key={item.id}
                        item={item}
                        setActive={setActive}
                    />
                )
            })}
        </div>
    )
}

export default Menu