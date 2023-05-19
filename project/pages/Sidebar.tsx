import React, { useState } from 'react';
import Link from 'next/link';
import { Nav } from 'react-bootstrap';

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <div className={`sidebar ${open ? 'open' : ''}`}>
        <div className="sidebar-header">
          <button className="close-btn" onClick={toggleSidebar}>
            <span className="close-icon">&times;</span>
          </button>
        </div>

        <div className="sidebar-menu">
          <h3>Women</h3>
          <ul className="category-list">
            <li>
              <Link href="/women/skirt"  >
                <span className="category-item">Skirt</span>
              </Link>
            </li>
            <li>
              <Link href="/women/shirt">
                <span className="category-item">Shirt</span>
              </Link>
            </li>
            <li>
              <Link href="/women/perfume">
                <span className="category-item">Perfume</span>
              </Link>
            </li>
            <li>
              <Link href="/women/top">
                <span className="category-item">Top</span>
              </Link>
            </li>
            <li>
              <Link href="/women/jeans">
                <span className="category-item">Jeans</span>
              </Link>
            </li>
            <li>
              <Link href="/women/bag">
                <span className="category-item">Bag</span>
              </Link>
            </li>
          </ul>

          <h3>Men</h3>
          <ul className="category-list">
            <li>
              <Link href="/men/shirt">
                <span className="category-item">Shirt</span>
              </Link>
            </li>
            <li>
              <Link href="/men/jeans">
                <span className="category-item">Jeans</span>
              </Link>
            </li>
            <li>
              <Link href="/men/perfume">
                <span className="category-item">Perfume</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .sidebar-toggle {
          position: fixed;
          top: 20px;
          left: 20px;
          z-index: 1000;
          cursor: pointer;
          background: transparent;
          border: none;
        }

        .sidebar-toggle .bar {
          display: block;
          width: 24px;
          height: 2px;
          margin-bottom: 6px;
          background-color: black;
        }

        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          width: 250px;
          height: 100%;
          background-color: white;
          overflow-y: auto;
          transform: translateX(-100%);
          transition: transform 0.3s ease-in-out;
          z-index: 999;
        }

        .sidebar.open {
          transform: translateX(0);
        }

        .sidebar-header {
          padding: 15px;
          background-color: black;
          color: white;
        }

        .close-btn {
          padding: 0;
          background: none;
          border: none;
          cursor: pointer;
        }

        .close-icon {
          font-size: 24px;
        }

        .sidebar-menu {
          padding: 20px;
        }

        .category-list {
          list-style-type: none;
          padding: 0;
          margin: 0;
          color:black;
        }

        .category-list li {
          margin-bottom: 10px;
          color:black;
          text-decoration: none;


        }

        .category-item {
          display: block;
          margin-left : 120px
          color: black;
          text-decoration: none;

          color:black;

        }
      `}</style>
    </>
  );
}
