import meImage from "../assets/images/me-roblox.png";
import client1 from "../assets/images/clients/pia-project.jpeg";
import brukyon from "../assets/images/clients/brukyon.webp";
import arduinoIcon from "../assets/images/icons/arduino.svg";
import beautifulSoupIcon from "../assets/images/icons/beautiful-soup.svg";
import bootstrapIcon from "../assets/images/icons/bootstrap.svg";
import cssIcon from "../assets/images/icons/css3.svg";
import electronIcon from "../assets/images/icons/electron.svg";
import esp32Icon from "../assets/images/icons/esp32.svg";
import firebaseIcon from "../assets/images/icons/firebase.svg";
import flaskIcon from "../assets/images/icons/flask.svg";
import flutterIcon from "../assets/images/icons/flutter.svg";
import godotIcon from "../assets/images/icons/godot.svg";
import htmlIcon from "../assets/images/icons/html5.svg";
import javaIcon from "../assets/images/icons/java.svg";
import jetpackIcon from "../assets/images/icons/jetpack-compose.svg";
import jqueryIcon from "../assets/images/icons/jquery.svg";
import jsIcon from "../assets/images/icons/javascript.svg";
import kotlinIcon from "../assets/images/icons/kotlin.svg";
import mongodbIcon from "../assets/images/icons/mongodb.svg";
import mysqlIcon from "../assets/images/icons/mysql.svg";
import nextjsIcon from "../assets/images/icons/nextjs.svg";
import nodeIcon from "../assets/images/icons/nodejs.svg";
import numpyIcon from "../assets/images/icons/numpy.svg";
import plcIcon from "../assets/images/icons/plc.svg";
import pythonIcon from "../assets/images/icons/python.svg";
import reactIcon from "../assets/images/icons/react.svg";
import robloxStudioIcon from "../assets/images/icons/roblox-studio.svg";
import tailwindIcon from "../assets/images/icons/tailwind-css.svg";
import tsIcon from "../assets/images/icons/typescript.svg";
import unityIcon from "../assets/images/icons/unity.svg";
import localImg from "../assets/images/shapes/local-place.svg";
import mexicoImg from "../assets/images/shapes/mexico.svg";
import worldImg from "../assets/images/shapes/world.svg";

import seasonServicePreview from "../assets/images/previews/SeasonService.png";
import movikooxPreview from "../assets/images/previews/Movikoox.png";
import miniDBeaverPreview from "../assets/images/previews/MiniDBeaver.png";
import spaceVisionPreview from "../assets/images/previews/SpaceVision.png";
import mortalRunPreview from "../assets/images/previews/MortalRun.png";
import imKingPreview from "../assets/images/previews/ImKing.png";
import electrorbitPreview from "../assets/images/previews/Electrorbit.png"
import saludPlusPreview from "../assets/images/previews/SaludPlus.png"
import beesMathPreview from "../assets/images/previews/BeesMath.png"
import eduCampPreview from "../assets/images/previews/EduCamp.png"
import quickCoinsPreview from "../assets/images/previews/QuickCoins.png";
import canutoPreview from "../assets/images/previews/Canuto.png";
import airBreyPreview from "../assets/images/previews/AirBrey.png";
import geriCAMPreview from "../assets/images/previews/GeriCAM.png";
import smileyVisionPreview from "../assets/images/previews/SmileyVision.png";
import oncolabPreview from "../assets/images/previews/Oncolab.png";

export const heroContent = {
  role: "Soy desarrollador de software",
  name: ["José Manuel", "Castillo Queh"],
  image: meImage,
};

export const aboutContent =
  "Soy José Manuel Castillo Queh, un desarrollador de software apasionado por la innovación y la resolución de problemas sociales. Desde mis primeras líneas de código en 2018 hasta los proyectos actuales, he participado en hackathones nacionales e internacionales y he creado herramientas que facilitan la vida de los usuarios. Mi especialización incluye Java, Python y tecnologías web como React, NextJS, Tailwind CSS y JavaScript, así como desarrollo de juegos en Roblox (LuaU). Mi enfoque combina creatividad, investigación y compromiso social.";

export const achievements = [
  {
    image: worldImg,
    year: "2021",
    description: "Roblox Gamejam DevRel",
    place: 1,
  },
  {
    image: mexicoImg,
    year: "2022",
    description: "Hackathon TCS Empowers",
    place: 1,
  },
  {
    image: mexicoImg,
    year: "2023",
    description: "Hackathon TCS Empowers",
    place: 4,
  },
  {
    image: localImg,
    year: "2023",
    description: "Creatividad e innovación tecnológica CECYTE's",
    place: 1,
  },
  {
    image: mexicoImg,
    year: "2024",
    description: "Hackathon Talent Land",
  },
  {
    image: localImg,
    year: "2025",
    description: "NASA Space Apps Challenge",
    place: 4,
  },
];

