import Nav from "../../Components/Nav";

const Home = () => {
  return (
    <div className="">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-circle btn-primary drawer-button">
                X
          </label>
        </div>
        <div className="drawer-side max-w-sm max-h-screen">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className=""
          ></label>
          <ul className="menu  min-h-full w-full p-4">
            {/* Sidebar content here */}
          
           <Nav></Nav>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
