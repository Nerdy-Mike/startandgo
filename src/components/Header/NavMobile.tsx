"use client";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import useClickAway from "@/hooks/useClickAway";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const [colorChange, setColorchange] = useState<boolean>(false);

  const ref = useRef(null);
  const router = usePathname();
  const isHomeScreen = router === "/";
  const shouldShowTransparent = isHomeScreen && !colorChange;

  useClickAway(ref, () => setOpen(false));

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY > 0) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    };
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [router]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      className={clsx(
        "fixed top-0 left-0 right-0 flex items-center justify-center p-4  text-white w-full z-50 lg:hidden",
        shouldShowTransparent ? "bg-transparent" : "bg-white shadow-md"
      )}
      ref={ref}
    >
      <div className="flex flex-row px-6 justify-between items-center w-full">
        <div className="flex items-center justify-center z-50">
          <Link href="/" onClick={handleClose} className="">
            {isOpen ? (
              <Image
                src="/assets/logo/Logo.svg"
                alt="ZooDoo logo"
                width={100}
                height={100}
              />
            ) : shouldShowTransparent ? (
              <Image
                src="/assets/logo/Logo.svg"
                alt="ZooDoo logo"
                width={100}
                height={100}
              />
            ) : (
              <Image
                src="/assets/logo/Logo.svg"
                alt="ZooDoo logo"
                width={100}
                height={100}
              />
            )}
          </Link>
        </div>
        <div className="z-50">
          <Hamburger
            toggled={isOpen}
            size={30}
            toggle={setOpen}
            color={
              isOpen ? "white" : shouldShowTransparent ? "white" : "#14532D"
            }
          />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 top-0 py-5 pt-0 bg-[#14532D] border-b border-b-white/20 h-full"
          >
            <nav className="mt-32 flex w-full flex-col justify-center items-center ">
              <ul className="w-full">
                <li className="py-2 ">
                  <Link
                    href="/ve-zoodoo"
                    className="w-full h-full"
                    onClick={handleClose}
                  >
                    <p className="text-center w-full p-6 focus:bg-green-800 active:bg-green-800 text-gray-light text-xl focus:text-white active:text-white">
                      Về chúng tôi
                    </p>
                  </Link>
                </li>
                <li className="py-2 ">
                  <Link
                    href="/ghe-tham-zoodoo"
                    className="w-full h-full"
                    onClick={handleClose}
                  >
                    <p className="text-center w-full p-6 focus:bg-green-800 active:bg-green-800 text-gray-light text-xl focus:text-white active:text-white">
                      Ghé Thăm ZooDoo
                    </p>
                  </Link>
                </li>
                <li className="py-2 ">
                  <Link
                    href="/trai-nghiem-zoodoo"
                    className="w-full h-full"
                    onClick={handleClose}
                  >
                    <p className="text-center w-full p-6 focus:bg-green-800 active:bg-green-800 text-gray-light text-xl focus:text-white active:text-white">
                      Trải nghiệm ở ZooDoo
                    </p>
                  </Link>
                </li>
                <li className="py-2 ">
                  <Link
                    href="/tin-tuc-va-hoat-dong"
                    className="w-full h-full"
                    onClick={handleClose}
                  >
                    <p className="text-center w-full p-6 focus:bg-green-800 active:bg-green-800 text-gray-light text-xl focus:text-white active:text-white">
                      Tin tức hoạt động
                    </p>
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