export const services = [
  {
    title: "Desarrollo Full-stack",
    description:
      "Construcción de aplicaciones web completas y escalables desde el frontend hasta el backend, garantizando alto rendimiento, arquitectura limpia y experiencias de usuario fluidas.",
    icons: [
      icon(htmlIcon, "HTML5"),
      icon(cssIcon, "CSS3"),
      icon(jsIcon, "JavaScript"),
      icon(tsIcon, "TypeScript"),
      icon(pythonIcon, "Python"),
      icon(jqueryIcon, "jQuery"),
      icon(bootstrapIcon, "Bootstrap"),
      icon(tailwindIcon, "Tailwind CSS"),
      icon(reactIcon, "React"),
      icon(nodeIcon, "Node.js"),
      icon(nextjsIcon, "Next.js"),
      icon(flaskIcon, "Flask"),
    ],
  },
  {
    title: "Desarrollo de Aplicaciones",
    description:
      "Diseño y desarrollo de aplicaciones móviles y web intuitivas adaptadas a tus necesidades, centradas en la usabilidad, el rendimiento y el mantenimiento a largo plazo.",
    icons: [
      icon(javaIcon, "Java"),
      icon(kotlinIcon, "Kotlin"),
      icon(jetpackIcon, "Jetpack Compose"),
    ],
  },
  {
    title: "Videojuegos",
    description:
      "Creación de experiencias de juego divertidas, interactivas y optimizadas, incluyendo desarrollo en Roblox con LuaU, mecánicas personalizadas, sistemas de juego y diseño de gameplay centrado en el usuario.",
    icons: [
      icon(robloxStudioIcon, "Roblox Studio"),
      icon(godotIcon, "Godot"),
      icon(unityIcon, "Unity"),
    ],
  },
  {
    title: "Desarrollo de Aplicaciones de Escritorio",
    description:
      "Desarrollo de aplicaciones de escritorio multiplataforma usando Flutter y Electron, entregando software rápido, responsive y moderno para Windows, Linux y macOS.",
    icons: [
      icon(javaIcon, "Java"),
      icon(pythonIcon, "Python"),
      icon(electronIcon, "Electron"),
      icon(flutterIcon, "Flutter"),
      icon(jsIcon, "JavaScript"),
    ],
  },
  {
    title: "Sistemas Embebidos",
    description:
      "Construcción de soluciones embebidas con sistemas ESP32, Arduino y PLC, integrando hardware y software para automatizar, controlar y conectar dispositivos del mundo real.",
    icons: [
      icon(esp32Icon, "ESP32"),
      icon(arduinoIcon, "Arduino"),
      icon(plcIcon, "PLC"),
    ],
  },
  {
    title: "Ciencia de Datos",
    description:
      "Extracción de insights de datos usando Python y SQL con NumPy y herramientas de visualización, además de diseñar bases de datos eficientes para decisiones confiables basadas en datos.",
    icons: [
      icon(pythonIcon, "Python"),
      icon(numpyIcon, "NumPy"),
      icon(mysqlIcon, "MySQL"),
      icon(firebaseIcon, "Firebase"),
      icon(mongodbIcon, "MongoDB"),
    ],
  },
  {
    title: "Scripting y Automatización",
    description:
      "Automatización de tareas repetitivas y recolección de datos estructurados de la web mediante scripts personalizados, mejorando la eficiencia y desbloqueando información valiosa para tus proyectos.",
    icons: [
      icon(pythonIcon, "Python"),
      icon(beautifulSoupIcon, "Beautiful Soup"),
      icon(jsIcon, "JavaScript"),
    ],
  },
];

