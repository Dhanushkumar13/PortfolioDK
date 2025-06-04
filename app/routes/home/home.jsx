import onlineIDE from "~/assets/OnlineIDE.png";
import ShortURL from "~/assets/UrlShortner.png"
import ShortURLLight from "~/assets/shortURL.Light.png"
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';
import mealsApp1 from "~/assets/mealsApp1.png";
import mealsApp2 from "~/assets/mealsApp2.png";
import malwareClassification from "~/assets/malwareClassification.png";
import chessWhite from "~/assets/chessWhite.png";
import chessBlack from "~/assets/chessBlack.png";
import excalidraw from "~/assets/excalidraw.png"

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Developer',
    description: `Developer portfolio of ${config.name}`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="CodeIT - Online IDE"
        description="Developed an online IDE platform using React + Typescript"
        buttonText="View Code"
        buttonLink="https://github.com/Dhanushkumar13/Replit-main.git"
        buttonText2="View project"
        buttonLink2="https://code-it-nu.vercel.app/"
        model={{
          type: 'laptop',
          alt: 'Online Editor',
          textures: [
            {
              srcSet: `${onlineIDE} 1280w, ${onlineIDE} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="ShortURL"
        description="A modern and minimal URL shortener built with Next.js, designed to convert long URLs into compact, shareable links."
        buttonText="View Code"
        buttonLink="https://github.com/Dhanushkumar13/shortURL.git"
        buttonText2="View Project"
        buttonLink2="https://sh-beta-two.vercel.app/"
        model={{
          type: 'phone',
          alt: 'URL shortner Website',
          textures: [
            {
              srcSet: `${ShortURL} 375w, ${ShortURL} 750w`,
              placeholder: ShortURL,
            },
            {
              srcSet: `${ShortURLLight} 375w, ${ShortURLLight} 750w`,
              placeholder: ShortURLLight,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        alternate
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Chess.com"
        description="A sleek chess game built with Next.js 13 and React 18, styled using Tailwind CSS and enhanced with smooth UI components from Radix UI."
        buttonText="View Code"
        buttonLink="https://github.com/Dhanushkumar13/Chess.git"
        buttonText2="View project"
        buttonLink2="https://chess-kappa-blond.vercel.app/"
        model={{
          type: 'phone',
          alt: 'Meals App',
          textures: [
            {
              srcSet: `${chessWhite} 375w, ${chessWhite} 750w`,
              placeholder: mealsApp1,
            },
            {
              srcSet: `${chessBlack} 375w, ${chessBlack} 750w`,
              placeholder: mealsApp2,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Excalidraw"
        description="Excalidraw- A Canvas application using NextJs, NodeJs, and Websocket to share and collaborate with your friends"
        buttonText="View Code"
        buttonLink="https://github.com/Dhanushkumar13/excalidraw.git"
        buttonText2="View project"
        buttonLink2="https://github.com/Dhanushkumar13/excalidraw.git"
        model={{
          type: 'laptop',
          alt: 'Malware Classification',
          textures: [
            {
              srcSet: `${excalidraw} 800w, ${excalidraw} 1920w`,
              placeholder: malwareClassification,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
