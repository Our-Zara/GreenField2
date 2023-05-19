import React from 'react';
import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/products">
        <a>Products</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </div>
  );
};

export default Sidebar;
