export default function Contact({ lang }: { lang: 'en' | 'es' }) {
  const t = {
    en: {
      title: "Get in touch",
      subtitle: "Let's build something secure and scalable together.",
      email: "Mail me!"
    },
    es: {
      title: "Contacto",
      subtitle: "Construyamos algo seguro y escalable juntos.",
      email: "¡Envíame un correo!"
    }
  };

  const current = t[lang];

  return (
    <section id="contact" className="py-20 px-4 bg-slate-950 border-t border-slate-800 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">{current.title}</h2>
        <p className="text-slate-400 mb-10 text-lg">{current.subtitle}</p>

        <div className="flex flex-wrap justify-center gap-4">
          {/* Email */}
          <a href="mailto:efcisterna@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            {current.email}
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com/in/emicisterna" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn
          </a>

          {/* GitHub */}
          <a href="https://github.com/ecisterna" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5.6 3.3 6.6 6.5 7a4.8 4.8 0 0 0-1 3.03V22"/><path d="M9 20c-5 1.5-5-2.5-7-3"/></svg>
            GitHub
          </a>
        </div>
        
        <p className="text-slate-500 text-sm mt-12">
          &copy; {new Date().getFullYear()} Emiliano Cisterna. All rights reserved.
        </p>
      </div>
    </section>
  );
}