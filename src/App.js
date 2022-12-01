import "./App.css";
import NavBar from "./Components/NavBar";
import vrPic from "./images/mobile/image-interactive.jpg";
import vrPicdesk from "./images/desktop/image-interactive.jpg";
import earth from "./images/mobile/image-deep-earth.jpg";
import earthdesk from "./images/desktop/image-deep-earth.jpg";
import arcade from "./images/mobile/image-night-arcade.jpg";
import arcadedesk from "./images/desktop/image-night-arcade.jpg";
import soccer from "./images/mobile/image-soccer-team.jpg";
import soccerdesk from "./images/desktop/image-soccer-team.jpg";
import car from "./images/mobile/image-grid.jpg";
import cardesk from "./images/desktop/image-grid.jpg";
import road from "./images/mobile/image-from-above.jpg";
import roaddesk from "./images/desktop/image-from-above.jpg";
import cloud from "./images/mobile/image-pocket-borealis.jpg";
import clouddesk from "./images/desktop/image-pocket-borealis.jpg";
import curiosity from "./images/mobile/image-curiosity.jpg";
import curiositydesk from "./images/desktop/image-curiosity.jpg";
import fisheye from "./images/mobile/image-fisheye.jpg";
import fisheyedesk from "./images/desktop/image-fisheye.jpg";
import logo from "./images/logo.svg";
import facebook from "./images/icon-facebook.svg";
import twitter from "./images/icon-twitter.svg";
import instagram from "./images/icon-instagram.svg";
import pintesrest from "./images/icon-pinterest.svg";

