import Image from "next/image";

export default function TechStack({ lang }: { lang: "en" | "es" }) {
  const t = {
    en: "Languages & Technologies",
    es: "Lenguajes y Tecnologías",
  };

  const techs = [
    // Backend & Languages
    { name: "Python", icon: "python/python-original.svg" },
    { name: "Java", icon: "java/java-original.svg" },
    { name: "TypeScript", icon: "typescript/typescript-original.svg" },
    { name: "SQL", icon: "azuresqldatabase/azuresqldatabase-original.svg" },
    // Frameworks
    { name: "Spring", icon: "spring/spring-original.svg" },
    { name: "Django", icon: "django/django-plain.svg" },
    { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
    { name: "React", icon: "react/react-original.svg" },
    { name: "Angular", icon: "angularjs/angularjs-original.svg" },
    // Infra & Tools
    { name: "Docker", icon: "docker/docker-original.svg" },
    { name: "Git", icon: "git/git-original.svg" },
    { name: "Linux", icon: "linux/linux-original.svg" },
  ];

  return (
    <section
      id="tech-stack"
      className="py-20 px-4 max-w-4xl mx-auto text-center border-t border-slate-800"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
        {t[lang]}
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center bg-slate-800/50 p-4 rounded-xl border border-slate-700 w-28 h-28 hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 shadow-md"
          >
            <Image
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}`}
              alt={tech.name}
              width={48}
              height={48}
              className="mb-3 drop-shadow-lg"
            />
            <span className="text-sm font-mono text-slate-300">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
