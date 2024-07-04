import { ImCross } from "react-icons/im";
import Nav from "../../Components/Nav";

const Home = () => {
  return (
    <div className="bg-gray-200">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side max-w-sm max-h-screen">
        
          <ul className="menu min-h-full w-full p-4">
            {/* Sidebar content here */}
            <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay text-right btn 
            btn-circle lg:hidden absolute z-[10] right-5 text-orange-500"
          > <ImCross/> </label>
            <Nav />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
