interface SkillProps {
  skill: string;
}

export default function Skill({ skill }: SkillProps) {
  return (
    <li
      key={skill}
      className="relative mb-2 mr-2 inline-block px-3 py-2 text-xs font-bold text-blue-300"
    >
      <div className="absolute -ml-3 -mt-2 h-full w-full rounded-lg bg-blue-700 bg-opacity-30 transition-all hover:scale-110 hover:bg-opacity-50"></div>
      {skill}
    </li>
  );
}
