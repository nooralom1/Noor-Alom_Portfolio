import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import { ThemeProvider } from "next-themes";
import MainLayout from "@/layout/main-layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <MainLayout>
          <Component key={router.asPath} {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </>
  );
}
