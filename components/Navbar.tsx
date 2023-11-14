import Link from "next/link";
import { FaGithub, FaHamburger } from "react-icons/fa";
import { Fira_Code } from 'next/font/google'
import { useState } from "react";
import { motion } from 'framer-motion';
import { IoClose } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";

const FiraCode = Fira_Code({ subsets: ['cyrillic'] })

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="">

            <div className="z-[999] top-0  inset-x-0 backdrop-blur-lg fixed flex items-center justify-between lg:py-6 lg:px-24 py-6 px-8 text-white w-full">
                <div className="flex items-center gap-x-24">
                    <div className={`nav-shine font-semibold italic text-[20px] md:text-[24px] ${FiraCode.className}`}>
                        /rosfandy.me
                    </div>
                    <div className="md:flex hidden gap-x-6 font-[300]">
                        <Link className="hover:text-[#6bbf59] text-white/50 ease-in-out duration-300" href="/">Home</Link>
                        <Link className="hover:text-[#6bbf59] text-white/50 ease-in-out duration-300" href="/about">About</Link>
                        <Link className="hover:text-[#6bbf59] text-white/50 ease-in-out duration-300" href="/blog">Blog</Link>
                    </div>
                </div>
                <div className="">
                    <div onClick={(() => setIsOpen(true))} className="md:hidden relative  text-3xl">
                        <HiMenu />
                    </div>
                    <Link href="https://github.com/rosfandy" className="md:flex hidden items-center gap-x-2">
                        <FaGithub size={28} />
                        <div className="text-[18px] font-regular">
                            Github
                        </div>
                    </Link>
                </div>

            </div>
            {isOpen && (
                <motion.div
                    transition={{ duration: 0.3 }}
                >
                    <div className="fixed z-[9999] min-h-screen w-full bg-black/10 backdrop-blur-lg text-white  p-8">
                        <div onClick={(() => { setIsOpen(false) })} className="flex justify-end text-5xl ">
                            <IoClose />
                        </div>
                        <div className="mt-8">
                            <div className="flex flex-col gap-y-6 font-[300] text-2xl">
                                <Link onClick={(() => setIsOpen(false))} className="hover:text-[#6bbf59] text-white/50 ease-in-out duration-300" href="/">Home</Link>
                                <Link onClick={(() => setIsOpen(false))} className="hover:text-[#6bbf59] text-white/50 ease-in-out duration-300" href="/about">About</Link>
                                <Link onClick={(() => setIsOpen(false))} className="hover:text-[#6bbf59] text-white/50 ease-in-out duration-300" href="/blog">Blog</Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    )
}