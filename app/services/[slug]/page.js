import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, GALLERY } from "../../../lib/data";
import { SITE } from "../../../lib/site";

export function generateStaticParams() { return SERVICES.map(s => ({ slug: s.slug })); }
export function generateMetadata({ params }) {
  const s = SERVICES.find(x => x.slug === params.slug); if (!s) return {};
  return { title: s.title, description: `${s.intro} Call or WhatsApp ${SITE.phone1}.`, alternates: { canonical: `/services/${s.slug}` } };
}
export default function ServicePage({ params }) {
  const s = SERVICES.find(x => x.slug === params.slug); if (!s) notFound();
  const photos = GALLERY.filter(g => g.cat === s.cat).slice(0, 3);
  const wa = `https://wa.me/${SITE.wa}?text=${encodeURIComponent("Assalam o Alaikum, I would like a quotation for " + s.name + ".")}`;
  return (<main>
    <section className="svc-hero"><div className="container">
      <div className="hero-eyebrow">{s.name} · Islamabad &amp; Rawalpindi</div>
      <h1>{s.h1}</h1><p>{s.intro}</p>
      <a href={wa} className="btn-brass" target="_blank" rel="noopener noreferrer">Get a quotation on WhatsApp</a>
    </div></section>
    <section className="block"><div className="container svc-body">
      <div><div className="sec-eyebrow">What you get</div><ul>{s.points.map(p => <li key={p}>{p}</li>)}</ul>
        <p style={{color:"var(--slate)",lineHeight:1.8,fontSize:15,margin:"22px 0"}}>We serve Bahria Garden City, Bahria Town, DHA and the rest of Islamabad and Rawalpindi. Every job starts with a site visit and an itemised quotation.</p>
        <Link href="/#contact" className="btn-brass">Contact us</Link></div>
      <div className="svc-img"><img src={"/images/" + s.img} alt={s.name + " by Mehmood Aluminium & Glass Works"} /></div>
    </div>
    {photos.length > 1 && <div className="container gallery-grid" style={{marginTop:56}}>{photos.map(p => (
      <div className="gitem show visible" key={p.src}><div className="gphoto"><img src={p.src} alt={p.title} loading="lazy" /></div><div className="gphoto-tag">{p.title}</div></div>))}</div>}
    </section>
  </main>);
}
