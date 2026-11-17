import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
const links = [["About us","/#about"],["Our team","/team"],["Events","/events"],["Research","/research"]];
export default function Navbar(){
 const [open,setOpen]=useState(false); const router=useRouter(); const trigger=useRef<HTMLButtonElement>(null);
 useEffect(()=>{setOpen(false)},[router.asPath]);
 return <header className="site-header"><div className="nav-shell"><Link href="/" className="brand" aria-label="CFOCH home"><img className="current-logo" src="/images/cfoch-logo.png" alt="CFOCH" width="228" height="45"/></Link>
 <button ref={trigger} className="menu-toggle" aria-expanded={open} aria-controls="primary-nav" onClick={()=>setOpen(!open)}>{open?'Close ✕':'Menu ☰'}</button>
 <nav id="primary-nav" aria-label="Main navigation" className={open?'primary-nav is-open':'primary-nav'} onKeyDown={e=>{if(e.key==='Escape'){setOpen(false);trigger.current?.focus()}}}>
 {links.map(([label,href])=><Link key={href} href={href} aria-current={router.pathname===href?'page':undefined}>{label}</Link>)}<Link className="nav-action" href="/get-involved">Get involved <span aria-hidden="true"><span className="link-arrow" aria-hidden="true">&#8599;&#65038;</span></span></Link></nav></div></header>
}
