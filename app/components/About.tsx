export default function About({ lang }: { lang: 'en' | 'es' }) {
  const content = {
    en: {
      title: "About Me",
      text1: "Systems Engineer specializing in Full-Stack development of scalable and efficient web applications.",
      text2: "Proven experience building end-to-end solutions: from relational database architecture (SQL) and robust backend APIs (Python, Java, Node.js) to dynamic frontend interfaces (React, Angular, TypeScript).",
      text3: "Passionate about translating complex business requirements into clean, high-performance code, ensuring quality and security throughout the Software Development Life Cycle (SDLC).",
    },
    es: {
      title: "Sobre Mí",
      text1: "Ingeniero en Sistemas especializado en el desarrollo Full-Stack de aplicaciones web escalables y eficientes.",
      text2: "Experiencia comprobada en la construcción de soluciones completas: desde la arquitectura de bases de datos relacionales (SQL) y el desarrollo de APIs robustas en el backend (Python, Java, Node.js), hasta la creación de interfaces dinámicas en el frontend (React, Angular, TypeScript).",
      text3: "Apasionado por traducir requerimientos de negocio complejos en código limpio y de alto rendimiento, asegurando la calidad y seguridad en todo el ciclo de vida del software (SDLC).",
    }
  };

  const t = content[lang];

  return (
    <section id="about" className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
        {t.title}
      </h2>
      <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 shadow-lg text-slate-300 text-lg leading-relaxed space-y-4">
        <p>{t.text1}</p>
        <p>{t.text2}</p>
        <p>{t.text3}</p>
      </div>
    </section>
  );
}