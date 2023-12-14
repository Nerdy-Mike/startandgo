"use client";
import React, { FC, useRef, useState } from "react";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

interface IHeaderItemProps {
  translate: (key: string) => string;
  name: string;
}

const HeaderItem: FC<IHeaderItemProps> = ({ translate, name }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <li key={name}>
      <Link
        href={`/${name}`}
        className={clsx("text-base font-normal text-white")}
      >
        {translate(name)}
      </Link>
    </li>
  );
};

export default HeaderItem;
