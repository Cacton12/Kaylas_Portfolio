"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About Me", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "My Education", href: "#education" },
  { name: "My Experience", href: "#experience" },
  { name: "Contact Me", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isOpen
          ? "bg-black py-2 shadow-md"
          : isScrolled
          ? "bg-black/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center text-white">
        {/* Logo */}
        <Link href="#home">
          <motion.div
            className="text-2xl font-bold cursor-pointer transition-colors duration-200"
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            
            <span className="cedarville-cursive">Kayla Richard</span>
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <motion.ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              className="relative cursor-pointer text-white"
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={{
                rest: { color: "#fff" },
                hover: { color: "#22C55E" },
              }}
            >
              <Link href={link.href} className="relative z-10">
                {link.name}
              </Link>
              <motion.div
                className="absolute left-0 bottom-0 h-0.5 bg-green-500"
                variants={{
                  rest: { width: 0 },
                  hover: { width: "100%" },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.1,
                  when: "beforeChildren",
                },
              },
            }}
            className="md:hidden bg-gray-950 overflow-hidden"
          >
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="border-b border-gray-950 text-white"
              >
                <Link
                  href={link.href}
                  className="block px-4 py-3 hover:bg-green-600"
                  onClick={() => setIsOpen(false)}
                >
                  <motion.span whileTap={{ scale: 0.95 }}>
                    {link.name}
                  </motion.span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
