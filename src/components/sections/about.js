import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['SAP', 'ServiceNow', 'Agile', 'Python'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              {' '}
              While living in South Korea I undertook a path of self-reflection designed to identify
              my &quot;Why,&quot; an underlying philosophical foundation that would illustrate why I
              work and live the way that I do. &quot;Why&quot; would further inform my
              decision-making when determining a career path that aligns with what I enjoy doing and
              where I would deliver the most value.
            </p>
            <p>
              My deep, abiding interest in recognizing areas of improvement in the gym, with my
              brand, and at work, then developing a plan to transform these weaknesses into
              strengths, and then practising data-informed iteration led me to identifying with
              &quot;Turning Visons Into Value&quot; and to contemplate the Product Management
              discipline.
            </p>

            <p>
              Fast-forward to today, and I've had the privilege of working at a{' '}
              <a href="https://evanov.ca/">communications agency</a>,{' '}
              <a href="https://international.humber.ca/"> two post-secondary institutions</a>, my
              own company, <a href="https://centreforfacdev.ca/">a research hospital</a>,{' '}
              <a href="https://www.probit.com/en-us/">a start-up</a> in Korea, and currently the
              biggest{' '}
              <a href="https://www2.deloitte.com/ca/en/pages/about-deloitte/articles/home.html">
                professional services firm
              </a>{' '}
              in the world. My primary focus these days is delivering end-to-end client
              advisory—from business case to blueprinting to go-live—for Fortune 500 companies at
              Deloitte.
            </p>

            <p>
              {' '}
              When not immersed in my professional endeavors, I enjoy spending quality time with
              friends, family, and my partner while also pursuing my other passions such as
              intensive strength and triathlon training, bouldering, continuously honing my Korean
              language proficiency, and exploring new philosophical perspectives.
            </p>

            <p> Here are some technologies and methods I have been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.png"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
