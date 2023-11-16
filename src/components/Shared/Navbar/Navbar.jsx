import { useEffect, useState } from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import LogoWhite from '../../../../public/aeroplane.png';
import useAuth from "../../../hooks/useAuth";
// import Logo from '../../../../public/travel.png';


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(location.pathname === "/");
  const { user, logOut} = useAuth()

  console.log(user?.photoURL);



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
        {user && (
            <img
              className="rounded-full me-4 w-12 h-12"
              src={user?.photoURL}
              alt=""
            />
          )}
         
          {user ? (
            <button
              onClick={logOut}
              className="btn btn-[#ce5a25]  text-white font-bold"
            >
              LogOut
            </button>
          ) : (
            <Link to="/login">
              <p className="bg-[#ce5a25] py-3 px-6 rounded-lg text-white font-bold me-4">Login</p>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;