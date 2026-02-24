export default function Hero({ lang }: { lang: 'en' | 'es' }) {
  // Diccionario de textos
  const content = {
    en: {
      greeting: "Hi! I'm EMILIANO CISTERNA",
      role: "> Systems Engineer",
      resumeBtn: "Download Resume",
      resumeLink: "https://drive.google.com/file/d/19oCMTw8esD6RMzP2E414Vy7KrCEwFWYW/view?usp=sharing"
    },
    es: {
      greeting: "¡Hola! Soy EMILIANO CISTERNA",
      role: "> Ingeniero en Sistemas",
      resumeBtn: "Descargar CV",
      resumeLink: "https://drive.google.com/file/d/1hmbG15qi31UFT3ukxk42U3xOUVEGDFee/view?usp=sharing"
    }
  };

  const t = content[lang];

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 relative">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
        {t.greeting}
      </h1>
      <p className="text-xl md:text-2xl text-blue-400 font-mono mb-8">
        {t.role}
      </p>
      
      <div className="flex gap-4">
        <a 
          href="https://github.com/ecisterna" 
          target="_blank" 
          className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-600"
        >
          GitHub
        </a>
        <a 
          href={t.resumeLink} 
          target="_blank" 
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors font-semibold shadow-lg shadow-blue-500/30"
        >
          {t.resumeBtn}
        </a>
      </div>
    </section>
  );
}