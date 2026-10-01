import { externalLinks, socialLinks } from '../data/socialLinks';

/**
 * Минималистичный подвал: бренд, внешние ссылки, год.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__logo">
            Code Retreat <span className="accent">Russia</span>
          </p>
          <p className="footer__note">Некоммерческое сообщество практикующих разработчиков.</p>
        </div>

        <nav className="footer__nav" aria-label="Внешние ссылки">
          <ul className="footer__list">
            {socialLinks.map((link) => (
              <li key={link.id}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="footer__list">
            <li>
              <a href={externalLinks.codeRetreat} target="_blank" rel="noopener noreferrer">
                coderetreat.org
              </a>
            </li>
            <li>
              <a href={externalLinks.scrumRu} target="_blank" rel="noopener noreferrer">
                Scrum.Ru
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container footer__bottom">
        <p className="mono">© {year} Code Retreat Russia</p>
        <a className="mono footer__top" href="#top">
          Наверх ↑
        </a>
      </div>
    </footer>
  );
}
