import { FacebookLogo, InstagramLogo, XLogo } from "@phosphor-icons/react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex justify-between items-center text-slate-700 fixed bg-slate-200 p-5 bottom-0 right-0">
      <h5 className="text-xs">&copy;2025 QueryHub</h5>

      <span className="flex items-center gap-4">
        <FacebookLogo size={20} className="hover:text-black cursor-pointer" />
        <InstagramLogo size={20} className="hover:text-black cursor-pointer" />
        <XLogo size={20} className="hover:text-black cursor-pointer" />
      </span>
    </footer>
  );
};

export default Footer;
