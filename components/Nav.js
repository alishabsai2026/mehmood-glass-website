"use client";
import { useState } from "react";
import Link from "next/link";
import { SITE } from "../lib/site";
const L = [["Get a Quote","/quote"],["About","/#about"],["Services","/#services"],["Gallery","/#gallery"],["Process","/#process"],["Contact","/#contact"]];
export default function Nav() {
  const [open, setOpen] = useState(false);
  return (<>
    <header className="site-nav"><div className="nav-row">
      <Link href="/" className="brand"><div className="brand-mark"><span>M</span></div>
        <div className="brand-name">Mehmood Aluminium &amp; Glass<small>Islamabad · Est. craftsmanship</small></div></Link>
      <nav className="nav-links">{L.map(([t,h])=><Link key={t} href={h}>{t}</Link>)}</nav>
      <a href={"tel:"+SITE.phone1.replace(/-/g,"")} className="nav-call desktop-only">{SITE.phone1}</a>
      <button className="nav-burger" aria-label="Menu" onClick={()=>setOpen(!open)}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg></button>
    </div></header>
    <div className={"mobile-drawer"+(open?" open":"")}>
      {L.map(([t,h])=><Link key={t} href={h} onClick={()=>setOpen(false)}>{t}</Link>)}
      <a href={"tel:"+SITE.phone1.replace(/-/g,"")} className="nav-call">Call {SITE.phone1}</a>
    </div></>);
}
