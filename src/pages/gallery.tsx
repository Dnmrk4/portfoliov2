import Navs from "../components/Nav";
import IndexPage from "../components/title";
import Image from "next/image";
import Link from "next/link";

const Gallery = () => {
  return (
    <>
      <IndexPage title="Gallery" />
      <div>
      <div className="container justify-center">
        <h3 className="mx-auto mb-24 text-2xl text-center pt-52">My Gallery.</h3>
        <div className="flex flex-col justify-center">
          <div className="flex flex-row p-6 m-20 mx-auto space-x-4 overflow-auto shadow-md w-144 scroll-smooth shadow-slate-400 rounded-xl">
            <Image
            src="/assets/danmarkk.png" alt="" width="244" height="144" className="p-2 rounded-xl"

            />
            <Image
            src="/assets/danmarkk.png" alt="" width="244" height="144" className="p-2 rounded-xl"

            />
            <Image
            src="/assets/danmarkk.png" alt="" width="244" height="144" className="p-2 rounded-xl"

            />
            <Image
            src="/assets/danmarkk.png" alt="" width="244" height="144" className="p-2 rounded-xl"

            />
            <Image
            src="/assets/danmarkk.png" alt="" width="244" height="144" className="p-2 rounded-xl"

            />
            <Image
            src="/assets/danmarkk.png" alt="" width="244" height="144" className="p-2 rounded-xl"

            />
            <Image
            src="/assets/danmarkk.png" alt="" width="244" height="144" className="p-2 rounded-xl"

            />
            <Image
            src="/assets/danmarkk.png" alt="" width="244" height="144" className="p-2 rounded-xl"

            />
          </div>
        </div>
      </div>
      </div>

    </>
  );
};

export default Gallery;