function App() {
  return (
    <main className=" ">
      <div className=" container lg:w-[1440px] mx-auto md:w-[900px] w-[375px] ">
        <header className=' h-[700px] md:h-[400px] lg:h-[700px]  bg-contain bg-no-repeat md:bg-[url("./images/desktop/image-hero.jpg")]     bg-[url("./images/mobile/image-hero.jpg")]'>
          <NavBar />
          <div className=" border-2 mt-[8rem] lg:absolute lg:left-[15%] border-White w-[85%] l md:mt-10 lg:w-[30%]  md:w-[40%] mx-auto px-4 py-4 ">
            <h1 className="  uppercase lg:text-[5rem] lg:leading-[5rem] text-White leading-[3rem] text-[3rem] font-josephin font-[300] ">
              immersive experiences <br /> that <br className=" md:hidden" />{" "}
              deliver
            </h1>
          </div>
        </header>
        <section className="  relative mt-10  bg-White">
          <picture>
            <source media="(min-width:1024px )" srcset={vrPicdesk} />
            <img
              src={vrPic}
              alt=""
              className=" w-[80%] lg:w-[60%] lg:mx-0 lg:ml-20  mx-auto "
            />
          </picture>
          <div className=" lg:absolute lg:flex lg:flex-col lg:items-start lg:px-20 bg-white lg:top-[45%] lg:left-[50%] top-[37%]  lg:w-[45%] lg:py-20  mt-10 gap-4 flex flex-col items-center">
            <h2 className="  text-3xl text-center lg:text-4xl  lg:text-start   font-josephine text-Black uppercase font-[300] ">
              The leader in interactive VR
            </h2>
            <p className=" text-center lg:text-start text-VeryDarkGray lg:w-[92%] w-[80%] ">
              {" "}
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </section>
        {/* 3rd section */}
        <section className=" bg-white mt-20 lg:mt-[12rem] flex flex-col items-center">
          <div className=" lg:flex lg:justify-between lg:items-center w-[92%] ">
            <h2 className=" font-josephine uppercase  text-Black text-3xl">
              Our creations
            </h2>
            <button className=" hover:bg-black hover:text-White  mt-8 lg:mt-0 hidden lg:inline-block  border-2 border-Black px-8 py-1 uppercase font-Atala tracking-widest text-Black ">
              See all
            </button>
          </div>
          <div className=" lg:grid lg:grid-cols-4 mt-8 flex flex-col  w-[97%]  gap-4">
            <div className=" relative hover:text-Black">
              <picture>
                <source media="(min-width:1024px )" srcset={earthdesk} />
                <img src={earth} className="   w-[75%] mx-auto" alt="" />
              </picture>
              <p className="absolute  font-josephine text-xl leading-5 font-[300] uppercase  lg:top-[80%] lg:left-[20%]  top-[50%] md:left-[7rem] left-[3.5rem] text-white ">
                Deep <br /> earth
              </p>
            </div>
            <div className=" relative  ">
              <picture>
                <source media="(min-width:1024px )" srcset={arcadedesk} />
                <img src={arcade} alt="" className="  w-[75%] mx-auto" />
              </picture>
              <p className="absolute font-josephine text-xl leading-5 font-[300] uppercase lg:top-[80%] lg:left-[20%]  top-[50%] md:left-[7rem] left-[3.5rem] text-white ">
                Night <br /> arcade
              </p>
            </div>
            <div className=" relative">
              <picture>
                <source media="(min-width:1024px )" srcset={soccerdesk} />
                <img src={soccer} alt="" className="  w-[75%] mx-auto" />
              </picture>
              <p className="absolute font-josephine text-xl leading-5 font-[300] uppercase  lg:top-[80%] lg:left-[20%]  top-[50%] md:left-[7rem] left-[3.5rem] text-white ">
                soccer
                <br /> team vr
              </p>
            </div>
            <div className=" relative">
              <picture>
                <source media="(min-width:1024px )" srcset={cardesk} />
                <img
                  src={car}
                  alt=""
                  className=" grayscale-[10%] w-[75%] mx-auto"
                />
              </picture>
              <p className="absolute font-josephine text-xl leading-5 font-[300] uppercase lg:top-[80%] lg:left-[20%]  top-[50%] md:left-[7rem] left-[3.5rem] text-white ">
                the
                <br /> grid
              </p>
            </div>
            <div className="  relative">
              <picture className="">
                <source media="(min-width:1024px )" srcset={roaddesk} />
                <img
                  src={road}
                  alt=""
                  className="  grayscale-[10%] w-[75%] mx-auto"
                />
              </picture>
              <p className="  lg:top-[80%] lg:left-[20%]  absolute font-josephine text-xl leading-5 font-[300] uppercase  top-[50%] md:left-[7rem] left-[3.5rem] text-white ">
                FROM up
                <br />
                above vr
              </p>
            </div>
            <div className=" relative">
              <picture>
                <source media="(min-width:1024px )" srcset={clouddesk} />
                <img
                  src={cloud}
                  alt=""
                  className=" grayscale-[10%] w-[75%] mx-auto"
                />
              </picture>
              <p className=" lg:top-[80%] lg:left-[20%]  absolute font-josephine text-xl leading-5 font-[300] uppercase  top-[50%] md:left-[7rem] left-[3.5rem] text-white ">
                pocket
                <br />
                borealis
              </p>
            </div>
            <div className=" relative">
              <picture>
                <source media="(min-width:1024px )" srcset={curiositydesk} />
                <img
                  src={curiosity}
                  alt=""
                  className=" grayscale-[10%] w-[75%] mx-auto"
                />
              </picture>
              <p className=" lg:top-[80%] lg:left-[20%]  absolute font-josephine text-xl leading-5 font-[300] uppercase  top-[50%] md:left-[7rem] left-[3.5rem] text-white ">
                the
                <br />
                curiosity
              </p>
            </div>
            <div className=" relative">
              <picture>
                <source media="(min-width:1024px )" srcset={fisheyedesk} />
                <img
                  src={fisheye}
                  alt=""
                  className=" grayscale-[10%] w-[75%] mx-auto"
                />
              </picture>
              <p className=" lg:top-[80%] lg:left-[20%]  absolute font-josephine text-xl leading-5 font-[300] uppercase  top-[50%] md:left-[7rem] left-[3.5rem] text-white ">
                make it
                <br />
                fisheye
              </p>
            </div>
          </div>
          <button className="  hover:bg-black hover:text-White mt-8 lg:hidden  border-2 border-Black px-8 py-1 uppercase font-Atala tracking-widest text-Black ">
            See all
          </button>
        </section>
        {/* end 3rd section */}
        <footer className=" mt-10 lg:grid lg:grid-cols-2 bg-Black flex flex-col items-center py-10 ">
          <div className=" lg:pl-20">
            <img src={logo} alt="" />
            <ul className=" lg:flex-row mt-5 font-Atala text-white flex flex-col items-center gap-4">
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
          <div className="lg:pr-20">
            <div className=" flex mt-10 gap-4 lg:mt-0   lg:justify-end justify-center py-5 mb-5">
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
            <p className=" lg:text-end  text-DarkGray">
              © 2021 Loopstudios. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default App;
