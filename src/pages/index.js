import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import spaceshipInt from '../assets/images/spaceshipInt.jpg';
import planetWip from '../assets/images/planetWip.jpg';

import picUnrevealed from '../assets/images/picUnrevealed.jpg';

import moonpostPreview from '../assets/images/moonpost-preview.png';
import lunarDestroyerPreview from '../assets/images/lunar-destroyer-preview.png';
import lunarDestroyerBp from '../assets/images/lunar-destroyer-bp.png';
import teaserPreview from '../assets/images/teaser.jpg';

import portalImg from '../assets/images/genesis-portal-final.jpg';
import explorationImg from '../assets/images/lambo-exploration-final.jpg';
import lamboSolarImg from '../assets/images/lambo-solar-system.png';
import moonlandSmallImg from '../assets/images/lambomoon-land-small-preview.png';
import moonlandMedImg from '../assets/images/lambomoon-land-medium-preview.png';
import moonlandLargeImg from '../assets/images/lambomoon-land-large-preview.png';

import Scroll from '../components/Scroll';

import { fetchMarkdown } from '../components/fetchMarkdown';

const THE_GAME_URL =
  'https://raw.githubusercontent.com/duyyudus/lambomoon-metaverse-web/main/markdown/theGame.md';

const STORY_URL =
  'https://raw.githubusercontent.com/duyyudus/lambomoon-metaverse-web/main/markdown/story.md';

const SOLAR_SYSTEM_URL =
  'https://raw.githubusercontent.com/duyyudus/lambomoon-metaverse-web/main/markdown/solarSystem.md';

const GAMEPLAY_URL =
  'https://raw.githubusercontent.com/duyyudus/lambomoon-metaverse-web/main/markdown/gameplay.md';

const TOKEN_URL =
  'https://raw.githubusercontent.com/duyyudus/lambomoon-metaverse-web/main/markdown/token.md';

const TECH_URL =
  'https://raw.githubusercontent.com/duyyudus/lambomoon-metaverse-web/main/markdown/tech.md';

const TEAM_URL =
  'https://raw.githubusercontent.com/duyyudus/lambomoon-metaverse-web/main/markdown/team.md';

const sections = [
  { id: 'top', name: 'Intro', icon: '' },
  { id: 'game', name: 'The Game', icon: '' },
  { id: 'showcase', name: 'Showcase', icon: '' },
  { id: 'story', name: 'Story', icon: '' },
  { id: 'solar-system', name: 'Lambo Solar System', icon: '' },
  { id: 'gameplay', name: 'Gameplay To Earn', icon: '' },
  { id: 'token', name: 'Token and Governance', icon: '' },
  { id: 'tech', name: 'Technology', icon: '' },
  { id: 'roadmap', name: 'Roadmap', icon: '' },
  { id: 'about', name: 'Team', icon: '' },
  { id: 'community', name: 'Community', icon: '' },
];

