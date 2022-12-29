import React from "react";

function Footer() {
  return (
    <div>
      <div className="flex flex-wrap space-x-5 w-[35%] my-10 m-auto justify-center ">
        <p className="hover:text-slate-400 cursor-pointer">Home</p>
        <p className="hover:text-slate-400 cursor-pointer">About</p>
        <p className="hover:text-slate-400 cursor-pointer">Menu</p>
        <p className="hover:text-slate-400 cursor-pointer">Info</p>
        <p className="hover:text-slate-400 cursor-pointer">Contact</p>
        <p className="hover:text-slate-400 cursor-pointer">Bookings</p>
        <p className="hover:text-slate-400 cursor-pointer">Privacy Policy</p>
        <p className="hover:text-slate-400 cursor-pointer">Style Guide</p>
        <p className="hover:text-slate-400 cursor-pointer">Licenses</p>
        <p className="hover:text-slate-400 cursor-pointer">Instructions</p>
        <p className="hover:text-slate-400 cursor-pointer">Changelog</p>
        <p className="hover:text-slate-400 cursor-pointer">Password</p>
        <p className="hover:text-slate-400 cursor-pointer">404</p>
      </div>
        <div className="flex justify-center space-x-5 text-slate-400">
          <p>© Latte Cafe 2022.</p>
          <p>Nikolai Bain</p>
          <p>Powered by</p>
        </div>
    </div>
  );
}

export default Footer;
