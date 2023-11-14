'use client';
import { Fira_Code } from 'next/font/google'
const FiraCode = Fira_Code({ subsets: ['cyrillic'] })
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import {
    AiFillMail,
    AiFillGithub,
    AiOutlineInstagram,
    AiFillLinkedin,
} from "react-icons/ai";
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function About() {
    useEffect(() => {
        AOS.init({
        });
    }, [])

    return (
        <main >
            <div className="about">
                <Navbar />
                <div
                    className="min-h-screen"
                >
                    <div className="lg:fixed">
                        <div className="absolute ">
                            <Breadcrumb props={["About"]} />
                        </div>
                        <div className="flex lg:flex-row flex-col lg:top-0 lg:pt-0 pt-48 text-white w-full items-center lg:justify-around md:px-12 px-4 ">
                            <div className="items-center justify-center lg:pl-32 flex flex-col gap-y-4">
                                <div
                                    data-aos="fade-in"
                                    data-aos-offset="50"
                                    data-aos-easing="ease-in-sine"
                                    className="lg:relative flex flex-col gap-y-4 justify-center w-full items-center"
                                >
                                    <div
                                        className="lg:w-[200px] lg:h-[200px] h-[150px] w-[150px] rounded-[20%] bg-cover bg-center"
                                        style={{
                                            backgroundImage:
                                                "url('/profile.png')",
                                        }}
                                    ></div>
                                    <div className={`${FiraCode.className} text-center`}>
                                        <h1 className={` text-lg`}>
                                            Bagus Ridho Rosfandy
                                        </h1>
                                        <h1 className="font-fira text-white/50">
                                            /ridho/
                                        </h1>
                                    </div>
                                    <ul className="flex gap-x-4  justify-center text-[24px]">
                                        <AiFillMail className="cursor-pointer" />
                                        <AiOutlineInstagram className="cursor-pointer" />
                                        <AiFillLinkedin className="cursor-pointer" />
                                        <AiFillGithub className="cursor-pointer" />
                                    </ul>
                                </div>
                            </div>
                            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.01)' }} className="lg:border-x border border-white/5 bg-blur lg:h-[100vh] lg:w-1/2 w-[100%] lg:items-center flex lg:px-12 px-4 py-12 lg:my-0 my-12 text-justify font-light text-white/90">
                                <div
                                    data-aos="fade-in"
                                    data-aos-duration="2000"
                                    className=""
                                >
                                    I’m <strong>Bagus Ridho Rosfandy</strong>, a
                                    software engineer and computer enthusiast.
                                    <br />
                                    <br />
                                    I’m a seventh year student in bachelors degree
                                    study at Computer Science. I love to write a
                                    code especially in Javascript languages.
                                    <br />
                                    <br />
                                    I start create this blog to share and help me to
                                    documenting my projects and also make people
                                    easier to know me.
                                    <br />
                                    <br />
                                    Feel free to contact me, heres{" "}
                                    <span className="underline font-[500]">
                                        <Link href="https://drive.google.com/file/d/1ZLX2XQBI855tHM6UrVpJ8TkRCPoYxo_c/view">
                                            my resume
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
