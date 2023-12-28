import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoEyeOutline } from 'react-icons/io5';
import { CiViewList } from 'react-icons/ci';

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="text-2xl py-3">
      <div className="flex flex-row items-center justify-evenly">
        <h1 className="">JooheeKim's survey</h1>
        <div className="p-2 rounded-full hover:text-brand hover:bg-slate-50">
          {pathname === '/' ? (
            <Link to="/viewForm">
              <IoEyeOutline />
            </Link>
          ) : (
            <Link to="/">
              <CiViewList />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
