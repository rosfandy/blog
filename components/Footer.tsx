import Link from "next/link";
import {
    AiFillMail,
    AiFillGithub,
    AiOutlineInstagram,
    AiFillLinkedin,
} from "react-icons/ai";
export default function Footer() {
    return (
        <div className="Footer">
            <div className="bg-black/100 border-t border-t-white/10 w-full flex flex-col gap-y-6  text-[#2E3A59] justify-center z-[999] absolute py-8">
                <ul className="flex gap-x-4  justify-center text-[32px]">
                    <Link href=""><AiFillMail /></Link>
                    <Link href="https://instagram.com/_rosfandy"><AiOutlineInstagram /></Link>
                    <Link href=""><AiFillLinkedin /></Link>
                    <Link href="https://github.com/rosfandy"><AiFillGithub /></Link>
                </ul>
                <div className="flex justify-center font-[500]">
                    <h5 className=" text-lg">2023 © Rosfandy</h5>
                </div>
            </div>
        </div>
    );
}
