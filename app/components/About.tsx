export default function About({ lang }: { lang: 'en' | 'es' }) {
  const content = {
    en: {
      title: "About Me",
      text1: "Systems Engineer with a focus on the financial and banking sector.",
      text2: "I develop services for the Bantotal core banking system (using GeneXus and SQL Server), integrate them with digital channels via Python-based APIs, and work on deployment infrastructure using Kubernetes.",
      text3: "I also have prior experience as a full-stack developer (Angular, Node.js, React) and in web application security (OWASP).",
    },
    es: {
      title: "Sobre Mí",
      text1: "Ingeniero en Sistemas orientado al sector financiero y bancario.",
      text2: "Desarrollo servicios sobre el core bancario Bantotal (GeneXus, SQL Server), los integro con canales digitales mediante APIs en Python y trabajo en la infraestructura de despliegue sobre Kubernetes.",
      text3: "Tengo experiencia previa como desarrollador full-stack (Angular, Node.js, React) y en seguridad de aplicaciones web (OWASP).",
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