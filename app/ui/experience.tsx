import Link from 'next/link';
import { LinkIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

interface ExperienceProps {
  start: string;
  end: string;
  title: string;
  company: string;
  companyHref: string;
  projects?: { name: string; url: string }[];
  skills: string[];
  children: React.ReactNode;
}

export default function Experience({
  start,
  end,
  title,
  company,
  companyHref,
  projects,
  skills,
  children,
}: ExperienceProps) {
  return (
    <li className="my-9">
      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
        {start} — {end}
      </p>
      <h3 className="my-3 font-medium leading-tight text-slate-100 hover:text-blue-400">
        <Link
          href={companyHref}
          target="_blank"
          className="inline-flex"
          aria-label={`${title} · ${company} (opens in a new tab)`}
        >
          {title} · {company}{' '}
          <ArrowTopRightOnSquareIcon
            className="ml-1 h-4 w-4"
            aria-hidden="true"
          />
        </Link>
      </h3>
      <p className="text-sm ">{children}</p>
      <ul className="flex flex-row text-slate-300">
        {projects &&
          projects.map((project) => {
            return (
              <li
                key={project.name}
                className="mr-4 mt-3  whitespace-nowrap text-sm hover:text-blue-400"
              >
                <Link
                  href={project.url}
                  target="_blank"
                  className="inline-flex items-center font-medium"
                  aria-label={`${project.name} (opens in a new tab)`}
                >
                  <LinkIcon className="mr-1 h-3 w-3" aria-hidden="true" />
                  {project.name}
                </Link>
              </li>
            );
          })}
      </ul>
      <ul className="mt-3  ">
        {skills &&
          skills.map((skill) => (
            <li
              key={skill}
              className="mb-2 mr-2 inline-block rounded-lg bg-blue-700 bg-opacity-30 px-3 py-1 text-xs text-blue-400"
            >
              {skill}
            </li>
          ))}
      </ul>
    </li>
  );
}
