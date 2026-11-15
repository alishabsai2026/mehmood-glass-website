import Link from "next/link";
import Gallery from "../components/Gallery";
import { SITE, AREAS, REVIEWS } from "../lib/site";
import { SERVICES } from "../lib/data";

const STRIP = ["Aluminium Fabrication","12mm Tempered Glass","UPVC Windows","Shower Cabins","Frosted & Etched Glass","Frameless Railings","LED Mirrors","Kitchen Glass Cabinets"];
const STEPS = [["Visit & measure","We come to your site, measure exactly, and discuss glass type, frame and finish."],["Itemised quote","Glass, hardware, labour and carriage listed separately — no bundled guesswork."],["Cut & fabricate","Glass is cut, frosted or tempered as needed; aluminium frames are built to size."],["Fit & finish","Installed on site, hardware fitted, and the area cleaned before we leave."]];
const wa = (t) => `https://wa.me/${SITE.wa}?text=${encodeURIComponent(t)}`;

export default function Home() {
  const loop = [...STRIP, ...STRIP];
  return (<main>
    <section className="hero" id="top"><div className="container hero-grid">
      <div>
        <div className="hero-eyebrow">Aluminium · Glass · UPVC · Bahria Garden City, Islamabad</div>
        <h1>Glasswork that holds<br/>its <em>shape</em>, light<br/>and finish.</h1>
        <p className="lead">We design, cut and install aluminium, UPVC, shower cabins and 12mm glass work for homes and projects across Islamabad and Rawalpindi — from frosted floral doors to frameless balcony railings.</p>
        <div className="hero-actions"><Link href="/#gallery" className="btn-brass">View our work</Link><Link href="/quote" className="btn-ghost">Get a quotation</Link></div>
        <div className="hero-stats">
          <div className="hstat"><div className="n">12mm</div><div className="l">Glass thickness</div></div>
          <div className="hstat"><div className="n">100%</div><div className="l">Custom-fit work</div></div>
          <div className="hstat"><div className="n">ISB · RWP</div><div className="l">Service areas</div></div>
        </div>
      </div>
      <div className="hero-frame reveal"><img src="/images/hero-floral-door.jpg" alt="Custom frosted glass double door with floral etching"/><div className="hero-frame-cap">Frosted floral door · Sand-etched 6mm glass</div></div>
    </div></section>

    <div className="strip"><div className="strip-track">{loop.map((t,i)=><span key={i} style={{display:"contents"}}><span>{t}</span><span className="dot">·</span></span>)}</div></div>

    <section className="block" id="about"><div className="container about-row">
      <div className="about-img reveal"><img src="/images/door-french-grid.jpg" alt="French-style wooden door with glass panes"/></div>
      <div className="about-copy">
        <div className="sec-eyebrow reveal">About the workshop</div>
        <h2 className="reveal" style={{marginBottom:20}}>Run by Mehmood Ahmed, built on referrals.</h2>
        <p className="reveal">Mehmood Aluminium &amp; Glass Works is a family-run workshop based in Bahria Garden City, Islamabad. We deal in all types of aluminium fabrication, UPVC windows, shower cabins, and 12mm glass work — cut, finished and fitted on site.</p>
        <p className="reveal">Most of our clients come through word of mouth: a railing fitted for one neighbour, a kitchen cabinet for the next. We quote transparently, show up on schedule, and stand behind every piece of glass we cut.</p>
        <div className="feature-list reveal">
          <div className="feature"><div className="ft">On-site measurement</div><div className="fd">We visit before quoting, so the fit is exact.</div></div>
          <div className="feature"><div className="ft">12mm tempered glass</div><div className="fd">Used for railings and shower cabins where safety matters.</div></div>
          <div className="feature"><div className="ft">Frosted &amp; etched designs</div><div className="fd">Floral, geometric or plain — cut to your door or window size.</div></div>
          <div className="feature"><div className="ft">Transparent quotations</div><div className="fd">Itemised pricing for glass, hardware, labour and carriage.</div></div>
        </div>
      </div>
    </div></section>

    <section className="block services-bg" id="services">
      <div className="container"><div className="sec-head"><div className="sec-eyebrow">What we build</div><h2>Five categories, one workshop.</h2>
        <p>Every job is fabricated and fitted by the same team — so the glass in your shower cabin matches the precision of the railing on your stairs.</p></div></div>
      <div className="container" style={{padding:0}}><div className="cat-grid">
        {SERVICES.map((s,i)=>(<Link key={s.slug} href={`/services/${s.slug}`} className="cat-card reveal">
          <img src={"/images/"+s.img} alt={s.name+" in Islamabad"}/>
          <div className="cat-overlay"><div className="cat-num">0{i+1}</div><h3>{s.name}</h3><p>{s.short}</p></div></Link>))}
        <Link href="/quote" className="cat-card reveal" style={{display:"flex",alignItems:"center",justifyContent:"center"}} >
          <div style={{textAlign:"center",padding:24}}><div className="cat-num" style={{marginBottom:14}}>06</div><h3 style={{marginBottom:14}}>Have a different job in mind?</h3>
            <p style={{marginBottom:20}}>If it's glass, aluminium or UPVC — ask us. Most work is custom anyway.</p><span className="btn-brass" style={{display:"inline-flex"}}>Ask for a quote</span></div></Link>
      </div></div>
    </section>

    <section className="block" id="gallery"><div className="container">
      <div className="sec-head"><div className="sec-eyebrow">Recent work</div><h2>From the field, not a catalogue.</h2><p>Every photo below is from a real site — most still mid-installation, exactly as our clients saw them.</p></div>
      <Gallery/></div></section>

    <section className="block contractor" id="contractors"><div className="container">
      <div className="sec-head wide"><div className="sec-eyebrow">For contractors &amp; builders</div><h2>A fabrication partner for your projects.</h2>
        <p>Building or renovating in Islamabad or Rawalpindi? We work with contractors, architects and interior designers who need glass and aluminium work done to measure and on schedule.</p></div>
      <div className="c-grid">
        <div className="c-item"><h4>Measured on site</h4><p>We measure at your project before quoting, so what we cut is what fits.</p></div>
        <div className="c-item"><h4>Itemised quotations</h4><p>Glass, hardware, labour and carriage listed separately, in writing.</p></div>
        <div className="c-item"><h4>Clear payment terms</h4><p>70% to start, 20% on delivery to site, 10% on completion.</p></div>
      </div>
      <a href={wa("Assalam o Alaikum, I am a contractor/builder. Please send your catalogue and contractor pricing.")} className="btn-brass" target="_blank" rel="noopener noreferrer">Request catalogue &amp; contractor pricing</a>
    </div></section>

    <section className="block" id="process"><div className="container"><div className="sec-head"><div className="sec-eyebrow">How a job runs</div><h2>Four steps, no surprises.</h2></div></div>
      <div className="container" style={{padding:0}}><div className="process-row">{STEPS.map(([h,p],i)=>(<div key={h} className="proc-step reveal"><div className="proc-num">0{i+1}</div><h4>{h}</h4><p>{p}</p></div>))}</div></div></section>

    {REVIEWS.length>0 && <section className="block" style={{paddingTop:0}} id="reviews"><div className="container">
      <div className="sec-head"><div className="sec-eyebrow">Client reviews</div><h2>What our clients say.</h2></div>
      <div className="rev-grid">{REVIEWS.map((r,i)=>(<div key={i} className="rev reveal"><p>“{r.text}”</p><b>{r.name}</b><span>{r.place}</span></div>))}</div></div></section>}

    <section className="block" style={{paddingTop:0}} id="areas"><div className="container">
      <div className="sec-head"><div className="sec-eyebrow">Where we work</div><h2>Service areas across Islamabad &amp; Rawalpindi.</h2></div>
      <div className="areas-wrap">{AREAS.map(a=><span key={a} className="area-chip">{a}</span>)}</div></div></section>

    <div className="trust-band"><div className="container trust-row">
      <div><div className="serif">"70% to start, 20% on delivery to site, 10% on completion."</div><p className="sub">Straightforward payment terms on every quotation — cash or cash cheques.</p></div>
      <Link href="/quote" className="btn-brass" style={{background:"var(--ink)",color:"var(--cream)"}}>Request a quotation</Link></div></div>

    <section className="block" id="contact"><div className="container">
      <div className="sec-head"><div className="sec-eyebrow">Get in touch</div><h2>Tell us what you're building.</h2><p>Call, message on WhatsApp, or stop by the workshop — whichever's easiest.</p></div>
      <div className="contact-row">
        <div>
          {[["Call us directly",<><a href={"tel:"+SITE.phone1.replace(/-/g,"")}>{SITE.phone1}</a> &nbsp;·&nbsp; <a href={"tel:"+SITE.phone2.replace(/-/g,"")}>{SITE.phone2}</a></>],
            ["WhatsApp",<a href={wa("Assalam o Alaikum")} target="_blank" rel="noopener noreferrer">Message us for a quick quote</a>],
            ["Workshop address",SITE.address],["Working hours",SITE.hours]].map(([h,b])=>(
            <div className="contact-card reveal" key={h}><div className="contact-icon">●</div><div><h4>{h}</h4><p>{b}</p></div></div>))}
        </div>
        <div className="map-frame reveal"><img src="/images/workshop-exterior.jpg" alt="Mehmood Aluminium and Glass Works workshop exterior, Bahria Garden City"/></div>
      </div></div></section>
  </main>);
}
