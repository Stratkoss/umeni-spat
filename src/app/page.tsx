import Image from "next/image";

const pillars = [
  ["01", "Zdraví", "Regenerace, imunita a dlouhodobá odolnost začínají v noci."],
  ["02", "Výkonnost", "Soustředění, rozhodování a kreativita potřebují dobře odpočatý mozek."],
  ["03", "Bezpečnost", "Odpočinutí lidé chrání sebe i své okolí každý den."],
];

const projects = [
  ["01 / VZDĚLÁVÁNÍ", "Spánek pro školy", "Praktické know-how pro mladé lidi, pedagogy i rodiče."],
  ["02 / PREVENCE", "Klidnější města", "Veřejná debata o odpočinku, světle a zdravém rytmu."],
  ["03 / BEZPEČNOST", "Odpočatí v práci", "Programy pro obory, kde dobré rozhodnutí chrání životy."],
];

const scientists = [
  { image: "/images/scientist-jitka.jpg", name: "doc. MUDr. Jitka Bušková, Ph.D.", text: "Docentka neurologie a držitelka Evropského certifikátu ve spánkové medicíně. Působí jako vedoucí lékařka Oddělení spánkové medicíny Národního ústavu duševního zdraví a vyučuje spánkovou medicínu na Univerzitě Karlově. Za šíření osvěty o významu spánku opakovaně získala ocenění World Sleep Society. Je autorkou řady odborných publikací v oblasti neurologie a spánkové medicíny." },
  { image: "/images/scientist-eliska.jpg", name: "PhDr. Eliška Kodyšová, Ph.D.", text: "Sociální psycholožka se zaměřením na partnerské vztahy, rodičovství a duševní zdraví rodin. Působí v projektu iPREV Kliniky adiktologie 1. LF UK a je členkou evropské sítě EurofamNet. Dříve vedla organizaci Aperio – Společnost pro zdravé rodičovství. Ve své práci propojuje akademický výzkum, systémové přístupy a praktickou podporu rodin." },
  { image: "/images/scientist-petr.png", name: "MUDr. Petr Holba", text: "Zkušený lékař v oboru gynekologie a porodnictví s více než 14 lety klinické praxe. Specializuje se na vedení týmů, modernizaci zdravotnických provozů a zavádění klinických i organizačních standardů. Ve své práci propojuje medicínskou odbornost, strategické řízení a realizaci komplexních inovačních projektů." },
  { image: "/images/scientist-jachym.jpeg", name: "Mgr. Jáchym Kolář", text: "Fyzioterapeut centra prof. Pavla Koláře, který propojuje neuro-vizuální trénink s konceptem Dynamické neuromuskulární stabilizace (DNS). Věnuje se také výuce a výzkumu vztahu neuro-vizuálních funkcí a motorického systému. Byl členem zdravotnického týmu na Olympijských hrách v Paříži 2024, kde pečoval o sportovce vodního slalomu." },
  { image: "/images/scientist-miroslava.jpg", name: "PhDr. Miroslava Dvořáková, Ph.D.", text: "Andragožka se zaměřením na didaktiku dospělých a efektivní vzdělávání. Ve své autorské, metodické a lektorské práci propojuje teorii andragogiky s praxí. Jako externí vyučující dlouhodobě spolupracuje s Masarykovou a Mendelovou univerzitou." },
];

