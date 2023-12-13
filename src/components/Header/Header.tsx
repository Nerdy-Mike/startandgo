import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

import { NavMobile } from "./NavMobile";

const Header = () => {
  const t = useTranslations("Header");
  const NavItems = [
    "history",
    "values",
    "competences",
    "carrers",
    "portfolio",
    "contact-us",
  ];

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
            {NavItems.map((item) => (
              <li key={item}>
                <Link
                  href={`/${item}`}
                  className={clsx("text-base font-normal text-white")}
                >
                  {t(item)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>Change language</div>
      </div>
      <NavMobile />
    </header>
  );
};

export default Header;
