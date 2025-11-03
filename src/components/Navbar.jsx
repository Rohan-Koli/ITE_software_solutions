import { useState } from "react";
import {
  FaTimes,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaArrowRight,
  FaAngleDown,
  FaPlus,
  FaSearch,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu2 = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Offcanvas Section */}
      <div
        className={`fixed top-0 right-0 max-w-[400px] h-full bg-white z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 shadow-md p-6 overflow-y-auto`}
      >
        {/* Top Section */}
        <div className="flex justify-between items-center mb-6">
          <a href="/" className="block">
            <img
              src="/assets/img/logo/logo-dark.png"
              alt="logo"
              className="w-32"
            />
          </a>
          <button onClick={toggleMenu} className="text-2xl">
            <FaTimes />
          </button>
        </div>

        <nav className="lg:hidden bg-white border-t border-gray-200 p-4">
          <ul className="space-y-3 text-gray-800 font-medium">
            {/* Home Dropdown */}
            <li className="text-gray-800">
              {/* <div className="flex justify-between items-center">
                <a href="index.html" className="flex items-center gap-2">
                  Home <FaAngleDown className="text-gray-600 text-sm" />
                </a>
                <button
                  onClick={() => toggleMenu2("home")}
                  className="text-gray-600 text-lg"
                >
                  <FaPlus
                    className={`${
                      openMenu === "home" ? "rotate-45 text-gray-600" : ""
                    } transition`}
                  />
                </button>
              </div>

              {openMenu === "home" && (
                <ul className="pl-4 mt-2 border-l border-gray-300 space-y-2">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <li key={n}>
                      <a
                        href={`index-${n === 1 ? "" : n}.html`}
                        className="block rounded-md overflow-hidden hover:bg-gray-100"
                      >
                        <img
                          src={`assets/img/banner/home${n}.jpg`}
                          alt={`Home ${n}`}
                          className="rounded-md"
                        />
                        <span className="block text-sm text-center bg-gray-600 text-white py-1 font-semibold">
                          Home 0{n}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              )} */}
              <NavLink to="/" onClick={toggleMenu} className="hover:text-gray-600">
                Home 
              </NavLink>
            </li>

            {/* About */}
            <li>
              <NavLink to="/about" onClick={toggleMenu} className="hover:text-gray-600">
                About Us
              </NavLink>
            </li>

            {/* Services Dropdown */}
            <li>
              {/* <div className="flex justify-between items-center">
                <a href="service.html" className="flex items-center gap-2">
                  Services <FaAngleDown className="text-gray-600 text-sm" />
                </a>
                <button
                  onClick={() => toggleMenu2("services")}
                  className="text-gray-600 text-lg"
                >
                  <FaPlus
                    className={`${
                      openMenu === "services" ? "rotate-45 text-gray-600" : ""
                    } transition`}
                  />
                </button>
              </div>

              {openMenu === "services" && (
                <ul className="pl-4 mt-2 border-l border-gray-300 space-y-2">
                  <li>
                    <a href="service.html" className="hover:text-gray-600">
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="service-details.html"
                      className="hover:text-gray-600"
                    >
                      Service Details
                    </a>
                  </li>
                </ul>
              )} */}
              <NavLink to="/service" onClick={toggleMenu} className="hover:text-gray-600">
                Services
              </NavLink>
            </li>

            {/* Projects Dropdown */}
            <li>
              {/* <div className="flex justify-between items-center">
                <a href="project.html" className="flex items-center gap-2">
                  Projects <FaAngleDown className="text-gray-600 text-sm" />
                </a>
                <button
                  onClick={() => toggleMenu2("projects")}
                  className="text-gray-600 text-lg"
                >
                  <FaPlus
                    className={`${
                      openMenu === "projects" ? "rotate-45 text-gray-600" : ""
                    } transition`}
                  />
                </button>
              </div>

              {openMenu === "projects" && (
                <ul className="pl-4 mt-2 border-l border-gray-300 space-y-2">
                  <li>
                    <a href="project.html" className="hover:text-gray-600">
                      Project
                    </a>
                  </li>
                  <li>
                    <a
                      href="project-details.html"
                      className="hover:text-gray-600"
                    >
                      Project Details
                    </a>
                  </li>
                </ul>
              )} */}
              <NavLink to="/career" onClick={toggleMenu} className="hover:text-gray-600">
                Career
              </NavLink>
            </li>

            {/* Blog Dropdown */}
            <li>
              {/* <div className="flex justify-between items-center">
                <a href="blog.html" className="flex items-center gap-2">
                  Blog <FaAngleDown className="text-gray-600 text-sm" />
                </a>
                <button
                  onClick={() => toggleMenu2("blog")}
                  className="text-gray-600 text-lg"
                >
                  <FaPlus
                    className={`${
                      openMenu === "blog" ? "rotate-45 text-gray-600" : ""
                    } transition`}
                  />
                </button>
              </div>

              {openMenu === "blog" && (
                <ul className="pl-4 mt-2 border-l border-gray-300 space-y-2">
                  <li>
                    <a href="blog.html" className="hover:text-gray-600">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="blog-details.html" className="hover:text-gray-600">
                      Blog Details
                    </a>
                  </li>
                </ul>
              )} */}
              <NavLink to="/contact" onClick={toggleMenu} className="hover:text-gray-600">
                Contact Us
              </NavLink>
            </li>

          </ul>
        </nav>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold mb-2">Contact Info</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-primary" />
              <a href="#" target="_blank" className="hover:text-gray-600">
                66 Broklyant, New India
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-primary" />
              <a href="mailto:info@example.com" className="hover:text-gray-600">
                info@example.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaClock className="text-primary" />
              <span>Sat–Friday, 02am – 09pm</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-primary" />
              <a href="tel:+11002345909" className="hover:text-gray-600">
                0012 345 678 9101
              </a>
            </li>
          </ul>

          <a
            href="contact.html"
            className="mt-4 inline-flex items-center justify-center gap-2 bg-gray-600 text-white rounded-md px-5 py-2 hover:bg-gray-700 transition"
          >
            Get Start <FaArrowRight />
          </a>

          <div className="flex gap-4 text-xl mt-4">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>

          <a href="#" className="block w-full mt-6 rounded-lg overflow-hidden">
            <img
              src="/assets/img/banner/contact-view.jpg"
              alt="contact"
              className="rounded-lg"
            />
          </a>
        </div>
      </div>

      {/* Header Section */}
      <header className="sticky top-0 bg-white shadow z-30">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="/assets/img/logo/logo-dark.png"
              alt="logo"
              className="w-32"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 font-medium text-gray-800">
            {/* <div className="relative group">
              <button className="flex items-center gap-1 hover:text-gray-600">
                Home <FaAngleDown className="mt-[2px]" />
              </button>
              <ul className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 p-3 w-64">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <li key={n} className="mb-2 last:mb-0">
                    <a
                      href={`index-${n === 1 ? "" : n}.html`}
                      className="block hover:bg-gray-100 rounded-md overflow-hidden"
                    >
                      <img
                        src={`assets/img/banner/home${n}.jpg`}
                        alt={`Home ${n}`}
                        className="rounded-md"
                      />
                      <span className="block text-center bg-gray-600 text-white text-sm py-1 font-semibold">
                        Home 0{n}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}
            <NavLink to="/" className="hover:text-gray-600">
              Home
            </NavLink>
            <NavLink to="/about" className="hover:text-gray-600">
              About Us
            </NavLink>
            <NavLink to="/service" className="hover:text-gray-600">
              Services
            </NavLink>
            <NavLink to="/career" className="hover:text-gray-600">
              Career
            </NavLink>
            <NavLink to="/contact" className="hover:text-gray-600">
              Contact
            </NavLink>
          </nav>

          {/* Mobile Menu + Search */}
          <div className="flex items-center gap-4 lg:hidden">
            <button className="text-xl">
              <FaSearch />
            </button>
            <button onClick={toggleMenu}>
              <img src="/assets/img/icon/menu.png" alt="menu" className="w-6" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