const IndexPage = () => {
  const [theGameMd, setTheGameMd] = useState('');
  const [storyMd, setStoryMd] = useState('');
  const [solarSystemMd, setSolarSystemMd] = useState('');
  const [gameplayMd, setGameplayMd] = useState('');
  const [tokenMd, setTokenMd] = useState('');
  const [techMd, setTechMd] = useState('');
  const [teamMd, setTeamMd] = useState('');

  useEffect(() => {
    fetchMarkdown(THE_GAME_URL, setTheGameMd);
    fetchMarkdown(STORY_URL, setStoryMd);
    fetchMarkdown(SOLAR_SYSTEM_URL, setSolarSystemMd);
    fetchMarkdown(GAMEPLAY_URL, setGameplayMd);
    fetchMarkdown(TOKEN_URL, setTokenMd);
    fetchMarkdown(TECH_URL, setTechMd);
    fetchMarkdown(TEAM_URL, setTeamMd);
  }, []);

  return (
    <Layout>
      <SideBar sections={sections} />

      <div id="main">
        <section id="top" className="one dark cover">
          <div className="container">
            <header>
              <h2 className="alt">Blockbuster NFT game on Moonbeam/Polkadot</h2>
              <p>Powered by Unreal Engine 5</p>
            </header>

            <footer>
              {/* <Scroll type="id" element={'game'}> */}
              <a
                href="https://www.youtube.com/watch?v=tHz1bQ90aSQ"
                className="button"
              >
                Watch Teaser Video
              </a>
              {/* </Scroll> */}
            </footer>
          </div>
        </section>

        <section id="game" className="two">
          <div className="container">
            <header>
              <h2>The Game</h2>
            </header>
            <div style={{ textAlign: 'left' }}>
              <a className="image fit">
                <img src={explorationImg} alt="L.A.M.B.O ALLIANCE is coming" />
              </a>
              <br />

              <ReactMarkdown children={theGameMd} remarkPlugins={[remarkGfm]} />

              <a className="image fit">
                <img
                  src="https://raw.githubusercontent.com/duyyudus/lambomoon-metaverse-web/main/static/side-pic-1.png"
                  alt="Genesis Lunar Destroyer"
                />
              </a>
            </div>
          </div>
        </section>

        <section id="showcase" className="three">
          <div className="container">
            <header>
              <h2>Latest progress</h2>
            </header>

            <p>
              Unlike many other projects in crypto, we want to show what we have
              done first.
              <br />
              The results say it all.
            </p>

            <div className="row">
              <div className="col-4 col-12-mobile">
                <article className="item">
                  <a
                    href="https://www.youtube.com/watch?v=tHz1bQ90aSQ"
                    className="image fit"
                  >
                    <img src={teaserPreview} alt="" />
                  </a>
                  <header>
                    <h3>Lambomoon Teaser</h3>
                  </header>
                </article>

                <article className="item">
                  <a href="https://youtu.be/WocNbI8nQ4I" className="image fit">
                    <img src={lunarDestroyerPreview} alt="" />
                  </a>
                  <header>
                    <h3>Genesis Lunar Destroyer - v1</h3>
                  </header>
                </article>

                <article className="item">
                  <a href="https://youtu.be/t-FzkUd1zlc" className="image fit">
                    <img src={moonlandSmallImg} alt="" />
                  </a>
                  <header>
                    <h3>Lambomoon Land - Small Plot - v1</h3>
                  </header>
                </article>
              </div>

              <div className="col-4 col-12-mobile">
                <article className="item">
                  <a
                    href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f5bc0948-5100-464c-93d3-ada07a996900/layout.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211103T060721Z&X-Amz-Expires=86400&X-Amz-Signature=26485eaf602826ae899e756fb8c395b0c1c721e8977d0dc10a0b71f2c312486d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22layout.png%22"
                    className="image fit"
                  >
                    <img src={lunarDestroyerBp} alt="" />
                  </a>
                  <header>
                    <h3>Genesis Lunar Destroyer - v1 - Blueprint</h3>
                  </header>
                </article>

                <article className="item">
                  <a href="https://youtu.be/L-UxlDiiCg4" className="image fit">
                    <img src={moonlandMedImg} alt="" />
                  </a>
                  <header>
                    <h3>Lambomoon Land - Medium Plot - v1</h3>
                  </header>
                </article>

                <article className="item">
                  <a href="https://youtu.be/pW3KRJe8Bn4" className="image fit">
                    <img src={spaceshipInt} alt="" />
                  </a>
                  <header>
                    <h3>PvP spaceship interior - WIP 1</h3>
                  </header>
                </article>
              </div>

              <div className="col-4 col-12-mobile">
                <article className="item">
                  <a href="https://youtu.be/9SYc9vqztl4" className="image fit">
                    <img src={moonlandLargeImg} alt="" />
                  </a>
                  <header>
                    <h3>Lambomoon Land - Large Plot - v1</h3>
                  </header>
                </article>

                <article className="item">
                  <a href="https://youtu.be/ZLLvOjT79B4" className="image fit">
                    <img src={moonpostPreview} alt="" />
                  </a>
                  <header>
                    <h3>Lambase Moonpost - v1</h3>
                  </header>
                </article>

                <article className="item">
                  <a href="https://youtu.be/Fs3q9qS6_U0" className="image fit">
                    <img src={planetWip} alt="" />
                  </a>
                  <header>
                    <h3>Lambo planet construction - WIP 1</h3>
                  </header>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="story" className="two">
          <div className="container">
            <header>
              <h2>Story</h2>
            </header>
            <div style={{ textAlign: 'left' }}>
              <a className="image fit">
                <img src={portalImg} alt="Genesis Portal" />
              </a>
              <br />
              <ReactMarkdown children={storyMd} remarkPlugins={[remarkGfm]} />
              Please see full story at Lambomoon official{' '}
              <a href="https://wiki.lambomoon.xyz/Story-Gameplay-Reward-2264ecc193e04659adc9f3475e52ddf1">
                Wiki
              </a>
            </div>
          </div>
        </section>

        <section id="solar-system" className="two">
          <div className="container">
            <header>
              <h2>L.A.M.B.O Solar System</h2>
            </header>
            <div style={{ textAlign: 'left' }}>
              <a className="image fit">
                <img src={lamboSolarImg} alt="L.A.M.B.O solar system" />
              </a>
              <br />
              <ReactMarkdown
                children={solarSystemMd}
                remarkPlugins={[remarkGfm]}
              />
              Please follow latest updates at Lambomoon official{' '}
              <a href="https://wiki.lambomoon.xyz/Lambo-Solar-System-aada66a6247e41819d1cc03be8f5f8b3">
                Wiki
              </a>
            </div>
          </div>
        </section>

        <section id="gameplay" className="two">
          <div className="container">
            <header>
              <h2>Gameplay To Earn</h2>
            </header>
            <div style={{ textAlign: 'left' }}>
              <ReactMarkdown
                children={gameplayMd}
                remarkPlugins={[remarkGfm]}
              />
              Please see full gameplay at Lambomoon official{' '}
              <a href="https://wiki.lambomoon.xyz/Story-Gameplay-Reward-2264ecc193e04659adc9f3475e52ddf1">
                Wiki
              </a>
            </div>
          </div>
        </section>

        <section id="token" className="two">
          <div className="container">
            <header>
              <h2>Token and Governance</h2>
            </header>
            <div style={{ textAlign: 'left' }}>
              <ReactMarkdown children={tokenMd} remarkPlugins={[remarkGfm]} />
              Please follow latest updates at Lambomoon official{' '}
              <a href="https://wiki.lambomoon.xyz/Tokenomic-Governance-dd76127122f54ff28567e477b11d624d">
                Wiki
              </a>
            </div>
          </div>
        </section>

        <section id="tech" className="two">
          <div className="container">
            <header>
              <h2>Technology</h2>
            </header>
            <div style={{ textAlign: 'left' }}>
              <ReactMarkdown children={techMd} remarkPlugins={[remarkGfm]} />
              Please follow latest updates at Lambomoon official{' '}
              <a href="https://wiki.lambomoon.xyz/Technology-384a7344ad0249d8a788364a31ee1d03">
                Wiki
              </a>
            </div>
          </div>
        </section>

        <section id="roadmap" className="two">
          <div className="container">
            <header>
              <h2>Roadmap</h2>
            </header>
            <div style={{ textAlign: 'left' }}>
              {/* <ReactMarkdown children={roadmapMd} remarkPlugins={[remarkGfm]} /> */}
              Please follow latest roadmap at Lambomoon official{' '}
              <a href="https://wiki.lambomoon.xyz/Roadmap-34830b97d6254b94a4099c748819a7d3">
                Wiki
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="four">
          <div className="container">
            <header>
              <h2>Team</h2>
            </header>

            <div style={{ textAlign: 'left' }}>
              <ReactMarkdown children={teamMd} remarkPlugins={[remarkGfm]} />
            </div>
          </div>
        </section>

        <section id="community" className="five">
          <div className="container">
            <header>
              <h2>Community</h2>
            </header>

            <p>
              <a href="https://twitter.com/lambomoon_verse">Twitter</a>
              {' • '}
              <a href="https://medium.com/lambomoon-metaverse">Medium</a>
              {' • '}
              <a href="https://t.me/lambomoon_metaverse">Telegram</a>
              {' • '}
              <a href="https://discord.gg/tdaenaaJHt">Discord</a>
              {' • '}
              <a href="https://wiki.lambomoon.xyz">Wiki</a>
            </p>
          </div>
        </section>
      </div>

      <PageFooter />
    </Layout>
  );
};

export default IndexPage;
