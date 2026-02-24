"use client";
import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  // Estado inicial en inglés ('en') porque es tu prioridad número 1
  const [lang, setLang] = useState<'en' | 'es'>('en');

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'es' : 'en');
  };

  return (
    <main className="min-h-screen bg-slate-900 text-slate-50 font-sans relative">
      
      {/* Botón Flotante de Cambio de Idioma */}
      <button
        onClick={toggleLang}
        className="fixed top-6 right-6 z-50 px-4 py-2 bg-slate-800 border border-slate-600 rounded-full hover:bg-slate-700 transition-colors font-mono shadow-lg flex items-center gap-2"
      >
        {lang === 'en' ? '🇪🇸 ES' : '🇺🇸 EN'}
      </button>

      {/* Le pasamos el idioma actual a cada componente */}
      <Hero lang={lang} />
      <About lang={lang} />
      <TechStack lang={lang} />
      <Projects lang={lang} />
      <Contact lang={lang} />
    </main>
  );
}