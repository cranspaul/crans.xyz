import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiTelegramLogoFill } from "react-icons/pi";

import PageLayout from "../components/PageLayout";

const HomePage = () => {
  return (
    <PageLayout contentAlignment="center">
      <main className="main-shell">
        <section className="home-panel">
          <nav className="directory-structure" aria-label="Site navigation">
            <Link to="/r00t" className="directory-item">
              ┌── R00T
            </Link>
            <Link to="/devin" className="directory-item">
              ├── Devin&apos;
            </Link>
            <Link to="/tracks" className="directory-item">
              └── Tracks
            </Link>
          </nav>
          <footer className="footer-container">
            <div className="contact-logos">
              <a
                href="https://t.me/cranspaul"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <PiTelegramLogoFill className="contact-logo" />
              </a>
              <a
                href="https://x.com/cranspaul"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <FaXTwitter className="contact-logo" />
              </a>
              <a
                href="https://github.com/cranspaul"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="contact-logo" />
              </a>
            </div>
          </footer>
        </section>
      </main>
    </PageLayout>
  );
};

export default HomePage;

