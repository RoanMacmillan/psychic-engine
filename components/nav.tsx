import React, { ReactEventHandler, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface NavProps {
  openMenu: ReactEventHandler;
}

const Nav: React.FC<NavProps> = ({ openMenu }) => {
  return (
    <nav className="px-3 flex justify-between items-center py-3">
      <Link href="/">Home</Link>

      <Button onClick={openMenu}>Menu</Button>
    </nav>
  );
};

export default Nav;
