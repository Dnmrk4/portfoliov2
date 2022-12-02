import Line from "../components/Line";
import IndexPage from "../components/title";
import Image from "next/image";

function Home(): JSX.Element {
  return (
    <>
      <IndexPage title="Home" />

      <div className="snap-y scroll-smooth">
        <div className="container flex flex-col-reverse justify-between pt-32 pb-32 mx-auto snap-start md:flex-row">
          <div className="flex flex-col mx-auto space-y-10 text-center w-72 mt-28 min-w-lg md:text-left md:w-144">
            <p className="-mb-10 text-sm text-left text-purplish">I&apos;m</p>
            <p className="text-6xl">DANMARK MUTAI</p>
            <p className="text-4xl min-w-max">Front-end dev.</p>
            <p className="max-w-xs text-sm md:max-w-md ">
              I design and develop good web sites. I also work well with a team,
              a quick learner and work to solve problems for campanies. In
              general i&apos;m an all-rounded guy with a passion for coding.
            </p>
          </div>
          <div className="justify-center mx-auto">
            <Image
              width={500}
              height={500}
              src="/assets/danmarkk.png"
              alt="Avatar"
              className="justify-center max-w-xs mx-auto bg-white rounded-full shadow-2xl max-h-xs mt-28 w-72 h-72 shadow-slate-400" />
          </div>
        </div>
        <Line />
        <div className="container flex flex-col justify-center mx-auto mt-24 mb-24 space-y-24 snap-start ">
          <div className="mb-16">
            <h3 className="text-2xl text-center ">What I do.</h3>
          </div>

          <div className="flex flex-col justify-between mx-auto space-x-0 md:space-x-96 md:flex-row">
            <div className="flex flex-col items-center mb-16 space-y-40">
              <p className="max-w-xs text-sm text-center md:max-w-sm md:text-left">
                I&apos;m a juniour developer and i have a passion to tech. I
                think that&apos;s why i was able to learn some code in my few
                years. I also like art and design, generaly like to create.
              </p>
              <div className="items-center block w-64 h-auto rounded-lg shadow-xl md:w-96 ">
                <h5 className="pb-4 m-4 text-xl font-medium leading-tight text-center ">
                  Web development
                </h5>

                <div className="justify-center block p-6 mx-auto space-y-4 ">
                  <div className="justify-center block mx-auto opacity-80">
                    <div className=" radial-progress text-kore" style={{ "--value": 88 }}>
                      88%
                    </div>
                    <div className=" radial-progress text-kore2" style={{ "--value": 77 }}>
                      77%
                    </div>
                    <div className=" radial-progress text-kore3" style={{ "--value": 57 }}>
                      57%
                    </div>
                    <div className=" radial-progress text-kore4" style={{ "--value": 80 }}>
                      80%
                    </div>
                    <div className=" radial-progress text-slate-400" style={{ "--value": 42 }}>
                      42%
                    </div>
                  </div>
                  <div className="flex flex-row-reverse justify-between mx-auto ">
                    <div className="flex flex-col text-xs">
                      <p>
                        <span className="m-auto badge badge-xs bg-kore "></span>{" "}
                        HTML 88%
                      </p>
                      <p>
                        <span className="m-auto badge badge-xs bg-kore2 "></span>{" "}
                        CSS 77%
                      </p>
                      <p>
                        <span className="m-auto badge badge-xs bg-kore3 "></span>{" "}
                        Javascript 60%
                      </p>
                      <p>
                        <span className="m-auto badge badge-xs bg-kore4 "></span>{" "}
                        Tailwind 80%
                      </p>
                      <p>
                        <span className="m-auto badge badge-xs bg-slate-400 "></span>{" "}
                        NextJS 42%
                      </p>
                    </div>
                    <div>
                      <a href="">
                        <button className="rounded-full btn btn-outline btn-primary ">
                          Github
                          <br />
                          Resume
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-10 md:space-y-28">
              <div className="flex justify-center ">
                <div className="justify-center block w-64 rounded-lg shadow-xl md:w-96">
                  <h5 className="pb-4 m-4 text-xl font-medium leading-tight text-center ">
                    UI/UX design
                  </h5>
                  <div className="w-full px-4 ">
                    <div className="mb-8">
                      <div className="relative w-full h-4 bg-slate-300 rounded-2xl">
                        <div className="bg-purplish absolute top-0 left-0 flex h-full w-[74%] items-center justify-between rounded-2xl text-xs font-semibold text-white">
                          <p className="pl-2">Adobe XD</p>
                          <p className="pr-2">74%</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-8">
                      <div className="relative w-full h-4 bg-slate-300 rounded-2xl">
                        <div className="bg-purplish absolute top-0 left-0 flex h-full w-[89%] items-center justify-between rounded-2xl text-xs font-semibold text-white">
                          <p className="pl-2">Figma</p>
                          <p className="pr-2">89%</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-8">
                      <div className="relative w-full h-4 bg-slate-300 rounded-2xl">
                        <div className="bg-purplish absolute top-0 left-0 flex h-full w-[57%] items-center justify-between rounded-2xl text-xs font-semibold text-white">
                          <p className="pl-2">Craft</p>
                          <p className="pr-2">57%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="items-center block w-64 rounded-lg shadow-xl md:w-96">
                  <h5 className="pb-4 m-4 text-xl font-medium leading-tight text-center ">
                    Graphic design
                  </h5>
                  <div className="w-full px-4 ">
                    <div className="mb-8">
                      <div className="relative w-full h-4 bg-slate-300 rounded-2xl">
                        <div className="bg-purplish absolute top-0 left-0 flex h-full w-[64%] items-center justify-between rounded-2xl text-xs font-semibold text-white">
                          <p className="pl-2">Illustrator</p>
                          <p className="pr-2">64%</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-8">
                      <div className="relative w-full h-4 bg-slate-300 rounded-2xl">
                        <div className="bg-purplish absolute top-0 left-0 flex h-full w-[89%] items-center justify-between rounded-2xl text-xs font-semibold text-white">
                          <p className="pl-2">Figma</p>
                          <p className="pr-2">89%</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-8">
                      <div className="relative w-full h-4 bg-slate-300 rounded-2xl">
                        <div className="bg-purplish absolute top-0 left-0 flex h-full w-[60%] items-center justify-between rounded-2xl text-xs font-semibold text-white">
                          <p className="pl-2">Photoshop</p>
                          <p className="pr-2">60%</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-8">
                      <div className="relative w-full h-4 bg-slate-300 rounded-2xl">
                        <div className="bg-purplish absolute top-0 left-0 flex h-full w-[64%] items-center justify-between rounded-2xl text-xs font-semibold text-white">
                          <p className="pl-2">Canva</p>
                          <p className="pr-2">64%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
