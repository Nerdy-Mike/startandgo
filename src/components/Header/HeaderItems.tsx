"use client";
import React, { FC } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

import { defaultLocale } from "@/constants/locales";
import { Language } from "@/types/lang";

interface IHeaderItemProps {
  translate: string;
  name: string;
}

const HeaderItem: FC<IHeaderItemProps> = ({ translate, name }) => {
  const pathname = usePathname();
  const path = (pathname.split("/")[1] as Language) ?? defaultLocale;

  return (
    <li key={name}>
      <Link
        href={`/${path}/${name}`}
        className={clsx("text-base font-normal text-white")}
      >
        {translate}
      </Link>
    </li>
  );
};

export default HeaderItem;
