import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const navigationData = [
  {
    name: "Home",
    path: "/home",
    id: 1,
  },
  {
    name: "About Us",
    path: "/about-us",
    id: 2,
  },
  {
    name: "Services",
    path: "/services",
    id: 3,
  },
  {
    name: "Contact",
    path: "/contact",
    id: 4,
  },
  {
    name: "Blog",
    path: "/blog",
    id: 5,
  },
];

function Nav() {

  const [open, setOpen] = useState(false)
  const links = navigationData.map((route) => (
    <Link key={route.id} route={route}></Link>))

  return (
    <nav className="flex mx-10 justify-between mt-5">
      <span className="flex gap-2" onClick={() => setOpen(!open)}>
        {open ? <X className="lg:hidden"></X> : <Menu className="lg:hidden"></Menu>}
        
        <h3>My navbar</h3>
      </span>
      <ul className={`lg:hidden absolute bg-amber-300 duration-1000 ${open ? 'top-8' : '-top-40'}`}>
        {
          links
        }
      </ul>
      <ul className="lg:flex gap-5 hidden">
        {
          links
        }
      </ul>
      {/* <ul className="flex">
        {navigationData.map((route) => (
          <li className="mr-10">
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul> */}

      {/* <ul className='flex'>
        <li className='mr-10'><a href="/">home</a></li>
        <li className='mr-10'><a href="/about">about</a></li>
        <li className='mr-10'><a href="/blog">blog</a></li>
      </ul> */}
      <button>Sign in</button>
    </nav>
  );
}

export default Nav;
