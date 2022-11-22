import Link from 'next/link'

const Home = () => {
  return (
    <>
    <div>
      <nav className=" fixed mx-auto w-full text-purplish  bg-opacity-10 items-center justify-between blur-nav pl-24 pt-9 pr-24 pb-9">
        <div className="relative flex items-center justify-between ">
          <div className="contener flex ">
            <a href="#" className="text-4xl filter font-semibold font-serif">Good morning !</a>
          </div>
          <div className="">
            <div className="hidden md:flex space-x-16 ">
              <Link href="/about" className="transition duration-800 hover:text-xl">About</Link>
              <Link href="/experience" className="transition duration-300 hover:text-xl">Experience</Link>
              <Link href="/gallery" className="transition duration-300 hover:text-xl">Gallery</Link>
              <Link href="/contact" className="transition duration-300 hover:text-xl">Contact</Link>

            </div>


            <div className="block md:hidden py-3 px-4 mx-2 opacity-100 dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 bg-opacity-95 p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href="/about" className="transition duration-800 hover:text-xl">About</Link></li>
                <li><Link href="/Experience" className="transition duration-300 hover:text-xl">Experience</Link></li>
                <li><Link href="/gallery" className="transition duration-300 hover:text-xl">Gallery</Link></li>
                <li><Link href="/contact" className="transition duration-300 hover:text-xl">Contact</Link></li>

              </ul>
            </div>
          </div>


        </div>

      </nav>
      {/* Hero section*/}
      <div className="mx-auto container flex flex-col-reverse p-20 ml-10 space-x-4 md:-ml-11 md:flex-row">
        <div className="flex flex-col mx-auto mt-28 mb-7 space-y-10 justify-start min-w-min">
          <p className="  text-sm text-purplish -mb-10">I&#39;m</p>
          <p className="  text-7xl  " >DANMARK MUTAI</p>
          <p className=" min-w-max text-4xl  " >Front-end dev.</p>
          <p className=" max-w-md text-base" >I design and develop good web sites. I also work well with a team, a quick learner and work to solve
                    problems for campanies. In general i&#39;m an all-rounded guy with a passion for coding.</p>
        </div>
        <div className="justify-center">
            <img src="" alt="" className="mx-auto max-w-xs max-h-xs mt-28  w-72 h-72 shadow-2xl shadow-slate-400 justify-center rounded-full bg-white" />
        </div>
      </div>
      <div className="flex container justify-center mx-auto ">
        <hr className=" w-1/2 p-4" />
      </div>
    </div>
    </>
  )
}

export default Home