export const projectRecruiterBriefs = {
  "desayunos-canuto": brief(
    "Landing page comercial para un negocio local de desayunos. La pieza ordena oferta, confianza y contacto en una experiencia clara para convertir curiosidad en visita o pedido. Logré llevar el negocio a una ",
    emphasis("URL pública 24/7"),
    ", con la información crítica del servicio en una sola ruta y lista para compartirse en redes, WhatsApp y buscadores. Entregué una solución enfocada en ",
    emphasis("lanzamiento, claridad comercial y reducción de fricción"),
    " para un cliente no técnico."
  ),
  "air-brey-services": brief(
    "Sitio web para servicios HVAC en Broward County, construido para explicar servicios, generar confianza y abrir contacto comercial sin pasos innecesarios. Logré construir ",
    emphasis("presencia digital 0 a 1"),
    ", contacto visible en el primer recorrido y estructura pensada para convertir búsquedas locales en solicitudes de estimación. Entendí el ",
    emphasis("negocio, mercado local y conversión"),
    ", no solo implementación visual."
  ),
  "smiley-vision": brief(
    "Sitio web en desarrollo para Smiley Vision, distribuidora de ópticas con operación en Campeche, Ciudad de México y Mérida. El proyecto busca construir ",
    emphasis("presencia digital especializada"),
    " y abrir un canal comercial para aumentar ventas dentro de un nicho óptico específico. La solución prioriza ",
    emphasis("confianza, posicionamiento regional y conversión"),
    " mientras prepara el lanzamiento público de la marca."
  ),
  oncolab: brief(
    "Simulador didáctico e investigativo sobre cáncer, creado para apoyar el aprendizaje de estudiantes de medicina, oncólogos y doctores mediante una experiencia clara y usable. El prototipo modela escenarios de ",
    emphasis("cáncer de pulmón con >= 70% en hasta 7 días"),
    " y ",
    emphasis("cáncer de mama con 80% de precisión en máximo 12 días"),
    " como referencia formativa, no diagnóstica. Lidero la creación y el desarrollo técnico del proyecto, con apoyo actual del ",
    emphasis("Oncológico de Campeche, ECOSUR y CIMAP"),
    "."
  ),
  "quick-coins": brief(
    "Juego competitivo en Roblox con minijuegos, recompensas, tienda y economía interna. Convierte partidas cortas en un ciclo de riesgo, habilidad y premio. Integré varios modos bajo una ",
    emphasis("misma economía jugable"),
    ", habilitando monetización por recompensas y más puntos de retención con retos, tienda y progresión. Combiné ",
    emphasis("gameplay, sistemas económicos y experiencia de usuario"),
    " dentro de una plataforma con restricciones reales."
  ),
  "season-service": brief(
    "Módulo open source para Roblox que organiza temporadas, progreso y eventos con una API reutilizable para otros desarrolladores. Convertí una lógica común de juegos en un módulo ",
    emphasis("documentado, integrable y mantenible"),
    ", reduciendo trabajo repetitivo para la comunidad. Pensé en ",
    emphasis("APIs, documentación y adopción por terceros"),
    ", no solo en resolver mi propio caso."
  ),
  movikoox: brief(
    "Plataforma ciudadana para consultar transporte público en Campeche con enfoque gratuito, local y pensado para resolver una necesidad diaria. Centralicé rutas, paradas y consulta en productos web separados, transformando ",
    emphasis("información dispersa"),
    " en un servicio consumible por usuarios y aplicaciones. Detecté una necesidad pública, separé ",
    emphasis("frontend/API"),
    " y construí una base escalable para ciudad."
  ),
  minidbeaver: brief(
    "Herramienta de escritorio experimental para explorar bases de datos y consultas SQL con una experiencia más ligera que clientes tradicionales. Acorté el flujo de validación al enfocarme en ",
    emphasis("conexiones, estructura y consultas rápidas"),
    " dentro de una interfaz directa. Aplique criterio de producto a ",
    emphasis("herramientas internas y productividad técnica"),
    "."
  ),
  "space-vision": brief(
    "Plataforma educativa interactiva creada para NASA Space Apps Challenge, orientada a convertir datos científicos en una experiencia STEM visual. Alcancé ",
    emphasis("Top 4 en NASA Space Apps"),
    ", validando ejecución técnica, narrativa científica y capacidad de entrega en hackathon. Traduje información compleja en un producto comprensible para ",
    emphasis("aprendizaje y divulgación"),
    "."
  ),
  "mortal-run": brief(
    "Juego de obstáculos y plataformas con movimiento 2D/3D, habilidades y mapas que premian dominio, rutas y reflejos. Aterricé ",
    emphasis("diseño de niveles, control de personaje, feedback visual y loops competitivos"),
    " dentro de una experiencia jugable. Conecté mecánicas, sensación de juego y progresión en un producto con identidad propia."
  ),
  "im-king": brief(
    "Juego de arena competitivo donde el objetivo es coronarse o quitar el trono a otro jugador mediante ataque, defensa y posicionamiento. El proyecto fue ",
    emphasis("campeón internacional en Roblox Gamejam DevRel 2021"),
    ", destacando por un loop simple, competitivo y memorable. Demostré creatividad bajo presión, ",
    emphasis("criterio de gameplay"),
    " y capacidad de destacar entre equipos."
  ),
  electrorbit: brief(
    "Herramienta visual de química para consultar elementos y configuración electrónica con una navegación simple y accesible. Convertí una consulta académica abstracta en una ",
    emphasis("experiencia visual inmediata"),
    " para estudiantes y curiosos. Transformé contenido técnico en interfaces educativas fáciles de explorar."
  ),
  "salud-plus": brief(
    "API médica de hackathon para convertir archivos DICOM en imágenes y GIFs accesibles desde dispositivos comunes. Reduje barreras de visualización clínica al evitar infraestructura pesada para revisar estudios en ",
    emphasis("formatos más simples"),
    ". Identifiqué cuellos de botella de interoperabilidad y los convertí en servicios consumibles."
  ),
  beesmath: brief(
    "Experiencia web educativa para niños de 3 a 6 años enfocada en conteo, interacción amable y recursos visuales/sonoros. Adapté contenido temprano a una interfaz lúdica, con ",
    emphasis("feedback pensado para sostener atención"),
    " y aprendizaje inicial. Diseñé para un usuario real con necesidades cognitivas concretas, no para una demo genérica."
  ),
  gericam: brief(
    "App de asistencia para adultos mayores creada en Hackathon TCS Empowers 2023. La solución permite marcar alertas para pedir ayuda médica o apoyo de personal de gericultura de CEYCTEC cuando una persona mayor está en riesgo, tiene una emergencia o necesita acompañamiento inmediato. Alcanzamos ",
    emphasis("Top 4 nacional"),
    ", colaboración con ",
    emphasis("INAPAM"),
    " para enfocar correctamente el problema y obtuvimos el reconocimiento por la gobernadora del estado de Campeche 2023. El proyecto demuestra capacidad para convertir una necesidad sensible en un producto de ",
    emphasis("impacto social, validación institucional y respuesta crítica"),
    "."
  ),
  educamp: brief(
    "App educativa de hackathon para lectura, comprensión y aritmética básica con rutas, videos, actividades y minijuegos. Gané ",
    emphasis("Top #1 en Hackathon TCS Empowers"),
    " y conseguí respaldo institucional para atacar rezago educativo. Uní producto, ",
    emphasis("impacto social, validación externa y ejecución rápida"),
    "."
  ),
};

