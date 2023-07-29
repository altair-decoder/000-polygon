import { ConnectButton } from "@rainbow-me/rainbowkit"
import styles from "../styles/Home.module.css"
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useMediaPredicate } from "react-media-hook";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Mint", href: "/mint" },
  // { text: "About", href: "/about" },
  // { text: "Roadmap", href: "/roadmap" },
  // { text: "Faq", href: "/faq" },
];
const Navbar = () => {
  const mediaCheck = useMediaPredicate("(min-width: 767px)");
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={styles.navBar}>
        <Link href={"/"}>
            <div className="flex items-center ">
                    <div className="text-white font-bold font-Rubik lg:text-2xl sm:text-lg">
                        DRRRTTT
                    </div>
                </div>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${!mediaCheck && navActive ? "active" : ""} nav__menu-list xl:gap-20 lg:gap-16 md:gap-8 test-white`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
          
          <ConnectButton
                    accountStatus={{
                        smallScreen: "address",
                        largeScreen: "address",
                    }}
                />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;