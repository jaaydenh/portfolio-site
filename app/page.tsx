import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Experience from './ui/experience';
import Project from './ui/project';

export default function Page() {
  return (
    <div className="m-auto min-h-screen p-6">
      <div className="mt-4">
        <header className="m-auto max-w-prose px-6 py-10">
          <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
            Jaayden Halko
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-100">
            Full-Stack Software Engineer
          </h2>
          <p className="mt-3">I build products for the modern web.</p>
          <ul className="mt-8 flex items-center" aria-label="social media">
            <li className="mr-5 text-xs">
              <Link
                className="hover:text-slate-100"
                title="LinkedIn"
                aria-label="LinkedIn (opens in a new tab)"
                href="https://www.linkedin.com/in/jaaydenhalko/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </Link>
            </li>
            <li className="mr-5 text-xs">
              <Link
                className="hover:text-slate-100"
                title="Github"
                aria-label="GitHub (opens in a new tab)"
                href="https://github.com/jaaydenh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Github</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </Link>
            </li>
          </ul>
        </header>
        <main className="m-auto flex max-w-prose flex-col px-6 py-6">
          <section className="mb-12" aria-label="About me">
            <h2 className="my-8 text-sm font-bold uppercase tracking-widest text-slate-100">
              About
            </h2>
            <p className="mb-5">
              I worked on a wide variety of projects over the last decade
              including xbox.com, the web platform for the PS4, games playable
              through Facebook and Zoom and a free-to-play mobile game.
            </p>

            <p className="mb-5 ">
              My focus now is on building web apps using React, Typescript and
              Next.js.
            </p>

            <p>
              Outside of coding I devote my time to fitness, prehab and learning
              about the latest advances in human longevity.
            </p>
          </section>
          <section className="mb-12" aria-label="Work experience">
            <h2 className="my-8 text-sm font-bold uppercase tracking-widest text-slate-100">
              EXPERIENCE
            </h2>
            <ul>
              <Experience
                start={'August 2020'}
                end={'July 2023'}
                title={'Lead Software Engineer'}
                company={'Playco'}
                companyHref={'https://www.play.co/'}
                projects={[
                  {
                    name: 'Heads Up!',
                    url: 'https://marketplace.zoom.us/apps/imd9tnb1Q--Fv-4iJyaobw',
                  },
                  {
                    name: 'Ask Away',
                    url: 'https://marketplace.zoom.us/apps/rVVDJnIqRgGEKcQ-SAdVJA',
                  },
                  {
                    name: 'Beadle',
                    url: 'https://beadle.gg/',
                  },
                ]}
                skills={[
                  'React',
                  'TypeScript',
                  'JavaScript',
                  'Node.js',
                  'Amplitude',
                ]}
              >
                Released Catlife on Facebook Instant Games and scaled to 200k
                DAU. Built using React, Typescript, a custom canvas renderer,
                Node.js and AWS.
              </Experience>
              <Experience
                start={'January 2022'}
                end={'April 2022'}
                title={'Software Engineer'}
                company={'GameDao'}
                companyHref={'https://gamedao.co/'}
                skills={[
                  'React',
                  'TypeScript',
                  'Next.js',
                  'GraphQL',
                  'Subgraph',
                ]}
              >
                Contributed to the Next.js front-end for a blockchain based
                community funding project for games.
              </Experience>
              <Experience
                start={'May 2019'}
                end={'August 2022'}
                title={'Senior Software Engineer'}
                company={'Automotive Mastermind'}
                companyHref={'https://www.automotivemastermind.com/'}
                skills={[
                  'C#',
                  'Javascript',
                  'Angular',
                  'React',
                  '.Net Core',
                  'Google Cloud',
                  'Azure',
                  'Redis',
                  'Kubernetes',
                  'Docker',
                ]}
              >
                Developed the user facing web app and admin portal for a SaaS
                based sales platform for car dealerships. Full-stack development
                work included .Net Core micro services hosted on Google Cloud.
              </Experience>
              <Experience
                start={'January 2018'}
                end={'April 2019'}
                title={'Engineering Manager'}
                company={'Leverage'}
                companyHref={'https://www.getleverage.com/'}
                skills={[
                  'React',
                  'Javascript',
                  'Python',
                  'AWS',
                  'PHP',
                  'WordPress',
                  'SquareSpace',
                ]}
              >
                Worked with clients to gather requirements and plan new web and
                mobile development projects. Provided leadership for the
                engineering team and managed hiring, dev/release processes and
                code quality.
              </Experience>
              <Experience
                start={'July 2016'}
                end={'December 2023'}
                title={'Technical Lead'}
                company={'MindIsle Games'}
                companyHref={'https://www.fourzy.com/'}
                projects={[
                  {
                    name: 'Fourzy',
                    url: 'https://www.fourzy.com/',
                  },
                ]}
                skills={[
                  'Unity',
                  'C#',
                  'Javascript',
                  'Azure',
                  'Playfab',
                  '.Net Core',
                  'MongoDB',
                  'Firebase',
                ]}
              >
                Led a 5 person team in the development of a free-to-play
                2-player strategy game for iOS and Android.
              </Experience>
            </ul>
            <div>
              <Link
                className="inline-flex font-medium text-slate-100 hover:text-blue-400"
                href="resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Full Resume (opens in a new tab)"
              >
                View Full Resume{' '}
                <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </section>
          <section aria-label="Projects">
            <h2 className="my-8 text-sm font-bold uppercase tracking-widest text-slate-100">
              PROJECTS
            </h2>
            <ul>
              <Project
                name={'Ask Away'}
                src={'/ask-away.png'}
                projectHref={
                  'https://marketplace.zoom.us/apps/rVVDJnIqRgGEKcQ-SAdVJA'
                }
              >
                A web app running in the Zoom client that gives meeting
                participants a fun and engaging opportunity to answer randomly
                generated questions about one another.
              </Project>
              <Project
                name={'Heads Up!'}
                src={'/heads-up.png'}
                projectHref={
                  'https://marketplace.zoom.us/apps/imd9tnb1Q--Fv-4iJyaobw'
                }
              >
                A port of the original mobile game for Zoom. Heads Up is twist
                on charades where players guess as many words as possible from
                their friends clues before the time runs out.
              </Project>
              <Project
                name={'Fourzy'}
                src={'/fourzy.png'}
                projectHref={'https://www.fourzy.com/'}
                skills={['Unity', 'Playfab', 'Azure', 'Photon Engine']}
              >
                A reimagining of Connect 4 as an online multiplayer board game
                for iOS, Android and Steam.
              </Project>
              <Project
                name={'Beadle'}
                src={'/beadle.png'}
                projectHref={'https://beadle.gg/'}
                skills={['React', 'Javascript', 'Node.js']}
              >
                A Heardle remake for Beatles fans. Guess the Beatles song in 5
                guesses or less by hearing a short clip of the song.
              </Project>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
