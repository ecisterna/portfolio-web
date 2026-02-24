export default function About({ lang }: { lang: 'en' | 'es' }) {
  const content = {
    en: {
      title: "About Me",
      text1: "Systems Engineer with strong fundamentals in Python, Java, and Full-Stack development." /* [cite: 100] */,
      text2: "Experienced in building scalable web applications and integrating security best practices (OWASP) into the software lifecycle." /* [cite: 101] */,
      text3: "Proven track record in vulnerability assessment and penetration testing, providing a unique perspective on building robust and secure code." /* [cite: 102] */,
      text4: "Seeking to leverage engineering and use my skills in a challenging environment." /* [cite: 103] */
    },
    es: {
      title: "Sobre Mí",
      text1: "Ingeniero de Sistemas con sólidos conocimientos de Python, Java y desarrollo full-stack." /* [cite: 65] */,
      text2: "Experiencia en la creación de aplicaciones web escalables e integración de las mejores prácticas de seguridad (OWASP) en el ciclo de vida del software," /* [cite: 66] */,
      text3: "lo que proporciona una perspectiva única para la creación de código robusto y seguro." /* [cite: 66] */,
      text4: "Busco aprovechar y aplicar mis habilidades en un entorno desafiante." /* [cite: 67] */
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
        <p>{t.text2} {t.text3}</p>
        <p className="font-semibold text-blue-400">{t.text4}</p>
      </div>
    </section>
  );
}