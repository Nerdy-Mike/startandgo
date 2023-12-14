"use client";
import React, { useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

import useClickAway from "@/hooks/useClickAway";

interface Language {
  key: string;
  name: string;
}

const LANGUAGES: Language[] = [
  {
    key: "en",
    name: "English",
  },
  {
    key: "it",
    name: "Italiano",
  },
];

export const LanguageSelector = () => {
  const [isLangOpen, setIsLangOpen] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>({
    key: "en",
    name: "English",
  });

  const langRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    setIsLangOpen(false);
    // change path to correponding path with the selected language
    router.push(pathname.replace(/^\/(en|it)/, `/${language.key}`));
  };

  useClickAway(langRef, () => setIsLangOpen(false));

  return (
    <div className="flex items-center z-40" ref={langRef}>
      <div className="relative inline-block text-left">
        <button
          type="button"
          className="flex flex-row items-center justify-center w-full rounded-md border-none px-4 py-2 bg-none hover:opacity-70 focus:outline-none gap-x-2"
          aria-haspopup="true"
          onClick={() => setIsLangOpen(!isLangOpen)}
        >
          <Image
            src="/assets/icons/global.svg"
            alt="Change language icon"
            width={24}
            height={24}
          />
          <div className="text-white font-normal text-sm">
            {selectedLanguage.name}{" "}
          </div>
          <motion.img
            src="/assets/icons/arrow-down.svg"
            alt="Arrow down icon"
            width={16}
            height={16}
            animate={{ rotate: isLangOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
        {isLangOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="language-selector"
          >
            <div className="py-1 flex flex-col" role="none">
              {LANGUAGES.map((language, index) => {
                return (
                  <button
                    key={language.key}
                    onClick={() => handleLanguageChange(language)}
                    className={`${
                      selectedLanguage.key === language.key
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-700"
                    } block px-4 py-2 text-sm text-left items-center hover:bg-gray-100 `}
                    role="menuitem"
                  >
                    <span className="truncate">{language.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
