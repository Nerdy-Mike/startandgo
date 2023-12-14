"use client";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";

import { defaultLocale } from "@/constants/locales";
import { Language } from "@/types/lang";

interface INavMobileProps {
  navItems: { name: string; translate: string }[];
}

const NavMobile: FC<INavMobileProps> = ({ navItems }) => {
  const [isOpen, setOpen] = useState(false);

  const router = usePathname();
  const pathname = usePathname();
  const path = (pathname.split("/")[1] as Language) ?? defaultLocale;

  useEffect(() => {
    setOpen(false);
  }, [router]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      className={clsx(
        "fixed top-0 left-0 right-0 flex items-center justify-center p-4  text-white w-full z-50 lg:hidden bg-accent-default shadow-md"
      )}
    >
      <div className="flex flex-row px-6 justify-between items-center w-full">
        <div className="flex items-center justify-center z-50">
          <Link href="/" onClick={handleClose} className="">
            <Image
              src="/assets/logo/Logo.svg"
              alt="Start & Go logo"
              width={120}
              height={120}
            />
          </Link>
        </div>
        <div className="z-50">
          <Hamburger
            toggled={isOpen}
            size={30}
            toggle={setOpen}
            color={"white"}
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
            className="fixed left-0 right-0 top-0 py-5 pt-0 bg-accent-default border-b border-b-white/20 h-full"
          >
            <nav className="mt-32 flex w-full flex-col justify-center items-center ">
              <ul className="w-full">
                {navItems.map(({ name, translate }) => {
                  return (
                    <li
                      key={name}
                      className="text-xl text-center my-6 font-bold  hover:bg-accent-light focus:bg-white active:bg-white/20  "
                    >
                      <Link href={`/${path}/${name}`} onClick={handleClose}>
                        <p className="text-center w-full py-4 text-white text-lg ">
                          {translate}
                        </p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMobile;
