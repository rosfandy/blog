'use client';
import Link from 'next/link'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { motion } from 'framer-motion';
export default function FourOhFour() {
    useEffect(() => {
        AOS.init({
        });
    }, [])
    return (
        <div
            className='min-h-screen flex justify-center items-center'>
            <div className="fixed">
                <div
                    data-aos="fade-in"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-sine"
                    className="container-teks flex items-center  justify-center lg:gap-x-0 gap-x-4">
                    <svg className='lg:text-[5.5em] min-[320px]:text-[45px] lg:w-[40%] w-[25%] '>
                        <symbol id="s-text">
                            <text textAnchor="middle" className='min-[320px]:translate-y-[50%] translate-x-[50%] lg:translate-y-[60%]'>404</text>
                        </symbol>
                        <g className="g-ants">
                            <motion.use xlinkHref="#s-text" className="text-copy" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0, transition: { type: 'spring', duration: 3.5, delay: 0.2 } }}></motion.use>
                            <motion.use xlinkHref="#s-text" className="text-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { type: 'spring', duration: 6.5, delay: 0.4 } }}></motion.use>
                            <motion.use xlinkHref="#s-text" className="text-copy" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0, transition: { type: 'spring', duration: 9.5, delay: 0.6 } }}></motion.use>
                            <motion.use xlinkHref="#s-text" className="text-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { type: 'spring', duration: 12.5, delay: 0.8 } }}></motion.use>
                            <motion.use xlinkHref="#s-text" className="text-copy" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0, transition: { type: 'spring', duration: 15.5, delay: 1.0 } }}></motion.use>
                        </g>
                    </svg>
                    <div
                        data-aos="fade-in"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-sine"
                        className="text-white  flex flex-col justify-center lg:mt-[-10vh] mt-[-8vh] lg:ml-0  text-center items-center font-thin">
                        <div className=" lg:text-5xl text-2xl  lg:translate-y-[45%] translate-y-[35%]"> | </div>
                    </div>
                    <div data-aos="fade-in"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-sine" className="text-white  flex flex-col justify-center lg:mt-[-10vh] mt-[-8vh] lg:ml-0  text-center items-center font-thin">
                        <div className=" lg:text-5xl text-2xl  lg:translate-y-[45%] lg:pl-4 translate-y-[35%]">Not Found</div>
                    </div>
                </div>
            </div>
        </div>
    )
}