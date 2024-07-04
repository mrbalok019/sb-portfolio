const Nav = () => {
  const menu = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Skillset</a>
      </li>
      <li>
        <a>Projects</a>
      </li>
      <li>
        <a>Education</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );

  return (
    <div className="max-w-sm h-full my-20 mx-10 rounded-3xl border-2 border-black">
      <div className="card bg-base-100 w-full shadow-xl">
        <h1 className="text-3xl font-semibold text-black text-center ">
          My Portfolio
        </h1>
        <h1 className="text-xl font-bold text-orange-600 text-center mb-10">
          Web Developer
        </h1>
        <figure className="mx-8">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="SB"
          />
        </figure>
        <div className="card-body">
          <div className="navbar  flex-col">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  {menu}
                </ul>
              </div>
              <a className="btn btn-ghost text-xl">Portfolio</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-dropdown px-1">{menu}</ul>
            </div>
            <div className="navbar-end">
              <a className="btn">Button</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
