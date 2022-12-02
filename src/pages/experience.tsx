import Navs from "../components/Nav";
import IndexPage from "../components/title";
import Link from "next/link";
import Image from "next/image";
import Line from "../components/Line";
import Projects from "../components/Projects";

function Experience(): JSX.Element {
  return (
    <>
      <IndexPage title="Experience" />

      <div className="flex flex-col justify-center pt-56 overflow-hidden ">
        <div className="mx-auto snap-start ">
          <h2 className="flex flex-row p-1 mb-10 text-2xl rounded-full outline outline-offset-1 outline-1">
            <svg
              width="6"
              height="6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 m-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
              />
            </svg>
            Experience.
          </h2>
        </div>
        <div className="mx-auto mb-32 ">
          <div className="justify-center mx-auto">
            <h3 className="pb-32 text-2xl text-center ">Work.</h3>
            <div className="flex flex-col w-auto p-4 mx-auto space-y-24 ">
              <div className="flex flex-row justify-between m-4 mx-auto shadow-md rounded-xl shadow-slate-500">
                <Image
                  src="/assets/fifive.jpg"
                  width="270"
                  height="96"
                  alt=""
                  className="hidden transition duration-300 cursor-pointer opacity-60 hover:opacity-80 rounded-xl hover:h-52 hover:w-72 md:flex"
                />
                <div className="flex flex-col items-center p-4 m-4 mx-auto rounded-md md:items-start ">
                  <Image
                    className="mb-4"
                    width="20"
                    height="28"
                    src="/assets/fivver.png"
                    alt=""
                  />
                  <p className="text-xs font-extralight">
                    May 2022 - Present ( 5 mons )
                  </p>
                  <p className="max-w-md text-center md:text-start">
                    I have been working in Fivver as a freelancer for a short
                    time, but the experince has been great, being able to learn
                    and grow my skills. Find me in Fivver{" "}
                    <Link
                      href="https://www.fiverr.com/danmark_dash/"
                      className="text-green hover:text-purpleish"
                    >
                      @danmark_dash
                    </Link>
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-between m-4 mx-auto shadow-md rounded-xl shadow-slate-500">
                <div className="flex flex-col items-center p-4 m-4 mx-auto rounded-md md:items-end">
                  <Image
                    className="mb-4"
                    width="58"
                    height="48"
                    src="/assets/kfc.png"
                    alt=""
                  />
                  <p className="text-xs font-extralight">
                    May 2021 - June 2022 ( 1yr 1 mons )
                  </p>
                  <p className="max-w-md text-center md:text-end">
                    I worked in KFC ( KFK ) as a team member and i was able to
                    skills like commitment, dedication, communication and
                    customer service. I was also able to learn how to work with
                    a team and get organised.
                  </p>
                </div>
                <Image
                  src="/assets/KFK1.png"
                  width="270"
                  height="96"
                  alt=""
                  className="hidden md:flex"
                />
              </div>
              <div className="flex flex-row justify-between m-4 mx-auto shadow-md rounded-xl shadow-slate-500">
                <Image
                  src="/assets/kloutshop.png"
                  alt=""
                  width="144"
                  height="64"
                  className="hidden ml-16 mr-16 md:flex"
                />
                <div className="flex flex-col items-center p-4 m-4 mx-auto rounded-md md:items-start ">
                  <Image
                    className="mb-4"
                    src="/assets/kllout.png"
                    width="58"
                    height="48"
                    alt="klout2"
                  />
                  <p className="text-xs font-extralight">
                    Feb 2019 - Dec 2019 ( 11 mons )
                  </p>
                  <p className="max-w-md text-center md:text-start">
                    I worked at Klout shop as a salesman while studing
                    programming at Moringa. Although i worked there for a short
                    while i managed to increase sales by looking for market to
                    sale my products and also looking products most of my
                    clients usually liked
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Line />
        <div>
          <div className="">
            <Projects />
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
