const CITY_LINKS = ["SAINT PETERSBURG", "MOSCOW", "BERLIN", "REMOTE"];

export function Footer() {
  return (
    <footer className="footer">
      <div className="page-pad">
        <div className="footer-cities">
          <div className="footer-label">WHERE I WORK</div>
          {CITY_LINKS.map((city) => (
            <a className="city-link" href="#contacts" key={city}>
              <span aria-hidden="true">↳</span> {city}
            </a>
          ))}
        </div>
        <div className="footer-bottom">
          <span>ALL RIGHTS RESERVED 2026</span>
          <div className="footer-legal">
            <a href="#about">
              <span aria-hidden="true">↳</span> LEGAL NOTICE
            </a>
            <a href="#about">
              <span aria-hidden="true">↳</span> PRIVACY POLICY
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
