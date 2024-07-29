import React, { ReactEventHandler, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Input } from "./ui/input";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenu = () => {
    setIsMenuOpen(true);
  };

  return (
    <>
      <nav className=" flex justify-between border-b-0 items-center gap-4 py-3">
        <Link href="/text">
        <div className="flex gap-1">
        <div className="w-4 h-6 bg-slate-950"></div>
        <div className="w-4 h-4 bg-slate-950"></div>
        </div>

        
        </Link>


        {/* <Input type="search" placeholder="Search Photop..."></Input> */}

        <Button onClick={handleMenu}>Menu</Button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-950 absolute z-50 left-0 top-0 w-full min-h-screen"
          >
            <div
              className={`
    
    
  flex justify-between items-center px-2 text-white py-3`}
            >

              <div className="flex gap-1">
        <div className="w-4 h-6 bg-white"></div>
        <div className="w-4 h-4 bg-white"></div>
        </div>

              <Button onClick={() => setIsMenuOpen(false)}>Close</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
