import { Link } from "react-router-dom";

import PageLayout from "../components/PageLayout";

const TRACK_ICON = "/tracks_file.gif";

type MusicProject = {
  readonly name: string;
  readonly href: string;
  readonly media: string;
  readonly internal?: boolean;
};

const musicProjects: readonly MusicProject[] = [
  {
    name: "#hot16challenge",
    href: "/tracks/hot16challenge",
    media: TRACK_ICON,
    internal: true
  },
  {
    name: "Fast Joints",
    href: "https://soundcloud.com/paul_crans",
    media: TRACK_ICON
  }
] as const;

const TracksPage = () => {
  return (
    <PageLayout contentAlignment="center">
      <main className="main-shell">
        <section className="outer-container outer-container--grid tracks-container">
          <div className="content-section content-section--grid">
            <div className="project-grid project-grid--uniform tracks-grid">
              {musicProjects.map((project) => {
                const isInternal = project.internal;

                const cardContent = (
                  <>
                    <div className="project-logo">
                      <img src={project.media} alt={project.name} loading="lazy" />
                    </div>
                    <div className="project-info">
                      <p>{project.name}</p>
                    </div>
                  </>
                );

                if (isInternal) {
                  return (
                    <Link key={project.name} to={project.href} className="project-tile">
                      {cardContent}
                    </Link>
                  );
                }

                return (
                  <a
                    key={project.name}
                    href={project.href}
                    className="project-tile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {cardContent}
                  </a>
                );
              })}
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

export default TracksPage;

