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

        <Nav className="flex-column">
          <Nav.Link href="/women">Women</Nav.Link>
          <Nav.Link href="/men">Men</Nav.Link>
          
        </Nav>
      </div>

      <style jsx>{`
        .sidebar-toggle {
          position: fixed;
          top: 20px;
          left: 20px;
          z-index: 1000; /* Increase the z-index to make the icon visible */
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
          z-index: 999; /* Increase the z-index to make the sidebar appear above other elements */
        }

        .sidebar.open {
          transform: translateX(0);
        }

        .sidebar-header {
          padding: 15px;
          background-color: black;
          color:white;
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
      `}</style>
    </>
  );
}
