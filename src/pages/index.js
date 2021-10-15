import React from 'react';
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

import Scroll from '../components/Scroll';

import {
  theGame,
  story,
  solarSystem,
  gameplay,
  token,
  tech,
} from './markdown.js';

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

const IndexPage = () => (
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
            <ReactMarkdown children={theGame} remarkPlugins={[remarkGfm]} />
          </div>
        </div>
      </section>

      <section id="showcase" className="three">
        <div className="container">
          <header>
            <h2>Latest progresses</h2>
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
            <ReactMarkdown children={story} remarkPlugins={[remarkGfm]} />
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
            <ReactMarkdown children={solarSystem} remarkPlugins={[remarkGfm]} />
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
            <ReactMarkdown children={gameplay} remarkPlugins={[remarkGfm]} />
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
            <ReactMarkdown children={token} remarkPlugins={[remarkGfm]} />
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
            <ReactMarkdown children={tech} remarkPlugins={[remarkGfm]} />
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
            {/* <ReactMarkdown children={tech} remarkPlugins={[remarkGfm]} /> */}
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

          <p style={{ textAlign: 'left' }}>
            We are a group of early supporters in Polkadot/Kusama ecosystem (
            joined Polkadot ICO ), with diversified experience in many
            industries, especially blockchain and AAA game development.
            <br />
            <br />
            The founder, in particularly, has worked in AAA gamedev and 3D
            industry for 10 years, as well as been involved in crypto since 2016
            as retail investor. He knows how to combine the best of both worlds.
            We are semi-anon, although we take our privacy serious, if you are
            VCs and want to perform due diligence, just contact us and we can
            get to know each other.
            <br />
            <br />
            Our mission is to explore new ideas and biz models that only viable
            with blockchain technology and decentralized economy, in combination
            with high-end game development technology. Lambomoon Metaverse is
            our first effort in this long journey.
          </p>
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

export default IndexPage;
