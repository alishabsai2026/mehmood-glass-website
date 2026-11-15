import { SITE } from "../lib/site";
import { SERVICES } from "../lib/data";
export default function sitemap() {
  return [SITE.url, `${SITE.url}/quote`, ...SERVICES.map(s => `${SITE.url}/services/${s.slug}`)].map(url => ({ url, lastModified: new Date() }));
}
