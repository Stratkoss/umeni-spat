import styles from "./social-links.module.css";

export default function SocialLinks() {
  return (
    <div className={styles.socials} role="group" aria-label="Sociální sítě v hlavičce">
      <a href="https://linkedin.com/company/112782902/" aria-label="LinkedIn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7.5 10v7M11.5 17v-7m0 3a3 3 0 0 1 6 0v4" /><circle cx="7.5" cy="7" r="1" fill="currentColor" stroke="none" /></svg>
      </a>
      <a href="https://instagram.com/umenispatnf/" aria-label="Instagram">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
      </a>
      <a href="https://www.facebook.com/profile.php?id=61588727978587" aria-label="Facebook">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M13 21V10c0-2 1-3 3-3h1M9 12h8" /></svg>
      </a>
    </div>
  );
}
