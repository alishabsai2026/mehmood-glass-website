"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export default function Effects() {
  const path = usePathname();
  useEffect(() => {
    const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }), { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [path]);
  return null;
}
