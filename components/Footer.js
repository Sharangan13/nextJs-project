"use client";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import logo from "../public/logo.svg";

export default function Footer() {
  return (
    
    <div className="w-full flex justify-between items-center container mx-auto py-5">
        <div>
      <Link href="/">
        <Image src={logo} alt="Logo"></Image>
      </Link>
      </div>

      <div>
        <p>© 2024 RUJ Sri Lanka. All rights reserved.</p>
      </div>

      <div className="flex">
      <FaFacebook className="text-4xl mx-2"/>
      <FaInstagram className="text-4xl mx-2"/>

      </div>
    </div>
  );
}
