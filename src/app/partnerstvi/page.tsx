import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partnerství | Nadační fond Umění spát",
  description: "Spojme síly pro zdravější, bezpečnější a výkonnější společnost.",
};

const options = [
  ["01", "Partner konkrétního projektu", "Podpořte osvětovou kampaň, vzdělávací program nebo konkrétní iniciativu nadačního fondu."],
  ["02", "Strategický partner", "Dlouhodobě s námi rozvíjejte témata zdraví, regenerace, výkonnosti a bezpečnosti."],
  ["03", "Odborný a technologický partner", "Propojte s námi své know-how, technologie, služby nebo odborné kapacity."],
];

function Header() {
  return <header className="header">
    <Link href="/" className="logo" aria-label="Umění spát – domů"><Image src="/images/logo.png" alt="Nadační fond Umění spát" width={260} height={93} priority /></Link>
    <nav className="desktop-nav" aria-label="Hlavní navigace"><Link href="/#o-nas">O nás</Link><Link href="/#projekty">Projekty</Link><Link href="/#veda">Spánek a věda</Link><Link href="/#pro-firmy">Firmy a instituce</Link><Link href="/#aktuality">Aktuality</Link><Link href="/#kontakt">Kontakt</Link></nav>
    <div className="socials"><a href="https://linkedin.com/company/112782902/" aria-label="LinkedIn">in</a><a href="https://instagram.com/umenispatnf/" aria-label="Instagram">◎</a></div>
    <details className="mobile-menu"><summary aria-label="Otevřít menu"><span></span><span></span><span></span></summary><nav><Link href="/#o-nas">O nás</Link><Link href="/#projekty">Projekty</Link><Link href="/#veda">Spánek a věda</Link><Link href="/#pro-firmy">Firmy a instituce</Link><Link href="/#aktuality">Aktuality</Link><Link href="/#kontakt">Kontakt</Link></nav></details>
  </header>;
}

function Footer() {
  return <footer className="footer navy"><div className="container"><strong>NADAČNÍ FOND UMĚNÍ SPÁT</strong><p><a href="mailto:alice@umenispatnf.cz">alice@umenispatnf.cz</a> · Praha, Česká republika</p><p>© 2026 Umění spát, nadační fond · <a href="https://linkedin.com/company/112782902/">LinkedIn</a> · <a href="https://instagram.com/umenispatnf/">Instagram</a></p><small>Veškerý obsah tohoto webu je majetkem Umění spát, nadačního fondu. Bez písemného souhlasu nesmí být použit ani šířen, a to ani v pozměněné podobě.</small></div></footer>;
}

export default function PartnershipPage() {
  return <main>
    <Header />
    <section className="partnership-hero white"><div className="container partnership-hero-grid">
      <div><p className="eyebrow">05 — PARTNERSTVÍ</p><h1>Společně můžeme změnit, jak společnost přemýšlí o spánku.</h1><p className="partnership-lead">Propojujeme firmy, odborníky a instituce, které chtějí podpořit zdravější, bezpečnější a výkonnější společnost.</p><a className="button pink" href="mailto:alice@umenispatnf.cz">Domluvit partnerství</a></div>
      <aside className="partnership-note"><h2>Partnerství, které má smysl.</h2><p>Stavíme je na důvěře, společných hodnotách a konkrétním dopadu.</p></aside>
    </div></section>
    <section className="partnership-options mist"><div className="container">
      <p className="eyebrow">MOŽNOSTI PARTNERSTVÍ</p><h2>Vyberme společně formu spolupráce s největším dopadem.</h2>
      <div className="partnership-cards">{options.map(([number,title,text])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <a className="partnership-link" href="mailto:alice@umenispatnf.cz">Domluvit partnerství <span aria-hidden="true">↗</span></a>
    </div></section>
    <Footer />
  </main>;
}
