import Line from "../components/Line";
import IndexPage from "../components/title";
import Image from "next/image";

function Home(): JSX.Element {
  return (
    <div className="">
      <IndexPage title="Home" />

      <div className="snap-y scroll-smooth">
        <div className="container flex flex-col-reverse justify-between pt-20 pb-32 mx-auto md:pt-32 snap-start md:flex-row">
          <div className="flex flex-col mx-auto space-y-10 text-center w-72 mt-28 min-w-lg md:text-left md:w-144">
            <p className="-mb-10 text-left font-dnmrk1hi"><span className="text-lg font-bold ">Hi</span>, I&apos;m</p>
            <p className="text-6xl font-Pridi">DANMARK MUTAI</p>
            <p className="text-4xl min-w-max font-frontdev">Designer.</p>
            <p className="max-w-xs text-sm md:max-w-md font-text2">
              I design and develop your ideas to life.
              I&#39;m a quick learner and work to create good designs and solve problems in campanies or clients .
            </p>
          </div>
          <div className="justify-center mx-auto">
            <Image
              width={500}
              height={500}
              src="/assets/danmarkk.png"
              alt="Avatar"
              className="justify-center max-w-xs mx-auto bg-white rounded-full shadow-xl max-h-xs mt-28 w-72 h-72 shadow-slate-400"
            />
          </div>
        </div>

        <div className="container flex flex-col justify-center mx-auto mt-24 mb-24 space-y-24 snap-start ">
          <div className="mb-16">
            <h3 className="text-3xl text-center font-head1kod">What I do.</h3>
          </div>

          <div className="flex flex-col justify-between mx-auto space-x-0 md:space-x-96 md:flex-row">
            <div className="flex flex-col items-center mb-16 space-y-24 md:space-y-44">
              <p className="max-w-xs text-sm text-center md:max-w-sm md:text-left font-text2">
                I do graphic design, web design, videography and photography.
                I have a passion in tech and design. I also develop websites but my skills more on the design part.

              </p>
              <div className="items-center block w-64 h-auto shadow-sm card-actions rounded-4xl shadow-current md:w-96 ">
                <h5 className="pb-4 m-4 text-xl font-medium leading-tight text-center font-head1kod">
                  Web development
                </h5>

                <div className="justify-center block p-6 m-0 mx-auto space-y-4 ">
                    <div className="w-full px-4 mb-8">
                    <div className="flex flex-row w-full h-5 overflow-hidden bg-slate-300 rounded-2xl">
                      <div className="bg-kore top-0 left-0  flex h-full w-[90%] items-center justify-between  ">
                      </div>
                      <div className="bg-kore2 top-0 left-0 flex h-full w-[60%] items-center justify-between  ">
                      </div>
                      <div className="bg-kore3 top-0 left-0 flex h-full w-[54%] items-center justify-between  ">
                      </div>
                      <div className="bg-kore4 top-0 left-0 flex h-full w-[75%] items-center justify-between  ">
                      </div>
                      <div className="bg-slate-300 top-0 left-0 flex h-full w-[40%] items-center justify-between  ">
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row-reverse justify-between mx-auto ">
                    <div className="flex flex-col text-xs font-text2">
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
                        <span className="m-auto badge badge-xs bg-slate-300 "></span>{" "}
                        NextJS 42%
                      </p>
                    </div>
                    <div>
                      <a href="http://resume.github.io/?Dnmrk4">
                        <button className="pt-0 pb-0 pl-4 pr-4 font-head1kod hover:bg-purplish hover:outline-transparent rounded-4xl ring-1 ring-purplish ">
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
            <div className="flex flex-col space-y-16 md:space-y-18">
              <div className="flex justify-center ">
                <div className="justify-center block w-64 shadow-sm rounded-4xl shadow-current md:w-96">
                  <h5 className="pb-4 m-4 text-xl font-medium leading-tight text-center font-head1kod ">
                    UI/UX design
                  </h5>
                  <div className="w-full px-4 text-white font-text2">
                    <div className="mb-8">
                      <div className="w-full h-4 bg-slate-300 rounded-2xl">
                        <div className="bg-purplish top-0  left-0 flex h-full w-[74%] items-center justify-between rounded-2xl ">
                          <p className="pl-2">Adobe XD</p>
                          <p className="pr-2">74%</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-8">
                      <div className="w-full h-4 bg-slate-300 rounded-2xl">
                        <div className="bg-purplish top-0 left-0 flex h-full w-[80%] items-center justify-between rounded-2xl ">
                          <p className="pl-2">Figma</p>
                          <p className="pr-2">80%</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-8">
                      <div className="w-full h-4 bg-slate-300 rounded-2xl">
                        <div className="bg-purplish  top-0 left-0 flex h-full w-[57%] items-center justify-between rounded-2xl ">
                          <p className="pl-2">Craft</p>
                          <p className="pr-2">57%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="items-center block w-64 shadow-sm rounded-4xl shadow-current md:w-96">
                  <h5 className="pb-4 m-4 text-xl font-medium leading-tight text-center font-head1kod ">
                    Graphic design
                  </h5>
                  <div className="w-full px-4 text-white font-text2">
                    <div className="mb-8">
                      <div className="w-full h-4 bg-slate-300 rounded-2xl">
                        <div className="bg-purplish font-text1b top-0 left-0 flex h-full w-[64%] items-center justify-between rounded-2xl ">
                          <p className="pl-2">Illustrator</p>
                          <p className="pr-2">64%</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-8">
                      <div className="w-full h-4 bg-slate-300 rounded-2xl">
                        <div className="bg-purplish font-text1b top-0 left-0 flex h-full w-[80%] items-center justify-between rounded-2xl ">
                          <p className="pl-2">Figma</p>
                          <p className="pr-2">80%</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-8">
                      <div className="w-full h-4 bg-slate-300 rounded-2xl">
                        <div className="bg-purplish font-text1b top-0 left-0 flex h-full w-[60%] items-center justify-between rounded-2xl ">
                          <p className="pl-2">Photoshop</p>
                          <p className="pr-2">60%</p>
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
    </div>
  );
}

export default Home;
