import { useEffect, useState } from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import LogoWhite from '../../../../public/aeroplane.png';
// import Logo from '../../../../public/travel.png';


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(location.pathname === "/");
//   const { logOut } = useContext(AuthContext);

console.log(scrolling);
  const user = true

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Update the isHomePage state when the location changes
  useEffect(() => {
    setIsHomePage(location.pathname === "/");
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 w-full z-10  ${
        scrolling ? "bg-white z-10" : "bg-transparent"
      } duration-300`}
    >
      <div className="navbar max-w-[1520px] px-5 py-5 md:py-0 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="lg:hidden ml-0 cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <HiMiniBars3CenterLeft
                className={`${
                  isHomePage || scrolling ? "text-black" : "text-white"
                }`}
                size={25}
              />
            </label>
            {/* Mobile Menu */}
            <div
              className={`${
                open ? "top-10 left-5 lg:hidden" : "top-10 -left-[500px]"
              } bg-white rounded px-8 py-10 shadow-2xl border text-lg absolute z-10 transition-all duration-500`}
            >
              <ul className="w-48 h-52 flex flex-col justify-between items-center">
                <li className="group w-full">
                  <Link to="/">
                    Home
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-[#ce5a25]   mt-[1px]"></span>
                  </Link>
                </li>
                <li className="group w-full">
                  <Link to="/college">
                    About
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-[#ce5a25]   mt-[1px]"></span>
                  </Link>
                </li>
                <li className="group w-full">
                  <Link to="/admission">
                  Destination
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-[#ce5a25]  mt-[1px]"></span>
                  </Link>
                </li>
                <li className="group w-full">
                  <Link>
                    Contact
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 [#ce5a25]   mt-[1px]"></span>
                  </Link>
                </li>
              </ul>
            </div>
            {/* Mobile Menu END */}
          </div>
          <Link>
            <img
              className="max-h-14 hidden sm:block"
              src={isHomePage || scrolling ? LogoWhite : LogoWhite}
              alt="Traveller Logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul
            className={`flex gap-6 ${
              scrolling || location.pathname == "/"
                ? "text-black"
                : "text-white"
            }`}
          >
            <li className="group">
              <Link to="/">
                Home
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-[#ce5a25] mt-[1px]"></span>
              </Link>
            </li>
            <li className="group">
              <Link to="/college">
                About
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-[#ce5a25] mt-[1px]"></span>
              </Link>
            </li>
            <li className="group">
              <Link to="/admission">
              Destination
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-[#ce5a25] mt-[1px]"></span>
              </Link>
            </li>
            <li className="group">
              <Link>
                Contact
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-[#ce5a25] mt-[1px]"></span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Profile</a>
                </li>
               
                <li>
                  <Link onClick={() => logOut()}>Logout</Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button
                className={` px-10 py-3 font-semibold hover:bg-gray-800 hover:text-white hover:-outline-offset-8  hover:outline-primary outline rounded-md duration-300 hover:rounded-none ${
                  isHomePage || scrolling
                    ? "outline-gray-800"
                    : "outline-primary text-white"
                }`}
              >
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;