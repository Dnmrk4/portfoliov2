import React from "react";
import Image from "next/image";
import { video } from "flowbite-react";
import Link from "next/link";



function Projects() {
  return (
    <>
      <div className="flex flex-col pt-2 mb-12 md:pt-32 md:mb-24 md:p-24 ">
        <h3 className="pt-2 mb-12 text-2xl text-center md:mb-24 font-head1kod">Projects...</h3>
        <div className="flex flex-col mx-auto space-x-32 md:flex-row font-text2 ">
          <div className="w-auto p-4">
            <Link href="https://portfoliov1.netlify.com/"><Image className="w-full rounded-4xl " src="/assets/porto.jpeg" width="244" height="140" alt="" /></Link>
            <Link href="https://portfoliov1.netlify.com/"><h5 className="p-3 text-sm text-center text-current md:text-left">Portfolio v1</h5></Link>
          </div>
          <div className="w-auto p-4">
            <Link href="/gallery#marcus"><Image className="w-full rounded-4xl " src="/assets/KFK.png" width="244" height="140" alt="" /></Link>
            <Link href="/gallery#marcus"><h5 className="p-3 text-sm text-center text-current md:text-left">Marcus THY Rapper</h5></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
