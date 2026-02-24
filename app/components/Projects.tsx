export default function Projects({ lang }: { lang: "en" | "es" }) {
  const content = {
    en: {
      title: "Featured Projects",
      bairesTitle: "BairesProp | Analytics Platform",
      bairesDesc:
        "Deployed a live interactive dashboard using Streamlit to visualize real-time market trends, allowing users to filter properties by ROI and location. Engineered an automated data pipeline using Python and Pandas to scrape and clean complex datasets." /* */,
      chatTitle: "Real-Time Chat System",
      chatDesc:
        "Engineered a low-latency messaging architecture using Flask and Socket.IO, enabling instant bi-directional communication between concurrent users. Designed a persistent SQL storage layer to ensure data integrity across sessions." /* */,
      liveBtn: "Live Demo",
      codeBtn: "GitHub",
    },
    es: {
      title: "Proyectos Destacados",
      bairesTitle: "BairesProp | Analítica Inmobiliaria",
      bairesDesc:
        "Implementé un panel interactivo en vivo usando Streamlit para visualizar tendencias del mercado en tiempo real, permitiendo a los usuarios filtrar propiedades por ROI y ubicación. Diseñé un pipeline de datos automatizado con Python y Pandas." /* */,
      chatTitle: "Sistema de Chat en Tiempo Real",
      chatDesc:
        "Diseñé una arquitectura de mensajería de baja latencia usando Flask y Socket.IO, habilitando comunicación bidireccional instantánea entre usuarios concurrentes. Diseñé una capa de almacenamiento SQL persistente para la integridad de datos." /* */,
      liveBtn: "Demo en Vivo",
      codeBtn: "GitHub",
    },
  };

  const t = content[lang];

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        {t.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project 1: BairesProp */}
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-3">
            {t.bairesTitle}
          </h3>
          <p className="text-slate-300 mb-4 h-32 overflow-y-auto">
            {t.bairesDesc}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-slate-900 text-blue-400 rounded-full text-sm font-mono border border-slate-700">
              Python
            </span>
            <span className="px-3 py-1 bg-slate-900 text-blue-400 rounded-full text-sm font-mono border border-slate-700">
              Streamlit
            </span>
            <span className="px-3 py-1 bg-slate-900 text-blue-400 rounded-full text-sm font-mono border border-slate-700">
              Pandas
            </span>
          </div>

          <div className="flex gap-4">
            <a
              href="https://bairesprop.streamlit.app/"
              target="_blank"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors font-semibold shadow-md shadow-blue-500/20"
            >
              {t.liveBtn}
            </a>
          </div>
        </div>

        {/* Project 2: Online Chat App */}
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-3">{t.chatTitle}</h3>
          <p className="text-slate-300 mb-4 h-32 overflow-y-auto">
            {t.chatDesc}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-slate-900 text-blue-400 rounded-full text-sm font-mono border border-slate-700">
              Flask
            </span>
            <span className="px-3 py-1 bg-slate-900 text-blue-400 rounded-full text-sm font-mono border border-slate-700">
              Socket.IO
            </span>
            <span className="px-3 py-1 bg-slate-900 text-blue-400 rounded-full text-sm font-mono border border-slate-700">
              SQL
            </span>
          </div>

          <div className="flex gap-4">
            <a
              href="https://online-chat-app-ho5z.onrender.com"
              target="_blank"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors font-semibold shadow-md shadow-blue-500/20"
            >
              {t.liveBtn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
