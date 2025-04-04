"use client";
import clsx from "clsx";
import { useState, useEffect } from "react"
import { createPortal } from "react-dom";
import Menu from "@/components/Menu/Menu";
import { getDocument } from "@/shared/utils/browser";

const MenuButton = () => {
    const [isOpenedMenu, setIsOpenedMenu] = useState<boolean>(false);
    const [mounted, setMounted] = useState<boolean>(false);
    
    useEffect(() => {
        setMounted(true);
    }, []);
    
    const menuHandler = () => {
        setIsOpenedMenu(!isOpenedMenu);
    }

    return (
        <>
            <button
                onClick={menuHandler} 
                className="bg-viking size-9 rounded-md flex items-center flex-col justify-center gap-1"
            >
                <span className={clsx(
                    'bg-white w-6 h-1 rounded-sm transition-transform', 
                    isOpenedMenu && 'transform-(--first-menu-button-span)',
                )}></span>
                <span className={clsx(
                    'bg-white w-6 h-1 rounded-sm transition-opacity', 
                    isOpenedMenu ? 'opacity-0' : 'opacity-100',
                )}></span>
                <span className={clsx(
                    'bg-white w-6 h-1 rounded-sm transition-transform', 
                    isOpenedMenu && 'transform-(--second-menu-button-span)',
                )}></span>
            </button>
            {mounted && createPortal(
                <Menu isOpenedMenu={isOpenedMenu} />,
                getDocument()?.body || document.body,
            )}
        </>
    )
}

export default MenuButton