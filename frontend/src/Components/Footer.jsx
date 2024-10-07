import React from "react";
import logo from "../assets/images/mslogo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="h-[30vh] md:h-[20vh] bg-primary text-white flex flex-col md:flex-row items-center justify-center md:justify-center md:gap-16 px-6 md:px-16 py-4 md:py-0 space-y-4 md:space-y-0">
        {/* Contact Button */}
        <button className="border border-white px-8 py-4 rounded-md hover:bg-white hover:text-primary transition-colors duration-300">
          Contact us
        </button>

        {/* Footer Text */}
        <div className="text-center md:text-left">
          <p className="text-xl md:text-3xl lg:text-4xl font-bold mb-2">
            جمعية الكشاف المسلم في لبنان
          </p>
          <p className="text-base md:text-lg lg:text-xl opacity-80">
            على مساحة كل الوطن
          </p>
        </div>
      </div>
      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

      <footer className="bg-white dark:bg-[#1D1D1D]">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-start lg:gap-8">
            <div className="text-primary dark:text-whiteColor">
              <img className="h-[100px] w-[500px]" src={logo} />
            </div>

            <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
              <div className="col-span-2">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    على مساحة وطن
                  </h2>

                  <p className="mt-4 text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Esse non cupiditate quae nam molestias.
                  </p>
                </div>
              </div>

              <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                <form className="w-full">
                  <label htmlFor="UserEmail" className="sr-only">
                    {" "}
                    Email{" "}
                  </label>
                </form>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium text-gray-900 dark:text-white">
                  Services
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      1on1 Coaching
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Company Review
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Accounts Review
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      HR Consulting
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      SEO Optimisation
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium text-gray-900 dark:text-white">
                  Company
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Meet the Team
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Accounts Review
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium text-gray-900 dark:text-white">
                  Helpful Links
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Contact
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      FAQs
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Live Chat
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium text-gray-900 dark:text-white">
                  Legal
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Accessibility
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Returns Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Refund Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Hiring Statistics
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium text-gray-900 dark:text-white">
                  Downloads
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Marketing Calendar
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      SEO Infographics
                    </a>
                  </li>
                </ul>
              </div>

              <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
                <li>
                  <FaXTwitter className="text-white text-xl" />
                </li>

                <li>
                  <FaFacebook className="text-white text-xl" />
                </li>

                <li>
                  <FaInstagram className="text-white text-xl" />
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-100 pt-8 dark:border-gray-800">
            <div className="sm:flex sm:justify-between">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                &copy;All rights reserved for muslim scout
              </p>

              <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                  >
                    Powered by candle media solutions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
