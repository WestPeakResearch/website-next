"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.png";
import {useState} from "react";
import CloseIcon from "@/images/close.svg";

interface ListLinkProps {
  href: string;
  children: React.ReactNode;
}

const ListLink = (props: ListLinkProps) => (
  <li>
    <Link
      href={props.href}
      className="uppercase font-bold text-lg md:text-xl text-white hover:text-[#a5cbf1]"
    >
      {props.children}
    </Link>
  </li>
);

const Links = () => (
  <ul className="flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:space-x-8">
    <ListLink href="/about">About</ListLink>
    <ListLink href="/team">Team</ListLink>
    <ListLink href="/research">Research</ListLink>
    <ListLink href="/events">Events</ListLink>
    <ListLink href="/hiring">Hiring</ListLink>
    <ListLink href="/placements">Placements</ListLink>
    <ListLink href="/contact">Contact</ListLink>
  </ul>
);

function MinimalBar(props: {show: boolean; onClick: () => void}) {
  if (!props.show) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-secondary h-20 flex items-center justify-between px-4 md:hidden">
        <div className="flex items-center">
          <a href="/">
            <Image src={logo} alt="logo" height={96} width={96} />
          </a>
        </div>
      <button onClick={props.onClick} className="text-white text-lg font-bold uppercase hover:text-[#a5cbf1] cursor-pointer">
        <span>Menu</span>
      </button>
    </div>
  );
}

function FullBar() {
  return (
    <div className="hidden md:block fixed w-full z-50 bg-secondary">
      <div className="flex items-center justify-between px-6 py-2">
        <div className="w-24 ml-2.5 pl-2 shrink-0 mb-0.5">
          <a href="/">
            <Image src={logo} alt="logo" />
          </a>
        </div>
        <div className="flex gap-4">
          <Links />
        </div>
      </div>
    </div>
  );
}

function NavMobileMenu(props: {show: boolean; onClick: () => void}) {
  if (!props.show) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-screen z-50 bg-secondary flex flex-col p-6 md:hidden">
      <button onClick={props.onClick} className="self-end cursor-pointer">
        <Image src={CloseIcon} alt="close" width={24} height={24} />
      </button>
      <div className="flex flex-col items-center">
        <Links />
      </div>
    </div>
  );
}

export default function Navbar() {
  const [toggled, setToggled] = useState(false);

  function handleMenuClick() {
    setToggled(true);
  }

  function handleCloseButtonClick() {
    setToggled(false);
  }

  return (
    <div>
      <MinimalBar show={!toggled} onClick={handleMenuClick} />
      <FullBar />
      <NavMobileMenu show={toggled} onClick={handleCloseButtonClick} />
    </div>
  );
}