export const featuredProjects = [
  {
    id: "smiley-vision",
    sortDate: "2026-06-21",
    createdAt: "?",
    title: "Smiley Vision",
    category: "Sitio web para distribuidora de ópticas",
    status: "En desarrollo",
    statusType: "prototype",
    accent: "cyan",
    previewAccent: "#22d3ee",
    previewAccentAlt: "#facc15",
    previewImage: smileyVisionPreview,
    previewSurface:
      "radial-gradient(circle at 18% 18%, rgba(34,211,238,0.28), transparent 24%), radial-gradient(circle at 78% 20%, rgba(250,204,21,0.18), transparent 22%), linear-gradient(135deg, rgba(8,30,38,0.96), rgba(15,57,68,0.9) 52%, rgba(7,12,18,0.98))",
    previewLabel: "Smiley Vision",
    previewNote:
      "Banner del sitio web en desarrollo para la distribuidora de ópticas Smiley Vision.",
    summary:
      "Smiley Vision es un sitio web en desarrollo para una distribuidora de ópticas que opera en Campeche, Ciudad de México y Mérida. La plataforma está pensada para crear presencia digital, comunicar la oferta de la marca y aumentar ventas dentro de un nicho especializado, con una experiencia enfocada en confianza, claridad comercial y crecimiento regional.",
    stack: ["React", "Vite", "Sitio web", "Ópticas"],
    repositories: [],
    previews: [
      projectLink("Próximamente", null, "coming-soon"),
    ],
  },
  {
    id: "oncolab",
    sortDate: "2026-06-22",
    createdAt: "?",
    title: "Oncolab",
    category: "Simulador didáctico de investigación oncológica",
    status: "En desarrollo",
    statusType: "prototype",
    accent: "violet",
    previewAccent: "#38bdf8",
    previewAccentAlt: "#f472b6",
    previewImage: oncolabPreview,
    previewSurface:
      "radial-gradient(circle at 18% 18%, rgba(56,189,248,0.28), transparent 24%), radial-gradient(circle at 78% 20%, rgba(244,114,182,0.2), transparent 22%), linear-gradient(135deg, rgba(10,23,38,0.96), rgba(40,24,56,0.9) 52%, rgba(7,10,18,0.98))",
    previewLabel: "Oncolab",
    previewNote:
      "Banner del prototipo de simulación didáctica para investigación y formación en oncología.",
    summary:
      "Oncolab es un simulador didáctico para el cáncer en etapa de prototipo, orientado a investigación científica y formación médica. Actualmente simula cáncer de pulmón con >= 70% en hasta 7 días y cáncer de mama con 80% de precisión en máximo 12 días, como referencias formativas dentro de una herramienta no diagnóstica. El producto busca ofrecer una UI/UX clara, accesible y eficiente para estudiantes de medicina, oncólogos y doctores, facilitando el desempeño académico y profesional en escenarios de aprendizaje. El proyecto cuenta con apoyo del Oncológico de Campeche, ECOSUR y CIMAP; soy el creador y líder de desarrollo técnico.",
    stack: [
      "Investigación científica",
      "Simulador didáctico",
      "Oncología",
      "UI/UX médico",
    ],
    repositories: [],
    previews: [
      projectLink("Próximamente", null, "coming-soon"),
    ],
  },
  {
    id: "desayunos-canuto",
    sortDate: "2026-05-24",
    createdAt: "24 de mayo de 2026",
    title: "El mañanero con Canuto",
    category: "Landing page para negocio local",
    status: "Desplegado oficialmente",
    statusType: "live",
    accent: "amber",
    previewAccent: "#f59e0b",
    previewAccentAlt: "#ef4444",
    previewImage: canutoPreview,
    previewSurface:
      "radial-gradient(circle at 16% 18%, rgba(245,158,11,0.28), transparent 24%), radial-gradient(circle at 82% 22%, rgba(239,68,68,0.18), transparent 22%), linear-gradient(135deg, rgba(43,24,10,0.96), rgba(73,37,18,0.88) 52%, rgba(16,10,8,0.98))",
    previewLabel: "Vista previa de El mañanero con Canuto",
    previewNote:
      "Captura del sitio lanzado oficialmente para presentar la oferta y facilitar el contacto del negocio.",
    summary:
      "El mañanero con Canuto es una landing page publicada oficialmente para presentar la oferta de desayunos, reforzar la identidad visual del negocio y facilitar que nuevos clientes encuentren información clara sobre el servicio. El proyecto está pensado como una experiencia directa, visual y optimizada para conversión.",
    stack: ["React", "Vite", "Landing page", "Negocio local"],
    repositories: [],
    previews: [
      projectLink("Sitio en vivo", "https://desayunoscanuto.vercel.app/"),
    ],
  },
  {
    id: "air-brey-services",
    sortDate: "2026-05-23",
    createdAt: "23 de mayo de 2026",
    title: "Air Brey Services",
    category: "Landing page para servicios HVAC",
    status: "Desplegado",
    statusType: "live",
    accent: "cyan",
    previewAccent: "#63dbe8",
    previewAccentAlt: "#2f46ff",
    previewImage: airBreyPreview,
    previewSurface:
      "radial-gradient(circle at 18% 18%, rgba(99,219,232,0.3), transparent 24%), radial-gradient(circle at 80% 20%, rgba(47,70,255,0.22), transparent 24%), linear-gradient(135deg, rgba(6,20,34,0.96), rgba(8,18,56,0.9) 54%, rgba(5,8,18,0.98))",
    previewLabel: "Vista previa de Air Brey Services",
    previewNote:
      "Captura del hero principal con la propuesta de servicios HVAC y llamada a solicitar cotización.",
    summary:
      "Air Brey Services es una landing page para una empresa de aire acondicionado y servicios HVAC en Broward County. La experiencia prioriza confianza, claridad comercial y una llamada a la acción visible para solicitar estimaciones, con una dirección visual técnica y profesional alineada al sector.",
    stack: ["HTML", "CSS", "JavaScript", "Landing page"],
    repositories: [],
    previews: [
      projectLink("Sitio en vivo", "https://airbreyservices.com/"),
    ],
  },
  {
    id: "quick-coins",
    sortDate: "2026-03-27",
    createdAt: "27 de marzo de 2026",
    title: "Quick Coins",
    category: "Videojuego competitivo en Roblox",
    status: "Desplegado",
    accent: "amber",
    previewAccent: "#f59e0b",
    previewAccentAlt: "#fcd34d",
    previewImage: quickCoinsPreview,
    previewSurface:
      "radial-gradient(circle at 16% 18%, rgba(245,158,11,0.32), transparent 24%), radial-gradient(circle at 82% 20%, rgba(250,204,21,0.22), transparent 24%), linear-gradient(135deg, rgba(45,25,10,0.96), rgba(72,43,12,0.9) 50%, rgba(12,10,8,0.98))",
    previewLabel: "Espacio para vista previa de Quick Coins",
    previewNote:
      "Este espacio queda listo para colocar una portada del juego, capturas de minijuegos o escenas del sistema de recompensas.",
    summary:
      "Quick Coins es un juego competitivo donde varios jugadores se enfrentan en minijuegos como TicTacToe, disparos estilo Rivals, parkour y búsqueda del tesoro para ganar recompensas mientras se divierten. Cada ronda tiene un costo de entrada, pero quien domina el reto se queda con el premio, creando una experiencia intensa que mezcla habilidad, riesgo y emoción. El proyecto también integra tienda, desafíos constantes y un sistema competitivo pensado para mantener el progreso activo y reforzar la propuesta de valor para la comunidad.",
    stack: ["Roblox", "Minijuegos", "Sistema competitivo", "Economía ingame"],
    repositories: [],
    previews: [
      projectLink("Jugar ahora", "https://www.roblox.com/es/games/89338459348708/Quick-Coins")
    ],
  },
  {
    id: "season-service",
    sortDate: "2025-02-18",
    createdAt: "18 de febrero de 2025",
    title: "Season Service",
    category: "Módulo Open Source para Roblox",
    status: "Open Source",
    accent: "cyan",
    previewAccent: "#67e8f9",
    previewSurface:
      "radial-gradient(circle at 14% 18%, rgba(103,232,249,0.34), transparent 26%), radial-gradient(circle at 82% 22%, rgba(59,130,246,0.28), transparent 24%), linear-gradient(135deg, rgba(8,24,40,0.96), rgba(10,18,36,0.9) 50%, rgba(5,8,18,0.98))",
    previewLabel: "Espacio para screenshot del módulo",
    previewNote:
      "Aquí podrás colocar una captura de la documentación, del API o del flujo de recompensas.",
    previewImage: seasonServicePreview,
    summary:
      "Season Service es un módulo open source que busca darle a la comunidad de Roblox una base limpia para manejar temporadas, progreso y eventos con una API clara. Su enfoque está en reutilización, orden y documentación para que otros desarrolladores puedan integrarlo rápido en sus juegos.",
    stack: ["LuaU", "Roblox", "Open Source", "Docs"],
    repositories: [],
    previews: [
      projectLink("Documentación", "https://mratomdev.vercel.app/docs/season-service"),
    ],
  },
  {
    id: "movikoox",
    sortDate: "2025-12-14",
    createdAt: "14 de diciembre de 2025",
    title: "Movikoox",
    category: "Ecosistema de movilidad urbana",
    status: "Desplegado",
    accent: "cyan",
    previewAccent: "#9f2241",
    previewAccentAlt: "#f7d9b0",
    previewSurface:
      "radial-gradient(circle at 18% 20%, rgba(159,34,65,0.28), transparent 24%), radial-gradient(circle at 78% 20%, rgba(247,217,176,0.18), transparent 22%), linear-gradient(135deg, rgba(33,12,22,0.96), rgba(68,20,38,0.9) 52%, rgba(13,10,11,0.98))",
    previewLabel: "Espacio para vista previa de app y API",
    previewNote:
      "Este bloque queda listo para mostrar capturas de la app cliente, el mapa o el panel de endpoints.",
    previewImage: movikooxPreview,
    summary:
      "Movikoox nace como una iniciativa ciudadana ante la llegada de los nuevos camiones en Campeche y la falta de información clara para la gente. La app ayuda a consultar el transporte público de forma gratuita, moderna y local, porque fue pensada específicamente para resolver una necesidad real de movilidad en Campeche.",
    stack: ["JavaScript", "Frontend", "API REST", "Vercel"],
    repositories: [
      projectLink("GitHub API", "https://github.com/CastilloDevX/movikoox"),
      projectLink("GitHub App", "https://github.com/CastilloDevX/koox"),
    ],
    previews: [
      projectLink("Sitio web", "https://movikoox.vercel.app"),
      projectLink("App en vivo", "https://movikooxweb.vercel.app"),
    ],
  },
  {
    id: "minidbeaver",
    sortDate: "2025-10-15",
    createdAt: "15 de octubre de 2025",
    title: "MiniDBeaver",
    category: "Herramienta de escritorio",
    status: "Prototipo",
    accent: "emerald",
    previewAccent: "#6f4e37",
    previewAccentAlt: "#b08968",
    previewSurface:
      "radial-gradient(circle at 18% 20%, rgba(111,78,55,0.32), transparent 26%), radial-gradient(circle at 80% 20%, rgba(176,137,104,0.2), transparent 24%), linear-gradient(135deg, rgba(33,22,17,0.96), rgba(64,42,30,0.9) 54%, rgba(12,9,8,0.98))",
    previewLabel: "Espacio para screenshot del cliente SQL",
    previewNote:
      "Puedes poner aquí una captura de tablas, conexiones o resultados de consulta.",
    previewImage: miniDBeaverPreview,
    summary:
      "MiniDBeaver es una propuesta de herramienta de escritorio inspirada en flujos de trabajo de clientes SQL como DBeaver, pero orientada a una experiencia más ligera, directa y experimental. Su valor está en simplificar conexiones, exploración de estructuras y validación rápida de consultas.",
    stack: ["Java", "SQL", "Desktop UI", "Productividad"],
    repositories: [
      projectLink("GitHub", "https://github.com/CastilloDevX/MiniDBeaver"),
    ],
    previews: [],
  },
  {
    id: "space-vision",
    sortDate: "2025-11-04",
    createdAt: "4 de noviembre de 2025",
    title: "SpaceVision",
    category: "Proyecto NASA Space Apps",
    status: "Hackathon NASA - Top 4",
    accent: "violet",
    previewAccent: "#f0abfc",
    previewSurface:
      "radial-gradient(circle at 18% 18%, rgba(232,121,249,0.3), transparent 26%), radial-gradient(circle at 76% 18%, rgba(96,165,250,0.2), transparent 22%), linear-gradient(135deg, rgba(25,14,43,0.96), rgba(44,20,67,0.88) 54%, rgba(7,10,24,0.98))",
    previewLabel: "Espacio para vista del sitio NASA",
    previewNote:
      "Aquí podrás colocar la portada visual, dashboards solares o escenas del proyecto.",
    previewImage: spaceVisionPreview,
    summary:
      "SpaceVision es una plataforma educativa interactiva creada para NASA Space Apps Challenge, pensada para transformar datos científicos en una experiencia visual clara y atractiva. El proyecto destaca por su enfoque STEM, su capa visual y el resultado obtenido como Top 4.",
    stack: ["HTML", "CSS", "JavaScript", "STEM"],
    repositories: [
      projectLink("GitHub", "https://github.com/CastilloDevX/SpaceVision"),
    ],
    previews: [
      projectLink("Sitio en vivo", "https://space-vision.vercel.app"),
    ],
  },
  {
    id: "mortal-run",
    sortDate: "2023-09-30",
    createdAt: "30 de septiembre de 2023",
    title: "Mortal Run",
    category: "Roblox Game",
    status: "Desplegado",
    accent: "emerald",
    previewAccent: "#53d134",
    previewAccentAlt: "#ff8d1a",
    previewSurface:
      "radial-gradient(circle at 16% 18%, rgba(83,209,52,0.24), transparent 24%), radial-gradient(circle at 82% 22%, rgba(255,141,26,0.22), transparent 24%), linear-gradient(135deg, rgba(9,35,16,0.96), rgba(17,53,76,0.88) 50%, rgba(22,14,12,0.98))",
    previewLabel: "Espacio para gameplay de Mortal Run",
    previewNote:
      "Ideal para poner una captura del nivel, interfaz de juego o momentos de plataforma.",
    previewImage: mortalRunPreview,
    summary:
      "Mortal Run es un juego de obstáculos y plataformas con mapas en 2D y 3D, accesorios, efectos visibles y habilidades como doble salto, deslizarse, escalar paredes y volar con globo. Propone una mezcla de mecánicas poco común en este tipo de proyectos, y por eso destaca como una experiencia competitiva que empuja al jugador a mejorar rutas, tiempos y dominio del movimiento.",
    stack: ["Gameplay", "Diseño de niveles", "Web", "Marca personal"],
    repositories: [],
    previews: [
      projectLink("Jugar ahora", "https://mratomdev.vercel.app/games/mortal-run"),
    ],
  },
  {
    id: "im-king",
    sortDate: "2020-07-26",
    createdAt: "26 de julio de 2020",
    title: "I'm King",
    category: "Roblox Game",
    status: "Gamejam Roblox - Campeón Internacional 2021",
    accent: "amber",
    previewAccent: "#f4c53f",
    previewAccentAlt: "#ff6b2c",
    previewSurface:
      "radial-gradient(circle at 18% 20%, rgba(244,197,63,0.32), transparent 24%), radial-gradient(circle at 80% 22%, rgba(255,107,44,0.2), transparent 22%), linear-gradient(135deg, rgba(46,27,12,0.96), rgba(70,46,20,0.9) 52%, rgba(17,13,10,0.98))",
    previewLabel: "Espacio para gameplay de I'm King",
    previewImage: imKingPreview,
    previewNote:
      "Aquí podrás mostrar pantalla inicial, puntuaciones o una escena representativa del juego.",
    summary:
      "I'm King gira alrededor de una idea clara: coronarte o quitarle el trono a otro jugador en rondas donde defender, escapar y atacar cambia por completo tu estrategia. No es común ver una propuesta tan directa de combate por control del rey con armas y mapas arena, y por eso funciona como un proyecto con identidad propia y un loop competitivo fácil de entender.",
    stack: ["Arcade", "Game feel", "Web", "Marca personal"],
    repositories: [],
    previews: [
      projectLink("Jugar ahora", "https://mratomdev.vercel.app/games/im-king"),
    ],
  },
  {
    id: "electrorbit",
    sortDate: "2024-11-16",
    createdAt: "16 de noviembre de 2024",
    title: "Electrorbit",
    category: "Herramienta visual de química",
    status: "Desplegado",
    accent: "violet",
    previewAccent: "#c084fc",
    previewSurface:
      "radial-gradient(circle at 16% 18%, rgba(192,132,252,0.3), transparent 26%), radial-gradient(circle at 80% 20%, rgba(168,85,247,0.18), transparent 22%), linear-gradient(135deg, rgba(25,12,36,0.96), rgba(43,20,62,0.88) 52%, rgba(11,10,20,0.98))",
    previewLabel: "Espacio para vista previa de la tabla periódica",
    previewImage: electrorbitPreview,
    previewNote:
      "Reserva este lugar para mostrar la tabla, configuraciones o la navegación principal.",
    summary:
      "Electrorbit presenta los elementos químicos desde una experiencia más visual y práctica, con un enfoque especial en configuración electrónica. El proyecto acerca conceptos de química a estudiantes y curiosos mediante una navegación clara y una consulta inmediata.",
    stack: ["HTML", "CSS", "JavaScript", "Educación STEM"],
    repositories: [
      projectLink("GitHub", "https://github.com/CastilloDevX/electrorbit"),
      projectLink("Sitio web", "https://castillodevx.github.io/electrorbit/")
    ],
    previews: [],
  },
  {
    id: "salud-plus",
    sortDate: "2024-04-04",
    createdAt: "4 de abril de 2024",
    title: "SaludPlus",
    category: "API médica de hackathon",
    status: "Hackathon Talent Land 2024",
    accent: "cyan",
    previewAccent: "#93c5fd",
    previewImage: saludPlusPreview,
    previewSurface:
      "radial-gradient(circle at 18% 18%, rgba(147,197,253,0.3), transparent 24%), radial-gradient(circle at 78% 20%, rgba(34,211,238,0.18), transparent 24%), linear-gradient(135deg, rgba(12,27,43,0.96), rgba(15,40,68,0.88) 52%, rgba(10,14,21,0.98))",
    previewLabel: "Espacio para vista previa clínica del proyecto",
    previewNote:
      "Aquí podrás mostrar flujos de conversión DICOM, galerías o endpoints de la API.",
    summary:
      "SaludPlus es una API médica que convierte archivos DICOM en imágenes y GIFs accesibles sin infraestructura pesada. El proyecto fue planteado para simplificar la visualización de estudios, mejorar la experiencia del paciente y acercar herramientas modernas al sector salud.",
    stack: ["API", "DICOM", "Imágenes", "Salud"],
    repositories: [
      projectLink("GitHub", "https://github.com/CastilloDevX/SaludPlus"),
    ],
    previews: [],
  },
  {
    id: "beesmath",
    sortDate: "2023-09-24",
    createdAt: "24 de septiembre de 2023",
    title: "Beesmath",
    category: "Experiencia web educativa",
    status: "Desplegado",
    accent: "amber",
    previewAccent: "#fcd34d",
    previewImage: beesMathPreview,
    previewSurface:
      "radial-gradient(circle at 16% 18%, rgba(252,211,77,0.34), transparent 26%), radial-gradient(circle at 80% 20%, rgba(251,191,36,0.2), transparent 24%), linear-gradient(135deg, rgba(51,30,11,0.96), rgba(74,40,14,0.88) 52%, rgba(22,14,16,0.98))",
    previewLabel: "Espacio para captura del sitio educativo",
    previewNote:
      "La zona queda lista para una imagen del home, actividades o dinámicas para niños.",
    summary:
      "Beesmath es una página web diseñada para niños de 3 a 6 años donde aprender a contar se vuelve una experiencia lúdica, amable y fácil de explorar. La propuesta combina interacciones claras, feedback visual y recursos sonoros para reforzar el aprendizaje en edades tempranas.",
    stack: ["JavaScript", "HTML", "CSS", "UX infantil"],
    repositories: [
      projectLink("GitHub", "https://github.com/CastilloDevX/beesmath"),
      projectLink("Sitio web","https://castillodevx.github.io/beesmath/")
    ],
    previews: [],
  },
  {
    id: "gericam",
    sortDate: "2023-05-18",
    createdAt: "18 de mayo de 2023",
    title: "GeriCAM",
    category: "App de asistencia médica para adultos mayores",
    status: "Hackathon TCS Empowers 2023 - Top 4",
    accent: "emerald",
    previewAccent: "#22c55e",
    previewAccentAlt: "#38bdf8",
    previewSurface:
      "radial-gradient(circle at 16% 18%, rgba(34,197,94,0.3), transparent 24%), radial-gradient(circle at 80% 20%, rgba(56,189,248,0.22), transparent 24%), linear-gradient(135deg, rgba(8,34,28,0.96), rgba(12,54,66,0.9) 52%, rgba(6,14,20,0.98))",
    previewLabel: "Vista previa de GeriCAM",
    previewImage: geriCAMPreview,
    previewNote:
      "Banner del proyecto presentado en TCS Empowers 2023 para asistencia y alertas de emergencia en adultos mayores.",
    summary:
      "GeriCAM es una app de asistencia para adultos mayores que permite pedir ayuda médica o apoyo de personal de gericultura de CEYCTEC ante alertas de riesgo, emergencias o situaciones críticas. El proyecto contó con orientación de INAPAM para enfocar correctamente la solución, despertó interés de patrocinadores, obtuvo Top 4 en Hackathon TCS Empowers 2023 y recibió reconocimiento por la gobernadora de Campeche.",
    stack: ["Hackathon", "Aplicación móvil", "Salud", "Impacto social"],
    repositories: [
      projectLink("GitHub", "https://github.com/CastilloDevX/GeriCAM"),
    ],
    previews: [],
  },
  {
    id: "educamp",
    sortDate: "2022-06-10",
    createdAt: "10 de junio de 2022",
    title: "EduCamp",
    category: "Proyecto de hackathon educativo",
    status: "Hackathon TCS Empowers - Top #1",
    accent: "emerald",
    previewAccent: "#2f91ff",
    previewAccentAlt: "#80d62d",
    previewSurface:
      "radial-gradient(circle at 16% 18%, rgba(47,145,255,0.26), transparent 24%), radial-gradient(circle at 80% 20%, rgba(128,214,45,0.18), transparent 22%), linear-gradient(135deg, rgba(10,28,49,0.96), rgba(11,61,84,0.88) 54%, rgba(11,20,16,0.98))",
    previewLabel: "Espacio para capturas de EduCamp",
    previewImage: eduCampPreview,
    previewNote:
      "Puedes mostrar aquí el concepto principal o la landing construida para la propuesta.",
    summary:
      "EduCamp es una app educativa para primeros años de primaria que enseña lectura, comprensión lectora y aritmética básica con una ruta de aprendizaje progresiva, videos, actividades y minijuegos. Surge para atender el rezago educativo y ganó fuerza al contar con convenio y respaldo de la Secretaría de Educación Pública de Campeche, SEDUC, para impulsar su validación y alcance.",
    stack: ["Hackathon", "Web", "Presentación", "Educación"],
    repositories: [
      projectLink("GitHub","https://github.com/CastilloDevX/Hightlight_CECYTEC_Projects/tree/main/Edu-Camp"),
      projectLink("Sitio web","https://educamp-sigma.vercel.app/"),
    ],
    previews: [],
  }
];

