import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Nav = () => {

  const links = [
    { text: 'Home', to: '/' },
    { text: 'About', to: '/about' },
  ];

  return (
    <nav className="bg-white-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
            <img
                className="h-10 w-10 rounded-full"
                src="embold-logo.svg"
                alt="embold logo"
                style={{width: 90}}   
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {links.map((link) => (
                  <Link
                    key={link.text}
                    to={link.to}
                    className="px-3 py-2 rounded-md text-sm font-medium ml-4"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
            <button className="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <div className="flex flex-col text-sm">
              <span>RENE MCKELVEY</span>
              <spn>Account Settings</spn>
              </div>
            </button>

              {/* Profile dropdown */}
              <div className="ml-3 relative">
                <div>                 
                    <AccountCircleIcon fontSize="large"/>
                </div>
                {/*  
                Profile dropdown panel, show/hide based on dropdown state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              */}

              </div>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Nav;
