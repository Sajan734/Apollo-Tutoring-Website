import Image from "next/image";
import { NavBar } from "@/app/components/navbar";
import { Carousel_Component } from "./components/carousel";
export default function Home() {
  return (
    <main className="bg-white">
      <NavBar />
      <div className="relative h-screen bg-standard_navy overflow-hidden flex flex-col items-center">
        <div className="text-center">
          <h1 className="pt-48 md:pt-32 mx-10 font-headFont text-white text-6xl lg:text-8xl">
            Time to Get <span className="text-standard_teal font-bold">Ahead</span> of the Game
          </h1>
          <h2 className="py-10 mx-10 font-paraFont text-white text-xl sm:text-3xl">
            Get <span className="font-bold text-standard_teal">FREE</span> tutoring for Math, Physics, and Chemistry today!
          </h2>
        </div>
        <div className="relative w-full flex-grow">
          <img src="/images/Untitled_design_1.jpeg" className="absolute bottom-0 top-7 left-0 right-0 mx-auto object-cover object-top overflow-clip w-2/3"></img>
        </div>
      </div>
      <div className="bg-nav_colour">
        <div className="w-full inline-flex flex-nowrap h-auto bg-nav_colour py-6 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_li]:font-paraFont animate-infinite-scroll">
            <li>
              <span>Creativity</span>
            </li>
            <li>
              <span>Knowledge</span>
            </li>
            <li>
              <span>Potential</span>
            </li>
            <li>
              <span>Unlocked</span>
            </li>
            <li>
              <span>Passion</span>
            </li>
            <li>
              <span>Determination</span>
            </li>
            <li>
              <span>Expertise</span>
            </li>
            <li>
              <span>Mastery</span>
            </li>
            <li>
              <span>Cognition</span>
            </li>
            <li>
              <span>Commitment</span>
            </li>
            <li>
              <span>Patience</span>
            </li>

          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_li]:font-paraFont animate-infinite-scroll" aria-hidden="true">
            <li>
              <span>Creativity</span>
            </li>
            <li>
              <span>Knowledge</span>
            </li>
            <li>
              <span>Potential</span>
            </li>
            <li>
              <span>Unlocked</span>
            </li>
            <li>
              <span>Passion</span>
            </li>
            <li>
              <span>Determination</span>
            </li>
            <li>
              <span>Expertise</span>
            </li>
            <li>
              <span>Mastery</span>
            </li>
            <li>
              <span>Cognition</span>
            </li>
            <li>
              <span>Commitment</span>
            </li>
            <li>
              <span>Patience</span>
            </li>
          </ul>
        </div>
      </div>
      <div id="about-us" className="grid grid-cols-1 lg:grid-cols-3 lg:mx-10 my-10">
        <div className="lg:col-span-2 px-5">
          <h2 className="font-headFont text-nav_colour text-5xl text-center mb-5">About Us</h2>
          <p className="font-paraFont text-black mx-8 ">Learning course content can be difficult for many students, especially with their commitments outside of school. Students in high school need to balance their academics, extracurriculars, and a job all at once, which means that they often need to get ahead on course material before the school year begins. We offer online lessons and homework help to high school students to help jump-start their knowledge on both math and science courses. Our aim is to help students from Grades 9 to 11 with the transition from one grade to another, and facilitate the creation of strong technical skills to help them succeed. </p>
        </div>
        <div>
          <img src="images/orange_planet.png" className=" px-5 max-w-full w-96"/>
        </div>
      </div>
      <div className="bg-standard_navy py-5">
      <h2 className="font-headFont text-standard_white text-5xl text-center mb-5">Testimonials</h2>
        <Carousel_Component />
      </div>
    </main>

  );
}
