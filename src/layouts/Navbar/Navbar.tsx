import Image from "next/image"
import MenuButton from "./MenuButton"

const Navbar = () => {

    return (
        <div className="p-4 pt-5 flex justify-between items-center border-b-white/20 border-b-[2px]">
            <Image
                aria-hidden
                src="/logo.svg"
                alt="Logo icon"
                width={48}
                height={48}
                priority
            />
            <MenuButton />
        </div>
    )
}

export default Navbar