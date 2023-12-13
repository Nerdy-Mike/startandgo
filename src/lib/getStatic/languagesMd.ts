import { getI18n } from "react-i18next";
import { getAllPostIds, getPostData } from "./posts"
import { getI18nPaths } from "./getLanguage"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


export async function getStaticPaths() {
    const mdPaths = getAllPostIds();
    const lnPaths = getI18nPaths();
    const paths = lnPaths.map((ln) => {
        return (
            mdPaths.map((md) => {
                return { params: { locale: ln.params.locale, id: md.params.id } }
            })[0]
        )
    })
    console.log(paths);
    return {
        paths,
        fallback: false,
    };
}

export async function getProps(ctx: any, ns = ['common']) {
    const locale = ctx?.params?.locale
    const postData = getPostData(ctx?.params?.id);
    const props = {
        postData,
        ...(await serverSideTranslations(locale, ns))
    };
    return props
}

export function makeStaticProps(ns = ['common']) {
    return async function getStaticProps(ctx: any) {
        return {
            props: await getProps(ctx, ns)
        }
    }
}