export const experiences = [
  {
    title: "Ko'ox API",
    type: "Proyecto",
    details:
      "Ko'ox API es un servicio REST que centraliza todas las paradas del transporte público en Campeche, resolviendo la falta de datos accesibles para la ciudadanía. Permite obtener la parada más cercana, filtrar por rutas y consumir información desde cualquier app. Su impacto es comunitario: mejora la movilidad urbana y habilita soluciones móviles modernas. Es un proyecto open source listo para escalar hacia aplicaciones de transporte o paneles municipales.",
    align: "left",
    accent: "blue",
  },
  {
    title: "Space Vision",
    type: "Proyecto de Hackathon",
    details:
      "Space Vision es una plataforma educativa interactiva creada para NASA Space Apps Challenge, diseñada para visualizar el Sol mediante datos científicos reales. Resuelve la complejidad de enseñar astronomía transformando información técnica en experiencia visual clara. Su impacto destaca en educación STEM, museos y divulgación científica. El proyecto obtuvo Top 4, demostrando alto nivel técnico y creatividad visual.",
    align: "right",
    accent: "purple",
  },
  {
    title: "Salud+",
    type: "Proyecto de Hackathon",
    details:
      "Salud+ es una API médica que convierte archivos DICOM en imágenes y GIFs accesibles sin infraestructura pesada. Resuelve la dificultad que enfrentan clínicas y pacientes al visualizar ultrasonidos desde dispositivos comunes. Su impacto mejora la experiencia del paciente y moderniza la entrega de estudios médicos. Es una solución escalable y lista para integrarse en hospitales o servicios de diagnóstico.",
    align: "left",
    accent: "blue",
  },
  {
    title: "Mortal Run (Alpha)",
    type: "Proyecto Personal",
    details:
      "Mortal Run es un juego híbrido 2D/3D con mecánicas de plataformas, doble salto, habilidades y progresión. Resuelve la necesidad de juegos ligeros, fluidos y divertidos sin depender de grandes motores o equipos. Su impacto está en demostrar la capacidad de crear experiencias pulidas desde cero, incluyendo diseño, mecánicas y sistemas. Es un proyecto con alto potencial de crecimiento para la marca MrAtomDev.",
    align: "right",
    accent: "purple",
  },
  {
    title: "PIA",
    type: "Proyecto Freelance",
    details:
      "PIA es una app móvil desarrollada en Kotlin y Jetpack Compose con registro, autenticación, verificación de correo y manejo de sesiones con Firebase. Resuelve la necesidad de contar con un flujo de usuarios seguro, moderno y escalable. Su impacto está en ofrecer un ejemplo profesional de arquitectura móvil para proyectos educativos y empresariales. Ideal como punto de partida para apps productivas reales.",
    align: "left",
    accent: "blue",
  },
  {
    title: "Ploostream",
    type: "Proyecto Freelance",
    details:
      "Sportscrap es una plataforma web que automatiza la obtención y actualización de datos deportivos mediante scraping profesional. Resuelve la falta de APIs fiables o gratuitas en el sector, permitiendo ofrecer estadísticas limpias, actualizadas y listas para consumo. Su impacto es clave para comunidades deportivas, páginas de resultados y empresas que requieren información en tiempo real. Es un proyecto en expansión con potencial comercial alto.",
    align: "right",
    accent: "purple",
  },
  {
    title: "Quick Coins",
    type: "Proyecto Freelance",
    details:
      "Este videojuego integra minijuegos competitivos donde los jugadores ganan monedas intercambiables por Robux mediante microtransacciones. Resuelve la necesidad de sistemas de monetización sostenibles y engagement continuo dentro de Roblox. Su impacto combina entretenimiento, economía interna y retención, ideal para plataformas con comunidades activas. Es un proyecto con fuerte potencial comercial gracias a su modelo play and earn.",
    align: "right",
    accent: "purple",
  },
];

