import Link from 'next/link';
import Image from 'next/image';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

interface ProjectProps {
  name: string;
  projectHref: string;
  src: string;
  skills?: string[];
  children: React.ReactNode;
}

export default function Project({
  name,
  projectHref,
  src,
  skills,
  children,
}: ProjectProps) {
  return (
    <li className="mb-16">
      <div className="relative grid gap-4 sm:grid-cols-8 sm:gap-8">
        <div className="sm:order-2 sm:col-span-6">
          <h3 className="font-medium leading-tight text-slate-100 hover:text-blue-400">
            <Link
              href={projectHref}
              target="_blank"
              className="inline-flex"
              aria-label={`${name} (opens in a new tab)`}
            >
              {name}
              <ArrowTopRightOnSquareIcon
                className="ml-1 h-4 w-4"
                aria-hidden="true"
              />
            </Link>
          </h3>
          <p className="mt-2 text-sm">{children}</p>
          <ul className="mt-3">
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
        </div>
        <Image
          src={src}
          width={240}
          height={156}
          className="rounded border-2 border-blue-200/20 sm:order-1 sm:col-span-2 sm:translate-y-1"
          alt="Screenshots of the dashboard project showing desktop version"
        />
      </div>
    </li>
  );
}
