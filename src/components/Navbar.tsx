import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoEyeOutline, IoEyeSharp } from 'react-icons/io5';

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className=" ">
      <div className="flex text-2xl justify-around">
        <h1 className="">
          <img src="https://www.classum.com/images/Logo-type.png" /> - survey
        </h1>
        <div>
          {pathname === '/' ? (
            <Link to="/viewForm">
              <IoEyeOutline />
            </Link>
          ) : (
            <Link to="/">
              <IoEyeSharp />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
