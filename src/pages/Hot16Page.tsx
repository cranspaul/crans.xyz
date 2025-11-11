import { Link } from "react-router-dom";

import PageLayout from "../components/PageLayout";

const Hot16Page = () => {
  return (
    <PageLayout contentAlignment="center">
      <main className="main-shell">
        <section className="outer-container outer-container--grid">
          <article className="content-section content-section--grid hot16-content">
            <p>
              #hot16challenge is a Polish nationwide music campaign launched in
              2014. According to its rules, each artist must record a 16-bar song
              within 72 hours of receiving a nomination and nominate other artists
              for the same task. The original version of the beat used in the song
              was unfinished and unmixed; also, it had been published under the old
              name – Krasnal.
            </p>
            <p>
              Following the success of the single &quot;Zrobiłem Ją&quot;,
              released in summer 2014 on the Prosto Label as part of the debut
              album &quot;Wiry&quot;, a new track was created together with Żyto
              for the #hot16challenge.
            </p>
            <p>
              Instrumental released by DAOrecords in June 2021. Purchase a copy of
              an NFT and unlock HQ stems with a full length of 03:12 minutes and
              four custom-made presets for Sylenth1 used in the beat.
            </p>
            <div className="button-container">
              <a
                href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/80988198869171339287920091716558520191725486817295584358103445675327872827402"
                className="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get the NFT!
              </a>
            </div>
            <div className="button-container">
              <a
                href="https://www.youtube.com/watch?v=s4X882Q9ZBw"
                className="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Żyto - Zrobiłem Ją | YouTube
              </a>
            </div>
            <div className="button-container">
              <a
                href="https://www.youtube.com/watch?v=_0PNxuSHUHM"
                className="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Żyto - #hot16challenge | YouTube
              </a>
            </div>
          </article>
          <div className="navigation-buttons">
            <Link to="/tracks" className="button nav-button">
              ← Go Back
            </Link>
            <Link to="/" className="button nav-button">
              Go to R00T →
            </Link>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default Hot16Page;

