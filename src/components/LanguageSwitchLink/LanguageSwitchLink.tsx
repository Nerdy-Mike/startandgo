import languageDetector from "../../lib/getStatic/languageDetector";
import { useRouter } from "next/router";
import Link from "next/link";

const LanguageSwitchLink = ({ locale, ...rest }: any) => {
  const router = useRouter();

  let href = rest.href || router.asPath;
  let pName = router.pathname;
  Object.keys(router.query).forEach((k) => {
    if (k === "locale") {
      pName = pName.replace(`[${k}]`, locale);
      return;
    }
    let newPName = router.query[k];
    if (typeof newPName === "string") pName = pName.replace(`[${k}]`, newPName);
  });
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName;
  }

  return (
    <Link href={href}>
      <button
        style={{ fontSize: "small" }}
        onClick={() => {
          if (languageDetector && languageDetector.cache)
            return languageDetector.cache(locale);
        }}
      >
        {locale}
      </button>
    </Link>
  );
};

export default LanguageSwitchLink;
