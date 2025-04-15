import React from "react";
import Link from "./Link";

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
  return (
    <nav>
      <ul className="flex justify-around mt-7">
        {
          navigationData.map(route => <Link key={route.id} route={route}></Link>)
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
    </nav>
  );
}

export default Nav;
