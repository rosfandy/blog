"use client"
import Breadcrumb from "@/components/Breadcrumb";
import Navbar from "@/components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import project from "@/tmp/projects.json"
import Link from "next/link";

export default function ClientProjects() {
    // const router = useRouter();
    const path = ["Blog"]
    const img = [
        "/editor-app/editor-app-thumbnail.jpg",
        "/hocuspocus/hocuspocus-thumbnail.jpg",
        "/mysqlServer/mysqlServer-thumbnail.jpg",
        "/movielink/movielink-thumbnail.jpg",
    ]

    useEffect(() => {
        AOS.init({
        });
    }, [])

    return (
        <div className="">
            <Navbar />
            <div className="w-full">
                <div className="">
                    <Breadcrumb props={path} />
                </div>
                <div data-aos="fade-in" className="main-content flex flex-col  justify-center items-center left-[50%] min-[320px]:mt-8 md:mt-2">
                    <div className="flex min-h-[60vh] items-center justify-center scroll-smooth gap-x-[16px] gap-y-4 md:py-8 pb-16 lg:px-12 px-0 flex-wrap max-w-[100%] ">
                        {project.data.map((item, index) => (
                            <Link key={index} href={`${item.properties.path.rich_text[0].plain_text}`}>
                                <div key={index} className=" backdrop-blur-sm text-white border md:px-6 px-4 md:py-6 py-4 rounded-md border-white/30 shadow-lg shadow-white/10  w-[330px] max-[320px]:w-[280px]">
                                    <div className=" w-full h-[200px] items-center  justify-center flex">
                                        <div className="w-[300px]">
                                            <div
                                                className="h-[180px] w-auto lg:bg-cover bg-contain bg-center bg-no-repeat"
                                                style={{
                                                    backgroundImage:
                                                        `url(${img[index]})`,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="py-4 text-[20px]">{item.properties.title.rich_text[0].plain_text}</div>
                                    <div className="flex gap-x-2 ">
                                        {item.properties.Tags.multi_select.map((tag, index) => (
                                            <div key={index} className="py-1 px-3 border-[#0B6E4F]/60 text-[#0B6E4F] text-xs border rounded-md">{tag.name}</div>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}