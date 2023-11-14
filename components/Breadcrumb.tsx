import Link from "next/link";
import { FaAngleRight, FaHome } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";

interface BreadcrumbProps {
    props: string[]; // Assuming props is an array of strings
}

export default function Breadcrumb({ props }: BreadcrumbProps) {
    return (
        <div
            data-aos="fade-in"
            className="breadcrumb md:px-12 px-4 pt-28  flex gap-x-2 text-white items-center"
        >
            <Link href="/"><GoHomeFill size={24} /></Link>
            {props.map((item, index) => {
                // Determine the path based on the current item and its predecessors
                const path = `/${props.slice(0, index + 1).join("/")}`;
                return (
                    <div
                        key={index}
                        className="flex items-center justify-center gap-x-2"
                    >
                        <FaAngleRight />
                        <div className="bg-[#6bbf59]/10 border border-[#6bbf59]/20 shadow-md shadow-white/10 backdrop-blur-sm px-3 py-1 rounded-xl">
                            <Link href={path.toLowerCase()}>{item}</Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
