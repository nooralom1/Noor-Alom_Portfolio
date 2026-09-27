import { ReactNode } from "react";

import { routes } from "@/data/navigationRoutes";
import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";

export interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <div className="min-h-screen font-sans">
        <Navbar routes={routes} />
        <main>{props.children}</main>
      </div>
      <Footer />
    </>
  );
}
