"use client";
import { useState } from "react";
import { SITE } from "../lib/site";

const WORKS = ["Windows", "Doors", "Shower Cabin", "Glass Railing", "Mirrors", "UPVC", "Aluminium Kitchen", "Other"];

export default function InquiryForm() {
  const [works, setWorks] = useState([]);
  const [f, setF] = useState({ name: "", location: "", size: "", qty: "", note: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const toggle = (w) => setWorks((p) => (p.includes(w) ? p.filter((x) => x !== w) : [...p, w]));
  const ready = works.length > 0 && f.name.trim() && f.location.trim();

  const msg = [
    "Assalam o Alaikum, I would like a quotation.",
    `Name: ${f.name.trim()}`,
    `Work required: ${works.join(", ")}`,
    `Location: ${f.location.trim()}`,
    `Approx. size: ${f.size.trim() || "Not sure yet, need measurement"}`,
    `Quantity: ${f.qty.trim() || "-"}`,
    f.note.trim() && `Details: ${f.note.trim()}`,
  ].filter(Boolean).join("\n");
  const wa = `https://wa.me/${SITE.wa}?text=${encodeURIComponent(msg)}`;

  return (
    <form className="est" onSubmit={(e) => e.preventDefault()}>
      <div className="est-row">
        <label>What do you need? <span>Select one or more</span></label>
        <div className="est-seg">
          {WORKS.map((w) => (
            <button type="button" key={w} className={works.includes(w) ? "on" : ""} onClick={() => toggle(w)}>{w}</button>
          ))}
        </div>
      </div>
      <div className="est-row"><label>Full name</label>
        <input value={f.name} onChange={set("name")} autoComplete="name" /></div>
      <div className="est-row"><label>Project location</label>
        <input value={f.location} onChange={set("location")} placeholder="e.g. Bahria Town Phase 4, Rawalpindi" /></div>
      <div className="est-pair">
        <div className="est-row"><label>Approx. size <span>optional</span></label>
          <input value={f.size} onChange={set("size")} placeholder="e.g. 5 ft × 4 ft" /></div>
        <div className="est-row"><label>Quantity <span>optional</span></label>
          <input value={f.qty} onChange={set("qty")} placeholder="e.g. 3 windows" /></div>
      </div>
      <div className="est-row"><label>Additional details <span>optional</span></label>
        <input value={f.note} onChange={set("note")} placeholder="e.g. sliding, white finish, frosted glass" /></div>

      <a className={"btn-brass est-btn" + (ready ? "" : " off")} href={ready ? wa : undefined} target="_blank" rel="noopener noreferrer">
        Send on WhatsApp
      </a>
      <p className="est-note" style={{ textAlign: "center", marginTop: 12 }}>
        {ready ? "This opens WhatsApp with your details filled in. Nothing is sent until you press send."
               : "Please select the work, and add your name and location."}
      </p>
    </form>
  );
}
