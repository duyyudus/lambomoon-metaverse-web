import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import portalImg from '../assets/images/genesis-portal-final.jpg';
import lamboSolarImg from '../assets/images/lambo-solar-system.png';

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
              <Scroll type="id" element={'game'}>
                <a href="#game" className="button">
                  Let's fly
                </a>
              </Scroll>
            </footer>
          </div>
        </section>

        <section id="game" className="two">
          <div className="container">
            <header>
              <h2>The Game</h2>
            </header>
            <div style={{ textAlign: 'left' }}>
              <ReactMarkdown children={theGameMd} remarkPlugins={[remarkGfm]} />
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
                  <a href="https://youtu.be/gTHD1tyZt1s" className="image fit">
                    <img src={pic1} alt="" />
                  </a>
                  <header>
                    <h3>PvP spaceship interior - WIP 1</h3>
                  </header>
                </article>
                <article className="item">
                  <a href="/#" className="image fit">
                    <img src={pic2} alt="" />
                  </a>
                  <header>
                    <h3>?</h3>
                  </header>
                </article>
              </div>
              <div className="col-4 col-12-mobile">
                <article className="item">
                  <a href="https://youtu.be/jlKHk2dtgx4" className="image fit">
                    <img src={pic3} alt="" />
                  </a>
                  <header>
                    <h3>Lambo planet construction - WIP 1</h3>
                  </header>
                </article>
                <article className="item">
                  <a href="/#" className="image fit">
                    <img src={pic4} alt="" />
                  </a>
                  <header>
                    <h3>?</h3>
                  </header>
                </article>
              </div>
              <div className="col-4 col-12-mobile">
                <article className="item">
                  <a href="/#" className="image fit">
                    <img src={pic5} alt="" />
                  </a>
                  <header>
                    <h3>?</h3>
                  </header>
                </article>
                <article className="item">
                  <a href="/#" className="image fit">
                    <img src={pic6} alt="" />
                  </a>
                  <header>
                    <h3>?</h3>
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
                <img src={portalImg} alt="Military" />
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
