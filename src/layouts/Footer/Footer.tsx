import Image from "next/image"

const Footer = () => {

    return (
        <div className="p-4 pt-5 flex justify-between items-center border-t-viking border-t-[2px] mt-auto">
            <Image
                aria-hidden
                src="/logo.svg"
                alt="Logo icon"
                width={48}
                height={48}
                priority
            />
            <div className="flex gap-2 flex-col items-end text-white/50 text-sm font-light">
                <span>hubforad.test@mail.ru</span>
                <span>+7 (800) 123 - 45 - 67</span>
            </div>
        </div>
    )
}

export default Footer