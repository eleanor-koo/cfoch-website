import Navbar from "@components/navbar/Navbar";
import { ReactNode } from "react";
import Footer from "./Footer";
import Meta from "./Meta";
export default function Container({title,children}:{title:string;children:ReactNode}) {
 return <><Meta title={title || "Research"}/><a className="skip-link" href="#main">Skip to content</a><Navbar/><main id="main">{children}</main><Footer/></>;
}
