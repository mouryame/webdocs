import { Header, HeadingPane, NavPane } from "@/app/components";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="body">
      <Header />
      <div className="main-layout">
        <NavPane />
        {children}
        <HeadingPane />
      </div>
    </div>
  );
}
