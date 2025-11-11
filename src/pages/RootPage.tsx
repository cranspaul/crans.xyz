import { Link } from "react-router-dom";

import PageLayout from "../components/PageLayout";

const RootPage = () => {
  return (
    <PageLayout contentAlignment="center">
      <main className="main-shell">
        <section className="outer-container outer-container--grid root-container">
          <div className="content-section content-section--grid root-content">
            <div className="faq-projects root-projects">
              <article className="project-card root-card">
                <div className="project-title">┌ Devin&apos; ┐</div>
                <p className="project-description">
                  /dɛvɪn/ verb, informal
                  <br />
                  <br />
                  Colloquial way of referring to the act of development.
                  <br />
                  <br />
                  Synonyms: coding / building / hacking
                  <br />
                  Related word: web3
                </p>
              </article>
              <article className="project-card root-card">
                <div className="project-title">┌ Tracks ┐</div>
                <p className="project-description">
                  /træks/ noun, plural
                  <br />
                  <br />
                  Audio recordings made individually or through collaboration
                  with other artists.
                  <br />
                  <br />
                  Synonyms: music production / beatmaking
                  <br />
                  Related word: DAW
                </p>
              </article>
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

export default RootPage;

