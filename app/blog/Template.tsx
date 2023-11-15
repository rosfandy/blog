'use client';
import { Fira_Code } from 'next/font/google'
const FiraCode = Fira_Code({ subsets: ['cyrillic'] })
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import DropdownMenu from './DropDown';
import Navbar from '@/components/Navbar';
import "./notion.css"
import "./hightlight.css";
import hljs from "highlight.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LayoutProject({ path, datas, img }: { path: string[], datas: string, img: string }) {
    const content = JSON.parse(datas)
    useEffect(() => {
        // Function to handle copying content to clipboard
        const handleCopyToClipboard = (event: any) => {
            const selectedElement = event.target;
            const contentToCopy = selectedElement.textContent;

            // // Create a temporary textarea element to copy text to clipboard
            const tempTextarea = document.createElement('textarea');
            tempTextarea.value = contentToCopy;
            document.body.appendChild(tempTextarea);
            tempTextarea.select();
            document.execCommand('copy');
            document.body.removeChild(tempTextarea);

            // You can add a visual indication that the content was copied here if needed.
            toast.dark('Copied to clipboard', {
                autoClose: 2000, // Close the toast after 2 seconds
                progressStyle: { backgroundColor: '#0B6E4F' },
                className: 'border border-white/10 md:w-[80%] w-[50%] top-10 md:left-[10%] md:text-[16px] text-[14px] left-[45%] bg-black/50 backdrop-blur-sm'
            });

        }

        AOS.init({});
        hljs.highlightAll();

        // Add click event listeners to elements with class 'notion-code'
        const codeElements = document.querySelectorAll('.notion-code');
        codeElements.forEach((element) => {
            element.addEventListener('click', handleCopyToClipboard);
        });

        return () => {
            // Clean up event listeners when the component unmounts
            codeElements.forEach((element) => {
                element.removeEventListener('click', handleCopyToClipboard);
            });
        }
    }, [])

    return (
        <main >
            <ToastContainer />
            <Navbar />
            <div className="min-h-screen">
                <div className="flex">
                    <div data-aos="fade-in"
                        style={{ backdropFilter: 'blur(2px)', backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
                        className="sidebar lg:inline hidden pt-32 pb-12 text-white pl-12 pr-4 w-[20%] min-h-screen border-r border-r-white/10 ">
                        <div className="overflow-y-scroll pr-4 max-h-screen sticky top-[8rem] pt-2 gap-y-6 flex flex-col">
                            <div className="text-white text-xl font-bold">My Blog</div>
                            <div className="flex flex-col gap-y-4">
                                <DropdownMenu datas={datas} />
                            </div>
                        </div>
                    </div>
                    <div
                        data-aos="fade-in" className="lg:w-[60%] w-full content-projects backdrop-blur-sm">
                        <Breadcrumb props={path} />
                        <div className="md:p-12 p-6">
                            <div className="flex flex-col w-full py-8 gap-y-8">
                                <div className="max-w-full h-[70%] w-[400px]" >
                                    <div
                                        className="h-[250px] w-auto bg-contain bg-center bg-no-repeat"
                                        style={{
                                            backgroundImage:
                                                `url(${img})`,
                                        }}
                                    ></div>
                                    {/* <img src={img} alt="Movie Poster" className='md:w-[80%] max-h-[100%] h-auto max-w-[100%] rounded-md' /> */}
                                </div>
                                <div className='text-white w-full flex flex-col gap-y-[10px]' dangerouslySetInnerHTML={{ __html: content[0].content }} />
                            </div>
                        </div>
                    </div>
                    <div style={{ backdropFilter: 'blur(2px)', backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
                        data-aos="fade-in"
                        className="sidebar lg:inline hidden pt-32 text-white pl-12 pr-8 w-[20%] min-h-screen border-l border-l-white/10">
                        {/* <div className="sticky top-[8rem] pt-2 gap-y-6 flex flex-col">
                            <div className="text-white text-xl font-bold">On This Page</div>
                            <div className="flex flex-col gap-y-4">
                                <DropdownMenu />
                                <DropdownMenu />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </main>
    )
}
