import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoEyeOutline, IoEyeSharp } from 'react-icons/io5';

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header>
      {pathname === '/' ? (
        <Link to="/viewForm">
          <IoEyeOutline />
        </Link>
      ) : (
        <Link to="/">
          <IoEyeSharp />
        </Link>
      )}
    </header>
  );
}
