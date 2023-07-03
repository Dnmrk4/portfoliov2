import Navs from "../components/Nav";
import IndexPage from "../components/title";
import Link from "next/link";
import Image from "next/image";
import Line from "../components/Line";
import { toast } from "react-toastify";

function Experience(): JSX.Element {
  const onClick = () => toast('Coming soon.', { hideProgressBar: true, autoClose: 300, position:'bottom-right'})
  return (
    <>
      <IndexPage title="Experience" />

      <div className="flex flex-col justify-center md:pt-38 pt-36 overflow-hidden ">
        <div className=" snap snap-mandatory mx-auto snap-start ">
          <h2 className="flex flex-row p-2  text-4xl font-frontdev ">
            <svg
              width="6"
              height="6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="m-1 w-9 h-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
              />
            </svg>
            Experience
          </h2>
        </div>
        <div className="mx-auto ">
          <div className="justify-center mx-auto">
            <div className="flex flex-col w-auto p-10 mx-auto font-text2 ">
              <div className="flex flex-row justify-between m-4 mx-auto rounded-4xl">

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
                      href="https://www.fiverr.com/s2/f1f90b2b26"
                      className="cursor-pointer hover:link text-green hover:text-white"
                    >
                      @danmark_dash
                    </Link>
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-between m-4 mx-auto rounded-4xl">
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

              </div>
              <div className="flex flex-row justify-between m-4 mx-auto rounded-4xl">

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

        <div>
          <div className="items-center p-2 mx-auto ">
            <div className="flex flex-col pt-2 mb-12  md:mb-24 md:p-24 ">
              <h3 className="pt-2 mb-12 text-2xl text-center md:mb-24 font-head1kod">Projects</h3>
              <div className="flex flex-col mx-auto space-x-32 md:flex-row font-text2 ">
                <div className="w-auto p-4">
                  <Link href="https://danmarkmutaiv1.netlify.com/"><Image className="w-full rounded-4xl " src="/assets/porto.jpeg" width="244" height="140" alt="" /></Link>
                  <Link href="https://danmarkmutaiv1.netlify.com/"><h5 className="p-3 text-sm italic text-center text-current md:text-left">Portfolio v1</h5></Link>
                </div>
                <div className="w-auto p-4">
                  <Link href="" onClick={onClick}><Image className="w-full rounded-4xl " src="/assets/KFK.png" width="244" height="140" alt="" /></Link>
                  <Link href="" onClick={onClick}><h5 className="p-3 text-sm italic text-center text-current md:text-left">Marcus THY Rapper</h5></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
