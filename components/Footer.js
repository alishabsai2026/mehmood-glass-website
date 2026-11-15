import Link from "next/link";
import { SITE } from "../lib/site";
export default function Footer() {
  const soc = Object.entries(SITE.social).filter(([,v])=>v);
  return (<footer><div className="container">
    <div className="footer-top">
      <div className="footer-brand"><div className="brand-name">{SITE.name}</div>
        <p className="fine" style={{marginTop:8,maxWidth:320}}>Aluminium, UPVC, shower cabins and 12mm glass work — fabricated and fitted across Islamabad and Rawalpindi.</p></div>
      <div className="footer-links"><Link href="/#about">About</Link><Link href="/#services">Services</Link><Link href="/#gallery">Gallery</Link><Link href="/#contact">Contact</Link></div>
    </div>
    <div className="footer-row"><span className="fine">© {new Date().getFullYear()} {SITE.name}, Islamabad.</span>
      {soc.length>0 && <div className="social">{soc.map(([k,v])=><a key={k} href={v} target="_blank" rel="noopener noreferrer">{k}</a>)}</div>}
      <span className="fine">Shop #2, Bahria Garden City, Islamabad</span></div>
  </div></footer>);
}