const news = [
  ["KAMPAŇ · 10/2026", "Čas na spánek: Jak zvládnout změnu času bez zbytečné únavy."],
  ["KAMPAŇ · 01–02/2027", "Sleep Tech Lab: Co o vašem spánku prozradí technologie?"],
  ["KAMPAŇ · 03/2027", "Měsíc spánku: Zdraví, výkon a bezpečnost začínají spánkem."],
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <main>
      <header className="header">
        <a href="#top" className="logo" aria-label="Umění spát – domů">
          <Image src="/images/logo.png" alt="Nadační fond Umění spát" width={260} height={93} priority />
        </a>
        <nav className="desktop-nav" aria-label="Hlavní navigace">
          <a href="#o-nas">O nás</a><a href="#projekty">Projekty</a><a href="#veda">Spánek a věda</a>
          <a href="#pro-firmy">Firmy a instituce</a><a href="#aktuality">Aktuality</a><a href="#kontakt">Kontakt</a>
        </nav>
        <div className="socials"><a href="https://linkedin.com/company/112782902/" aria-label="LinkedIn">in</a><a href="https://instagram.com/umenispatnf/" aria-label="Instagram">◎</a></div>
        <details className="mobile-menu"><summary aria-label="Otevřít menu"><span></span><span></span><span></span></summary><nav><a href="#o-nas">O nás</a><a href="#projekty">Projekty</a><a href="#veda">Spánek a věda</a><a href="#pro-firmy">Firmy a instituce</a><a href="#aktuality">Aktuality</a><a href="#kontakt">Kontakt</a></nav></details>
      </header>

      <section id="top" className="hero navy">
        <div className="container hero-inner">
          <Eyebrow>NADAČNÍ FOND UMĚNÍ SPÁT</Eyebrow>
          <h1>Spánek mění život.</h1>
          <div className="actions"><a className="button pink" href="#projekty">Poznejte naše projekty</a><a className="button light" href="/partnerstvi">Staňte se partnerem</a></div>
        </div>
      </section>

      <section id="proc-spanek" className="section white">
        <div className="container"><Eyebrow>01 — PROČ SPÁNEK</Eyebrow><h2>Kvalitní spánek není odměna. Je to infrastruktura života.</h2>
          <div className="three-grid">{pillars.map(([n,t,d])=><article className="soft-card" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
        </div>
      </section>

      <section id="projekty" className="section mist">
        <div className="container"><Eyebrow>02 — NAŠE PROJEKTY</Eyebrow><h2>Měníme vztah ke spánku tam, kde na něm nejvíc záleží.</h2>
          <div className="project-grid">{projects.map(([n,t,d])=><article className="project-card" key={n}><Eyebrow>{n}</Eyebrow><div><h3>{t}</h3><p>{d}</p></div><Arrow /></article>)}</div>
        </div>
      </section>

      <section id="veda" className="section white science">
        <div className="container"><div className="section-intro"><div><Eyebrow>03 — VĚDA A VÝZKUM</Eyebrow><h2>Věda, které můžeme důvěřovat.</h2></div><p>Stojíme na datech, spolupracujeme s odborníky a převádíme nejnovější poznatky o spánku do praxe.</p></div>
          <div className="scientists">{scientists.map((s)=><article className="scientist" key={s.name}><Image src={s.image} alt={s.name} width={420} height={560} sizes="(max-width: 700px) 100vw, 220px"/><div><Eyebrow>VĚDECKÁ RADA</Eyebrow><h3>{s.name}</h3><p>{s.text}</p></div></article>)}</div>
        </div>
      </section>

      <section className="section navy impact"><div className="container"><Eyebrow>04 — SPÁNEK, VÝKON A BEZPEČNOST</Eyebrow><h2>Odpočatí lidé dělají bezpečnější rozhodnutí.</h2><div className="impact-list"><p>Ve směnném provozu je spánek bezpečnostní faktor.</p><p>Ve vedení týmů je spánek základ dobrého úsudku.</p><p>V každodenním životě je spánek zdroj energie i pozornosti.</p></div></div></section>

      <section id="pro-firmy" className="section white"><div className="container split"><div><Eyebrow>05 — PRO FIRMY A INSTITUCE</Eyebrow><h2>Dobrý spánek je chytrá investice do lidí.</h2><p className="lead">Pomáháme organizacím otevřít téma spánku s respektem, daty a konkrétním dopadem.</p><a className="button pink" href="/partnerstvi">Zjistit možnosti spolupráce</a></div><aside className="note"><h3>Spánek je firemní kultura.</h3><p>Začít lze malým krokem. Měřit lze velkou změnu.</p></aside></div></section>

      <section className="partners mist"><div className="container"><Eyebrow>PARTNEŘI A ODBORNÁ KOMUNITA</Eyebrow><div className="partner-logos">{[1,2,3,4,5].map(n=><Image key={n} src={`/images/partner-${n}.png`} alt="Partnerská organizace" width={170} height={100}/>)}</div></div></section>

      <section id="o-nas" className="section white about"><div className="container"><Eyebrow>06 — O NADAČNÍM FONDU</Eyebrow><div className="about-heading"><h2>Vracíme spánku místo, které mu v moderním životě patří.</h2><p>Spojujeme odborníky, firmy, veřejné instituce i veřejnost. Protože kvalitní odpočinek není luxus — je to společný zájem.</p></div><h2 className="people-title">Lidé, kteří dávají fondu směr.</h2>
        <article className="founder"><Image src="/images/alice.jpg" alt="Mgr. et Mgr. Alice Pospíšilová" width={600} height={900}/><div><Eyebrow>ZAKLADATELKA A PŘEDSEDKYNĚ SPRÁVNÍ RADY</Eyebrow><h3>Mgr. et Mgr. Alice Pospíšilová</h3><p>Zakladatelka Nadačního fondu Umění spát, neuroterapeutka, mentální koučka a certifikovaná trenérka paměti a kognitivních funkcí. Dlouhodobě propojuje poznatky o spánku, regeneraci a zdraví mozku s prevencí, vzděláváním a podporou výkonnosti. Fond založila s cílem změnit způsob, jakým společnost o spánku přemýšlí – jako o základu zdraví, bezpečnosti a dlouhodobé prosperity.</p><blockquote>„Každou noc váš mozek vytváří člověka, kterým budete zítra.“</blockquote></div></article>
        <div className="board">{[["board-1.png","ČLENKA SPRÁVNÍ RADY","Ing. Michaela Kryšpínová"],["board-2.jpg","ČLEN SPRÁVNÍ RADY","doc. JUDr. Aleš Rozehnal, Ph.D."],["board-3.jpg","REVIZORKA","Ing. Viera Hladišová"]].map(([img,role,name])=><article key={name}><Image src={`/images/${img}`} alt={name} width={420} height={420}/><Eyebrow>{role}</Eyebrow><h3>{name}</h3></article>)}</div>
      </div></section>

      <section id="aktuality" className="section mist"><div className="container"><Eyebrow>07 — AKTUALITY</Eyebrow><h2>Co právě připravujeme.</h2><div className="news-grid">{news.map(([d,t],i)=><article key={d}><Image src={`/images/news-${i+1}.jpeg`} alt="" width={500} height={600}/><Eyebrow>{d}</Eyebrow><h3>{t}</h3></article>)}</div>
        <h2 className="work-title">Z naší práce.</h2><div className="work-grid"><a href="https://online.fliphtml5.com/eizkm/Renomag26_online_v2/#p=37"><Image src="/images/work-1.jpg" alt="Mikrospánek" width={700} height={400}/><Eyebrow>ČLÁNEK · RENOCAR</Eyebrow><h3>Mikrospánek: několik sekund, které mohou rozhodnout.</h3></a><a href="https://o2chytraskola.cz/novinka/mozek-vs-displej-telefonu-vecerni-souboj-ktery-zname-vsichni-jak-ho-vyhrat"><Image src="/images/work-2.png" alt="Mozek vs. displej telefonu" width={700} height={400}/><Eyebrow>ČLÁNEK · NADACE O2</Eyebrow><h3>Mozek vs. displej telefonu: večerní souboj, který známe všichni. Jak ho vyhrát?</h3></a></div>
      </div></section>

      <section className="cta navy"><div className="container"><Eyebrow>PARTNERSTVÍ PRO LEPŠÍ NOCI</Eyebrow><h2>Pojďme dát spánku váhu, kterou si zaslouží.</h2><p>Nabízíme strategické partnerství, podporu konkrétních projektů i odbornou a technologickou spolupráci.</p><a className="button pink" href="/partnerstvi">Navázat spolupráci</a></div></section>

      <section id="kontakt" className="section white contact"><div className="container"><div className="contact-intro"><h2>Spojme se!</h2><p>Máte zájem o odbornou spolupráci, partnerství nebo podporu některého z našich projektů? Napište nám.</p></div><div className="contact-grid"><div><h3>Mgr. et Mgr. Alice Pospíšilová</h3><p>Zakladatelka a předsedkyně správní rady</p><a href="mailto:alice@umenispatnf.cz">alice@umenispatnf.cz</a><a href="tel:+420603838333">+420 603 838 333</a><address>Nadační fond Umění spát<br/>Na Příkopě 17/1047<br/>110 00 Praha 1</address></div><div className="support"><div><Eyebrow>Podpořte naši práci</Eyebrow><p>Transparentní účet</p><strong>207966005/5500</strong></div><Image src="/images/qr.jpeg" alt="QR kód transparentního účtu" width={175} height={175}/></div></div></div></section>

      <footer className="footer navy"><div className="container"><strong>NADAČNÍ FOND UMĚNÍ SPÁT</strong><p><a href="mailto:alice@umenispatnf.cz">alice@umenispatnf.cz</a> · Praha, Česká republika</p><p>© 2026 Umění spát, nadační fond · <a href="https://linkedin.com/company/112782902/">LinkedIn</a> · <a href="https://instagram.com/umenispatnf/">Instagram</a></p><small>Veškerý obsah tohoto webu je majetkem Umění spát, nadačního fondu. Bez písemného souhlasu nesmí být použit ani šířen, a to ani v pozměněné podobě.</small></div></footer>
    </main>
  );
}
