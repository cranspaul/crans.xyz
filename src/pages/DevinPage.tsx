import { Link } from "react-router-dom";

import PageLayout from "../components/PageLayout";

const DEVIN_ICON = "/devin_file.gif";
const WARS_OF_CARDS_IMAGE = "/icon.gif";

const projects = [
  {
    name: "Money",
    href: "https://money.crans.xyz/",
    description: "Money",
    media: DEVIN_ICON
  },
  {
    name: "Wars Of Cards",
    href: "https://warsofcards.online/",
    description: "Wars Of Cards",
    media: WARS_OF_CARDS_IMAGE
  }
] as const;

const DevinPage = () => {
  return (
    <PageLayout>
      <main className="main-shell">
        <section className="outer-container outer-container--grid outer-container--scrollable">
          <div className="content-section content-section--grid content-section--scrollable">
            <div className="project-grid project-grid--uniform project-grid--centered">
              {projects.map((project) => (
                <a key={project.name} href={project.href} className="project-tile" target="_blank" rel="noopener noreferrer">
                  <div className="project-logo">
                    <img src={project.media} alt={project.name} loading="lazy" />
                  </div>
                  <div className="project-info">
                    <p>{project.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="back-button-container">
            <Link to="/" className="button">
              ← Go Back
            </Link>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default DevinPage;

