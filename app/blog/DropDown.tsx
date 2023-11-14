import Link from 'next/link';
import React, { useState } from 'react';
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import { motion } from 'framer-motion';

const DropdownMenu = ({ datas }: { datas: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const content = JSON.parse(datas)
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-[100%] f">
            <div onClick={toggleDropdown}
                className="flex justify-between items-center cursor-pointer">
                <div
                    className=" text-white/50 text-[16px] font-regular inline-flex items-center"
                >
                    Frontend
                </div>
                <div className="icon-container">
                    <BsChevronRight className={isOpen ? 'rotate' : 'default'} size={12} />
                </div>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                >
                    <div className="py-1 flex flex-col gap-y-3 pl-4 font-thin">
                        {content.map((item: any, index: any) => (
                            <Link key={index} href="">{item.properties.title.rich_text[0].plain_text}</Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default DropdownMenu;
