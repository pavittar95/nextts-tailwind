import React from "react";
import Link from "next/link";
import HeaderCartIcon from "./headerCartIcon";

function RightHeader() {
  return (
    <div className="container-fluid flex">
      <div className="w-full md:block md:w-auto">
        <ul className="flex flex-col xs:flex-row mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium items-center xs:mt-0">
          <li className="xs:mr-1">
            <Link href="/">
              <a className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Login
              </a>
            </Link>
          </li>
          <li>
            <HeaderCartIcon />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default React.memo(RightHeader)