export const clients = [
  {
    clientAvatar: client1,
    clientName: "PIA Project",
    clientPosition: "Founder",
    testimonial:
      "José Manuel ha sido una experiencia sumamente positiva. Desde el inicio, demostró un alto nivel de responsabilidad y compromiso con cada tarea asignada. Tiene una gran capacidad para aprender por cuenta propia y adaptarse rápidamente a nuevos entornos o tecnologías, lo que fue clave para el éxito del proyecto.",
  },
  {
    clientAvatar: brukyon,
    clientName: "Quick Coins & Ploostream",
    clientPosition: "Founder",
    testimonial:
      "Trabajar con José Manuel en mi juego de Roblox ha sido una experiencia impecable. Destaco por encima de todo su sinceridad y atención; siempre estuvo disponible para resolver cualquier duda. Manteníamos llamadas constantes para revisar avances, lo que me dio mucha tranquilidad. Además, su responsabilidad es total: si los estudios le requerían tiempo, me avisaba con días de antelación. En resumen, un profesional educado, responsable y altamente comprometido.",
  },
  {
    clientAvatar: null,
    clientName: "Breiler Alfredo González",
    clientPosition: "Air Brey Services",
    testimonial:"Quiero expresar mi más sincero agradecimiento a José Manuel por el excelente trabajo realizado en mi página web. Su atención, profesionalismo y dedicación hicieron que todo el proceso fuera mucho más fácil y eficiente. Siempre estuvo dispuesto a ayudar, resolver dudas y cuidar cada detalle para lograr un resultado de alta calidad, gracias por su compromiso y por brindar un servicio tan profesional. Sin duda, recomendamos su trabajo y espero seguir colaborando con él en futuros proyectos."  
  }
];

export const contactContent = {
  message:
    "Actualmente busco unirme a un equipo multidisciplinario enfocado en la innovación para el crecimiento global. ¿Tienes algún proyecto en mente? Conectemos.",
  email: "castilloquehjosema@gmail.com",
};

function icon(src, label) {
  return { src, label };
}

function projectLink(label, url, type) {
  return type ? { label, url, type } : { label, url };
}

function brief(...segments) {
  return segments.map((segment) =>
    typeof segment === "string" ? { text: segment } : segment
  );
}

function emphasis(text) {
  return { text, emphasis: true };
}
