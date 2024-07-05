import { ImCross } from "react-icons/im";
import Nav from "../../Components/Nav";
import { TiThMenu } from "react-icons/ti";
import Banner from "../../Components/Banner/Banner";
import About from "../../Components/About";
import Skillset from "../../Components/Skillset";

import Footer from "../../Components/Footer";
import Education from "../../Components/Education";
import ContactUs from "../../Components/ContactUs";
import Projects from "../../Components/Projects";

const Home = () => {
  return (
    <div className="bg-gray-200">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Page content here */}
            <label
                htmlFor="my-drawer-2"
                className="btn bg-black drawer-button lg:hidden rounded-r-lg 
                text-orange-500 left-0 text-sm p-3 z-[2] fixed top-1/4"
            >
            <TiThMenu />
          </label>
        
            <div id="home">
                <Banner/>
            </div>
        
            <div id="about" data-aos="fade-up"
             data-aos-duration="1000">
                <About/>
            </div>
        
            <div id="skillset" data-aos="fade-up"
             data-aos-duration="1000">
                <Skillset/>
            </div>
            <div id="projects" data-aos="fade-up"
             data-aos-duration="1000">
                <Projects/>
            </div>
            <div id="education" data-aos="fade-up"
             data-aos-duration="1000">
                <Education/>
            </div>
            <div id="contact" data-aos="fade-up"
             data-aos-duration="1000">
                <ContactUs/>
            </div>

            <div className="w-full">
                <Footer></Footer>
            </div>

        </div>
        <div className="z-[10] drawer-side max-w-72 lg:max-w-sm max-h-screen">
        
          <ul className="menu min-h-full w-full lg:p-4">
            {/* Sidebar content here */}
           
            <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay text-right btn 
            btn-circle lg:hidden absolute z-[10] right-5 text-orange-500"
             > 
                <ImCross/> 
             </label>


            <Nav />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
