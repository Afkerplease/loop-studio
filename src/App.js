import "./App.css";
import NavBar from "./Components/NavBar";
import vrPic from "./images/mobile/image-interactive.jpg";
import earth from "./images/mobile/image-deep-earth.jpg";
import arcade from "./images/mobile/image-night-arcade.jpg";
import soccer from "./images/mobile/image-soccer-team.jpg";
import car from "./images/mobile/image-grid.jpg";
import road from "./images/mobile/image-from-above.jpg";
import cloud from "./images/mobile/image-pocket-borealis.jpg";
import curiosity from "./images/mobile/image-curiosity.jpg";
import fisheye from "./images/mobile/image-fisheye.jpg";
import logo from "./images/logo.svg";
import facebook from "./images/icon-facebook.svg";
import twitter from "./images/icon-twitter.svg";
import instagram from "./images/icon-instagram.svg";
import pintesrest from "./images/icon-pinterest.svg";

function App() {
  return (
    <main className=" ">
      <div className=" container mx-auto md:w-[900px] w-[375px] ">
        <header className=' h-[700px] md:h-[400px]  bg-contain bg-no-repeat md:bg-[url("./images/desktop/image-hero.jpg")]     bg-[url("./images/mobile/image-hero.jpg")]'>
          <NavBar />
          <div className=" border-2 mt-[8rem] border-White w-[85%] md:mt-20 md:w-[40%] mx-auto px-4 py-4 ">
            <h1 className="  uppercase text-White leading-[3rem] text-[3rem] font-josephin font-[300] ">
              immersive experiences <br /> that <br className=" md:hidden" />{" "}
              deliver
            </h1>
          </div>
        </header>
        <section className=" mt-10 bg-White">
          <picture>
            <source media="(min-width: )" srcset="" />
            <img src={vrPic} alt="" className=" w-[80%] mx-auto " />
          </picture>
          <div className=" mt-10 gap-4 flex flex-col items-center">
            <h2 className="  text-3xl text-center   font-josephine text-Black uppercase font-[300] ">
              The leader in interactive VR
            </h2>
            <p className=" text-center text-VeryDarkGray w-[80%] ">
              {" "}
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </section>
        {/* 3rd section */}
        <section className=" bg-white mt-20 flex flex-col items-center">
          <div>
            <h2 className=" font-josephine uppercase  text-Black text-3xl">
              Our creations
            </h2>
            <button className="hidden">See all</button>
          </div>
          <div className=" mt-8 flex flex-col  gap-4">
            <div className=" relative hover:text-Black">
              <picture>
                <source media="(min-width: )" srcset="" />
                <img
                  src={earth}
                  className=" cursor-pointer hover:contrast-[20%] w-[75%] mx-auto"
                  alt=""
                />
              </picture>
              <p className="absolute  font-josephine text-xl leading-5 font-[300] uppercase  top-[50%] md:left-[7rem] left-[3.5rem] text-white ">
                Deep <br /> earth
              </p>
            </div>
            <div className=" relative  ">
              <picture>
                <source media="(min-width: )" srcset="" />
                <img src={arcade} alt="" className="  w-[75%] mx-auto" />
              </picture>
              <p className="absolute font-josephine text-xl leading-5 font-[300] uppercase  top-[50%] md:left-[7rem] left-[3.5rem] text-white ">
                Night <br /> arcade
              </p>
            </div>
            <div className=" relative">
              <picture>
                <source media="(min-width: )" srcset="" />
                <img src={soccer} alt="" className="  w-[75%] mx-auto" />
              </picture>
              <p className="absolute font-josephine text-xl leading-5 font-[300] uppercase  top-[50%] md:left-[7rem] left-[3.5rem] text-white ">
                soccer
                <br /> team vr
              </p>
            </div>
            <div className=" relative">
              <picture>
                <source media="(min-width: )" srcset="" />
                <img
                  src={car}
                  alt=""
                  className=" grayscale-[10%] w-[75%] mx-auto"
                />
              </picture>
              <p className="absolute font-josephine text-xl leading-5 font-[300] uppercase  top-[50%] md:left-[7rem] left-[3.5rem] text-white ">
                the
                <br /> grid
              </p>
            </div>
            <div className=" relative">
              <picture>
                <source media="(min-width: )" srcset="" />
                <img
                  src={road}
                  alt=""
                  className=" grayscale-[10%] w-[75%] mx-auto"
                />
              </picture>
              <p className="absolute font-josephine text-xl leading-5 font-[300] uppercase  top-[50%] md:left-[7rem] left-[3.5rem] text-white ">
                FROM up
                <br />
                above vr
              </p>
            </div>
            <div className=" relative">
              <picture>
                <source media="(min-width: )" srcset="" />
                <img
                  src={cloud}
                  alt=""
                  className=" grayscale-[10%] w-[75%] mx-auto"
                />
              </picture>
              <p className="absolute font-josephine text-xl leading-5 font-[300] uppercase  top-[50%] md:left-[7rem] left-[3.5rem] text-white ">
                pocket
                <br />
                borealis
              </p>
            </div>
            <div className=" relative">
              <picture>
                <source media="(min-width: )" srcset="" />
                <img
                  src={curiosity}
                  alt=""
                  className=" grayscale-[10%] w-[75%] mx-auto"
                />
              </picture>
              <p className="absolute font-josephine text-xl leading-5 font-[300] uppercase  top-[50%] md:left-[7rem] left-[3.5rem] text-white ">
                the
                <br />
                curiosity
              </p>
            </div>
            <div className=" relative">
              <picture>
                <source media="(min-width: )" srcset="" />
                <img
                  src={fisheye}
                  alt=""
                  className=" grayscale-[10%] w-[75%] mx-auto"
                />
              </picture>
              <p className="absolute font-josephine text-xl leading-5 font-[300] uppercase  top-[50%] md:left-[7rem] left-[3.5rem] text-white ">
                make it
                <br />
                fisheye
              </p>
            </div>
          </div>
          <button className=" mt-8  border-2 border-Black px-8 py-1 uppercase font-Atala tracking-widest text-Black ">
            See all
          </button>
        </section>
        {/* end 3rd section */}
        <footer className=" mt-10 bg-Black flex flex-col items-center py-10 ">
          <div>
            <img src={logo} alt="" />
            <ul className=" mt-5 font-Atala text-white flex flex-col items-center gap-4">
              <li>
                <a href="#" className=" hover:border-b-2 border-White">
                  About
                </a>
              </li>
              <li>
                <a href="#" className=" hover:border-b-2 border-White">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className=" hover:border-b-2 border-White">
                  Events
                </a>{" "}
              </li>
              <li>
                <a href="#" className=" hover:border-b-2 border-White">
                  Products
                </a>{" "}
              </li>
              <li>
                <a href="#" className=" hover:border-b-2 border-White">
                  Support
                </a>{" "}
              </li>
            </ul>
          </div>
          <div>
            <div className=" flex mt-10 gap-4 justify-center py-5 mb-5">
              <div className=" cursor-pointer border-b-2 border-Black pb-2 hover:border-White">
                {" "}
                <img src={facebook} alt="" />{" "}
              </div>
              <div className=" cursor-pointer border-b-2 border-Black pb-2 hover:border-White">
                <img src={twitter} alt="" />
              </div>
              <div className=" cursor-pointer border-b-2 border-Black pb-2 hover:border-White">
                <img src={pintesrest} alt="" />
              </div>
              <div className=" cursor-pointer border-b-2 border-Black pb-2 hover:border-White">
                <img src={instagram} alt="" />
              </div>
            </div>
            <p className="  text-DarkGray">
              © 2021 Loopstudios. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default App;
