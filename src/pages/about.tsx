import Line from "../components/Line";
import IndexPage from "../components/title";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <>
      <IndexPage title="About" />

      <div className="m-1">
        <div className="flex flex-col justify-center md:pt-28 pt-32 ">
          <div className="mx-auto snap-start">

            <h2 className="flex flex-row p-2 mb-28 text-4xl ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={0} height={0} className="p-1 m-1 w-9 h-9">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>


              <span className="m-1 font-frontdev">About me.</span>
            </h2>
          </div>

        </div>

        <div className="flex flex-col justify-center mx-auto  mb-24">
          <div className="mx-auto mb-8 snap-start">
            <h2 className="text-2xl font-head1kod">Education.</h2>
          </div>
          <div className="mx-auto">
            <p className="max-w-xs mx-auto text-center font-text2 md:max-w-lg">
              After high school as should, i studied
              programming at Moringa school in 2019 and learnt web development
              using HTML, CSS, Angular JS, Python Flask and Django.
            </p>
          </div>
        </div>


        <div className="flex flex-col justify-center mx-auto mb-24">
          <div className="mx-auto mb-8">
            <h2 className="text-2xl snap-start font-head1kod">Skills.</h2>
          </div>
          <div className="mx-auto">
            <p className="max-w-xs mx-auto text-center font-text2 md:max-w-lg">
              I have a lot of skills in tech but the major ones are logo design, video editing, photography, photo editing, web design and i work well with Adobe Illustrator, Adobe Photoshop, Adobe Premiere pro and figma.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
