"use client";
import Link from "next/link";
import "./header.css";
import Image from "next/image";
import logo from "../public/logo.svg";

export default function Header() {
  return (
    
    <div className="container mx-auto header w-full ">
      <Link href="/">
        <Image src={logo} alt="Logo"></Image>
      </Link>
      <ul className="">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/offer">What We Offer?</Link>
        </li>
        <li>
          
          <Link href="/explore">Explore Colombo</Link>
        </li>
        <li>
          <Link href="/contact">Contact us</Link>
        </li>
      </ul>
    </div>
  );
}
