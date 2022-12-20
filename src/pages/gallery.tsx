import Navs from "../components/Nav";
import IndexPage from "../components/title";
import Image from "next/image";
import Link from "next/link";

const Gallery = () => {
  return (
    <>
      <IndexPage title="Gallery" />
      <div>
        <div className="flex flex-col justify-center pt-56 mb-24 overflow-hidden ">
          <div className="mx-auto snap-start snap-y ||">
            <h2 className="flex flex-row p-2 mb-10 text-2xl rounded-full shadow-inner font-frontdev outline shadow-current outline-offset-1 outline-1">
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
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              Gallery
            </h2>
          </div>
        </div>
        <div className="container justify-center mx-auto font-text2">
          <div className="flex flex-col justify-center p-4 mx-auto">
            <h4 className="mx-auto -mb-6 text-xs text-center md:text-left md:text-lg">
              Current
            </h4>
            <div className="flex flex-row w-auto p-6 m-6 mx-auto space-x-4 overflow-auto shadow-inner snap-x snap-proximity md:w-4/6 scroll-smooth shadow-current rounded-4xl">
              <Image
                src="/assets/KFK.png"
                alt=""
                width="244"
                height="144"
                className="w-full p-2 snap-center snap-always rounded-4xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center p-4">
            <h4 className="mx-auto -mb-6 text-xs text-center md:text-left md:text-lg">
              Portfolio v1
            </h4>
            <div className="flex flex-row w-auto p-6 m-6 mx-auto space-x-4 overflow-auto shadow-inner snap-x snap-proximity md:w-4/6 scroll-smooth shadow-current rounded-4xl">
              <Image
                src="/assets/KFK.png"
                alt=""
                width="244"
                height="144"
                className="w-full p-2 shadow snap-center snap-always shadow-current rounded-4xl"
              />
              <iframe className="w-full rounded-4xl "  src="/assets/sauti.mp4"></iframe>
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center p-4" id="marcus">
            <h4 className="mx-auto -mb-6 text-xs text-center md:text-left md:text-lg">
              Marcus THY Rapper
            </h4>
            <div className="flex flex-row w-auto p-6 m-6 mx-auto space-x-4 overflow-auto shadow-inner snap-x snap-proximity md:w-4/6 scroll-smooth shadow-current rounded-4xl">
              <Image
                src="/assets/KFK.png"
                alt=""
                width="244"
                height="144"
                className="w-full p-2 shadow snap-center snap-always shadow-current rounded-4xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center p-4">
            <h4 className="mx-auto -mb-6 text-xs text-center md:text-left md:text-lg">
            Millie&apos;s Meals and bakes
            </h4>
            <div className="flex flex-row w-auto p-6 m-6 mx-auto space-x-4 overflow-auto shadow-inner snap-x snap-proximity md:w-4/6 scroll-smooth shadow-current rounded-4xl">
              <Image
                src="/assets/KFK.png"
                alt=""
                width="244"
                height="144"
                className="w-full p-2 shadow snap-center snap-always shadow-current rounded-4xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center p-4">
            <h4 className="mx-auto -mb-6 text-xs text-center md:text-left md:text-lg">
              Some art
            </h4>
            <div className="flex flex-row w-auto p-6 m-6 mx-auto space-x-4 overflow-auto shadow-inner snap-x snap-proximity md:w-4/6 scroll-smooth shadow-current rounded-4xl">
              <Image
                src="/assets/KFK.png"
                alt=""
                width="244"
                height="144"
                className="w-full p-2 shadow snap-center snap-always shadow-current rounded-4xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center p-4">
            <h4 className="mx-auto -mb-6 text-xs text-center md:text-left md:text-lg">
              Logos
            </h4>
            <div className="flex flex-row w-auto p-6 m-6 mx-auto space-x-4 overflow-auto shadow-inner snap-x md:w-4/6 snap-proximity scroll-smooth shadow-current rounded-4xl">
              <Image
                src="/assets/KFK.png"
                alt=""
                width="244"
                height="144"
                className="w-full p-2 shadow snap-center snap-always shadow-current rounded-4xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
              <Image
                src="/assets/danmarkk.png"
                alt=""
                width="244"
                height="144"
                className="p-2 rounded-xl"
              />
            </div>
          </div>

        </div>
      </div>
      {/*
      Current
      Portfolio v1
      marcus thy rapper
      Some art
      Millie's Meals and bakes
      tiktok
      logos
      */}
    </>
  );
};

export default Gallery;
