'use client';
import { motion } from 'framer-motion';
import { Autour_One } from 'next/font/google'
const FiraCode = Autour_One({ subsets: ['latin'], weight: '400' });
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import Head from 'next/head';
import { NextSeo } from 'next-seo'; // then add the `NextSeo` at any `pages/` that you wish

export default function Home() {
  useEffect(() => {
    AOS.init({
    });
  }, [])

  return (
    <div >
      <NextSeo
        title="Home"
        description="Rosfandy Homepage"
      />
      <div
        className="content flex flex-col items-center min-h-screen ">
        <div className={`fixed ${FiraCode.className}`}>
          <div className="">
            <div className=""
            >
              <div className="container-teks mt-[30vh]">
                <svg viewBox="0 0 960 300" className='lg:text-[7.5em] min-[320px]:text-[150px] w-[100%]  min-[320px]:h-[200px] lg:h-[300px]'>
                  <symbol id="s-text">
                    <text textAnchor="middle" className='min-[320px]:translate-y-[50%] translate-x-[50%] lg:translate-y-[60%]' >rosfandy</text>
                  </symbol>
                  <g className="g-ants">
                    <motion.use xlinkHref="#s-text" className="text-copy" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0, transition: { type: 'spring', duration: 3.5, delay: 0.2 } }}></motion.use>
                    <motion.use xlinkHref="#s-text" className="text-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { type: 'spring', duration: 6.5, delay: 0.4 } }}></motion.use>
                    <motion.use xlinkHref="#s-text" className="text-copy" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0, transition: { type: 'spring', duration: 9.5, delay: 0.6 } }}></motion.use>
                    <motion.use xlinkHref="#s-text" className="text-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { type: 'spring', duration: 12.5, delay: 0.8 } }}></motion.use>
                    <motion.use xlinkHref="#s-text" className="text-copy" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0, transition: { type: 'spring', duration: 15.5, delay: 1.0 } }}></motion.use>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:mt-0 mt-[-5vh]">
            <motion.div
              initial={{ opacity: 0, }}
              animate={{ opacity: 1, }}
              transition={{ duration: 3.5, ease: "easeInOut" }}
            >
              <Link
                href="/about"
                className='border border-[#0B6E4F] rounded-xl lg:p-6 p-4 lg:text-lg text-sm font-thin text-white'
              >
                Getting Started
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
