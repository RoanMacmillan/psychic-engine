import React, { ReactEventHandler, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenu = () => {
    setIsMenuOpen(true);
  };

  return (
    <>
      <nav className="px-3 flex justify-between items-center py-3">
        <Link href="/text">Home</Link>

        <Button onClick={handleMenu}>Menu</Button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-950 absolute z-50 top-0 w-full min-h-screen"
          >
            <div
              className={`
    
    
  flex justify-between px-3 text-white py-3`}
            >
              <Link href="/text">Home</Link>

              <Button onClick={() => setIsMenuOpen(false)}>Close</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
