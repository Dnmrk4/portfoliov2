import React from "react";
import Image from "next/image";


function Projects() {
  return (
    <>
      <div className="container flex flex-row mx-auto">
        <div className="mx-auto w-96 bg-base-100 image-full">
          <figure><Image width="58"
            height="48" src="/assets/KFK.png" alt="Shoes" /></figure>
          <div className="">
            <h2 className="">Portfolio v2</h2>
            <p className="">This portfolio was inspired by Tailwind and did it with HTML.</p>
            <div className="justify-end ">
              <button className="btn btn-primary">More...</button>
            </div>
          </div>
        </div>
        <div className="mx-auto w-96 bg-base-100 image-full ">
          <figure><Image width="58"
            height="48" src="/assets/KFK.png" alt="Shoes" /></figure>
          <div className="">
            <h2 className="">Proposals</h2>
            <p className="">This portfolio was inspired by Tailwind and did it with HTML.</p>
            <div className="justify-end ">
              <button className="btn btn-primary">More...</button>
            </div>
          </div>
        </div>
        <div className="mx-auto w-96 bg-base-100 image-full ">
          <figure><Image width="58"
            height="48" src="/assets/KFK.png" alt="Shoes" /></figure>
          <div className="">
            <h2 className="">logo</h2>
            <p className="">This portfolio was inspired by Tailwind and did it with HTML.</p>
            <div className="justify-end ">
              <button className="btn btn-primary">More...</button>
            </div>
          </div>
        </div>
        <div className="mx-auto w-96 bg-base-100 image-full ">
          <figure><Image width="58"
            height="48" src="/assets/KFK.png" alt="Shoes" /></figure>
          <div className="">
            <h2 className="">Portfo</h2>
            <p className="">This portfolio was inspired by Tailwind and did it with HTML.</p>
            <div className="justify-end ">
              <button className="btn btn-primary">More...</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
