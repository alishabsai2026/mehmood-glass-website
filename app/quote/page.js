import InquiryForm from "../../components/InquiryForm";
import "./quote.css";

export const metadata = {
  title: "Request a Quotation — Aluminium, Glass & UPVC Work in Islamabad",
  description: "Request a quotation for windows, doors, shower cabins, glass railings, mirrors and UPVC work in Islamabad and Rawalpindi. Fill in the form and send it on WhatsApp.",
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <main className="est-wrap">
      <div className="container">
        <div className="sec-head" style={{ margin: "0 auto 28px", textAlign: "center" }}>
          <div className="sec-eyebrow">Request a quotation</div>
          <h2>Tell us about your project.</h2>
          <p>Share a few details and send them to us on WhatsApp. We will confirm measurements at your site and provide an itemised quotation.</p>
        </div>
        <InquiryForm />
        <ul className="quote-points">
          <li>On-site measurement before quoting</li>
          <li>Itemised pricing for glass, hardware, labour and carriage</li>
          <li>Serving Islamabad and Rawalpindi and Surrounding Areas </li>
        </ul>
      </div>
    </main>
  );
}
