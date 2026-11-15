import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Effects from "../components/Effects";
import { SITE } from "../lib/site";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Aluminium & Glass Work in Islamabad | Mehmood Aluminium & Glass Works", template: "%s | Mehmood Aluminium & Glass Works" },
  description: "Aluminium fabrication, UPVC windows, shower cabins, 12mm glass railings, frosted glass doors and LED mirrors in Islamabad and Rawalpindi. Bahria Garden City workshop. Call or WhatsApp for a quote.",
  openGraph: { title: SITE.name, description: "Aluminium, UPVC, shower cabins and glass work in Islamabad.", url: SITE.url, siteName: SITE.name, images: ["/images/hero-floral-door.jpg"], type: "website" },
  verification: SITE.googleVerification ? { google: SITE.googleVerification } : undefined,
};

const ld = {
  "@context": "https://schema.org", "@type": "HomeAndConstructionBusiness",
  name: SITE.name, url: SITE.url, image: SITE.url + "/images/workshop-exterior.jpg",
  telephone: "+923078737018",
  address: { "@type": "PostalAddress", streetAddress: "Shop #2, Opp. Labour Camp, Rajwal Village Service Road, Bahria Garden City", addressLocality: "Islamabad", addressCountry: "PK" },
  openingHours: "Mo-Sa 09:00-20:00",
  areaServed: ["Islamabad", "Rawalpindi", "Bahria Garden City", "Bahria Town", "DHA Islamabad"],
};

export default function RootLayout({ children }) {
  return (<html lang="en"><head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </head><body>
      <Nav />{children}<Footer /><Effects />
      <a className="wa-float" href={"https://wa.me/"+SITE.wa} target="_blank" rel="noopener noreferrer">WhatsApp</a>
    </body></html>);
}
