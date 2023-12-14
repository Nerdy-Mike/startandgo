import clsx from "clsx";
import { useTranslations } from "next-intl";

import { NAV_ITEMS } from "./Header";
import NavMobile from "./NavMobile";

const NavMobileWrapper = () => {
  const t = useTranslations("Header");

  const navItems = NAV_ITEMS.map((item) => {
    const itemName = t(item);
    return { name: item, translate: itemName };
  });
  return (
    <div
      className={clsx(
        "fixed top-0 left-0 right-0 flex items-center justify-center p-4  text-white w-full z-50 lg:hidden bg-accent-default shadow-md"
      )}
    >
      <NavMobile navItems={navItems} />
    </div>
  );
};

export default NavMobileWrapper;
