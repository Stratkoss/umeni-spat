import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
import SleepArt from "./sleep-art";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.intro}>
          <p>Dobré noci.<br /><span>Lepší dny.</span></p>
          <SleepArt className={styles.art} />
        </div>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" aria-label="Umění spát – domů"><Image src="/images/logo.png" alt="Nadační fond Umění spát" width={220} height={79} /></Link>
            <p>Vracíme spánku místo,<br />které mu v životě patří.</p>
          </div>
          <nav className={styles.links} aria-label="Navigace v zápatí">
            <h2>Objevte více</h2>
            <Link href="/#o-nas">O nás</Link>
            <Link href="/#projekty">Naše projekty</Link>
            <Link href="/#veda">Spánek a věda</Link>
            <Link href="/partnerstvi">Partnerství</Link>
            <Link href="/#aktuality">Aktuality</Link>
          </nav>
          <div className={styles.contact}>
            <h2>Zůstaňme ve spojení</h2>
            <a className={styles.email} href="mailto:alice@umenispatnf.cz">alice@umenispatnf.cz <span aria-hidden="true">↗</span></a>
            <p>Praha, Česká republika</p>
            <nav className={styles.social} aria-label="Sociální sítě">
              <a href="https://linkedin.com/company/112782902/">LinkedIn</a>
              <a href="https://instagram.com/umenispatnf/">Instagram</a>
              <a href="https://www.facebook.com/profile.php?id=61588727978587">Facebook</a>
            </nav>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© 2026 Umění spát, nadační fond</p>
          <small>Veškerý obsah tohoto webu je majetkem Umění spát, nadačního fondu. Bez písemného souhlasu nesmí být použit ani šířen, a to ani v pozměněné podobě.</small>
        </div>
      </div>
    </footer>
  );
}
