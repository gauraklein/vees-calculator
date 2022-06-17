import Head from "next/head";
import Link from "next/link";

export const siteTitle = "Vee's Baking Calculator";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {children}
    </div>
  );
}
