export default function Projects({ lang }: { lang: "en" | "es" }) {
  const content = {
    en: {
      title: "Featured Projects",
      bairesTitle: "BairesProp | Analytics Platform",
      bairesDesc:
        "Deployed a live interactive dashboard using Streamlit to visualize real-time market trends, allowing users to filter properties by ROI and location. Engineered an automated data pipeline using Python and Pandas to scrape, clean, and render complex real estate datasets." /* */,
      chatTitle: "Real-Time Chat System",
      chatDesc:
        "Architected a low-latency messaging system using Flask and Socket.IO, enabling instant bi-directional communication between concurrent users. Designed a persistent SQL storage layer to ensure data integrity and chat history retention across sessions." /* */,
      flightTitle: "Flight Tracker | Live Telemetry App",
      flightDesc:
        "Developed an event-driven Full-Stack application to track South American airspace in real-time. Built a background worker to process external JSON streams and orchestrated asynchronous frontend communication via SignalR to render air traffic on interactive maps.",
      liveBtn: "Live Demo",
      codeBtn: "GitHub",
    },
    es: {
      title: "Proyectos Destacados",
      bairesTitle: "BairesProp | Análisis Inmobiliario",
      bairesDesc:
        "Implementé un panel interactivo para visualizar tendencias del mercado en tiempo real, permitiendo filtrar propiedades por ROI y ubicación. Diseñé un pipeline de datos automatizado para extraer, limpiar y renderizar conjuntos de datos complejos." /* */,
      chatTitle: "Sistema de Chat en Tiempo Real",
      chatDesc:
        "Implementé una arquitectura de mensajería de baja latencia habilitando comunicación bidireccional instantánea entre usuarios concurrentes. Diseñé una capa de almacenamiento SQL persistente para asegurar la integridad de los datos y el historial de chat." /* */,
      flightTitle: "Flight Tracker | App de Telemetría en Vivo",
      flightDesc:
        "Desarrollé una aplicación Full-Stack orientada a eventos para rastrear el espacio aéreo sudamericano. Construí un servicio en segundo plano que procesa flujos de datos JSON y orquesté la comunicación asíncrona mediante SignalR para visualizar tráfico aéreo en mapas interactivos.",
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
              Data Analysis
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
              Python
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

        {/* Project 3: Flight Tracker */}
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors shadow-lg md:col-span-2 md:max-w-xl md:mx-auto">
          <h3 className="text-2xl font-bold text-white mb-3">
            {t.flightTitle}
          </h3>
          <p className="text-slate-300 mb-4 h-32 overflow-y-auto">
            {t.flightDesc}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-slate-900 text-blue-400 rounded-full text-sm font-mono border border-slate-700">
              C#
            </span>
            <span className="px-3 py-1 bg-slate-900 text-blue-400 rounded-full text-sm font-mono border border-slate-700">
              .NET
            </span>
            <span className="px-3 py-1 bg-slate-900 text-blue-400 rounded-full text-sm font-mono border border-slate-700">
              SignalR
            </span>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/ecisterna/flight-tracker-app"
              target="_blank"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors font-semibold shadow-md shadow-blue-500/20"
            >
              {t.codeBtn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
