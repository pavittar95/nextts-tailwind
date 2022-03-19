import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderAnnouncement from "../common/headerAnnouncement";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";

export default function Header() {
  return (
    <div className="sticky top-0 z-50">
      <HeaderAnnouncement />
      <nav className="w-full flex flex-wrap items-center justify-center bg-gray-100 shadow-lg">
        <div className="w-full lg:w-4/5">
          <div className="flex flex-wrap items-center justify-between px-6 py-4">
            <LeftHeader />
            <div className="container-fluid">
              <Link href="/">
                <a className="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1">
                  <Image
                    src="/mdb-transaprent-noshadows.png"
                    height={20}
                    width={40}
                    alt=""
                    loading="lazy"
                  />
                </a>
              </Link>
            </div>
            <RightHeader />
          </div>
        </div>
      </nav>
    </div>
  );
}
