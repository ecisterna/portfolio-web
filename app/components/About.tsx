export default function About({ lang }: { lang: 'en' | 'es' }) {
  const content = {
    en: {
      title: "About Me",
      text1: "Systems Engineer & Full-Stack Developer with proven experience building scalable, secure web applications and RESTful APIs using Python, Java, Node.js, TypeScript, and SQL.",
      text2: "Delivers production-ready solutions across the full software lifecycle, from database design and API development to automated testing, CI/CD, and monitoring.",
      text3: "Skilled at translating business requirements into maintainable, high-quality code that improves performance, reliability, and user experience.",
    },
    es: {
      title: "Sobre Mí",
      text1: "Ingeniero de Sistemas y Desarrollador Full-Stack con experiencia comprobada en la construcción de aplicaciones web escalables y seguras, y APIs RESTful utilizando Python, Java, Node.js, TypeScript y SQL.",
      text2: "Capaz de entregar soluciones listas para producción a lo largo de todo el ciclo de vida del software, desde el diseño de bases de datos y desarrollo de APIs hasta pruebas automatizadas y despliegue.",
      text3: "Habilidad para traducir requerimientos de negocio en código mantenible y de alta calidad que mejora el rendimiento, la fiabilidad y la experiencia del usuario.",
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