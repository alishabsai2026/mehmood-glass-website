"use client";
import { useState } from "react";
import { GALLERY, TABS } from "../lib/data";
export default function Gallery() {
  const [f, setF] = useState("all");
  return (<>
    <div className="gallery-tabs">{TABS.map(([k,l])=><button key={k} className={"gtab"+(f===k?" active":"")} onClick={()=>setF(k)}>{l}</button>)}</div>
    <div className="gallery-grid">{GALLERY.filter(g=>f==="all"||g.cat===f).map(g=>(
      <div className="gitem show visible" key={g.src}>
        <div className="gphoto"><img src={g.src} alt={g.title+" — Mehmood Aluminium & Glass Works, Islamabad"} loading="lazy"/></div>
        <div className="gphoto-tag">{g.title}</div><div className="gphoto-cat">{g.catLabel}</div>
      </div>))}</div></>);
}
