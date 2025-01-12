import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <Link to="/" onClick={()=> setOpenMenu(false)} className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" w={32} h={32} alt="Logo" />
        <span>Think And Code</span>
      </Link>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* MOBILE MENU BUTTON */}
        <div
          className="cursor-pointer text-2xl"
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          {openMenu ? "x" : "≡"}
        </div>
        {/* MOBILE LINK LIST */}
        <div className={`w-full h-screen flex flex-col items-center justify-center gap-5 text-lg font-medium absolute top-16 transition-all ease-in-out ${openMenu ? "-right-0" : "-right-[100%]"}`}>
            <Link to="/" onClick={()=> setOpenMenu(false)}>Home</Link>
            <Link to="/posts" onClick={()=> setOpenMenu(false)}>Trending</Link>
            <Link to="/posts" onClick={()=> setOpenMenu(false)}>Most Popular</Link>
            <Link to="/about" onClick={()=> setOpenMenu(false)}>About</Link>
            <Link to="/login" onClick={()=> setOpenMenu(false)}>
                <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login 👋</button>
            </Link>
        </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/posts">Trending</Link>
        <Link to="/posts">Most Popular</Link>
        <Link to="/about">About</Link>
        <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login 👋</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
