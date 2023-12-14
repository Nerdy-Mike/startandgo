import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import NavMobileWrapper from "./NavMobileWrapper";
import { LanguageSelector } from "../Buttons/LanguageSelector";
import HeaderItem from "./HeaderItems";

export const NAV_ITEMS = [
  "history",
  "values",
  "competences",
  "carrers",
  "portfolio",
  "contact-us",
];

const Header = () => {
  const t = useTranslations("Header");

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 flex items-center justify-center py-6 text-white w-full z-50 shadow-md bg-accent-default border-b"
      )}
    >
      <div className="lg:flex flex-wrap justify-between items-center max-w-7xl w-full hidden">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/assets/logo/Logo.svg"
              alt="Start and go logo"
              width={120}
              height={120}
            />
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6 flex-row justify-between items-center">
            {NAV_ITEMS.map((item) => {
              const itemName = t(item);
              return <HeaderItem key={item} name={item} translate={itemName} />;
            })}
          </ul>
        </nav>
        <LanguageSelector />
      </div>
      <NavMobileWrapper />
    </header>
  );
};

export default Header;
