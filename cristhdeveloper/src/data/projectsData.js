export const projectsData = [
  {
    title: 'Localización y Monitoreo Sísmico',
    description: 'Plataforma web de respuesta rápida. Centraliza dos servicios críticos: un buscador unificado de personas desaparecidas que consulta múltiples fuentes, y un panel de monitoreo sísmico en Venezuela',
    context: 'Una plataforma web de respuesta rápida diseñada para asistir en situaciones de emergencia. El sistema centraliza dos servicios críticos: un buscador unificado de personas desaparecidas que consulta múltiples fuentes y APIs gubernamentales, y un panel de monitoreo sísmico con visualización geoespacial para el seguimiento de movimientos telúricos en Venezuela.',
    role: 'Fullstack Developer',
    challenges: 'Estandarización de datos. Debía combinar registros de bases de datos estructuradas (Supabase) con información no estructurada proveniente de APIs de respuesta a emergencias (textos con separadores).',
    image: '/projects/venezuela2406.png',
    repo: 'https://github.com/CristhalCampos/venezuela2406',
    tech: ['Next.js', 'Typescript', 'TailwindCSS', 'Supabase'],
    featured: true, // Para destacarlo
    status: 'Completado'
  },
  {
    title: 'Social Network Kirtily',
    description: 'Red social moderna para compartir hobbies y creatividad.',
    context: 'Proyecto final de Programación Web Profesional. Buscaba resolver la falta de espacios dedicados exclusivamente a nichos creativos con escalabilidad.',
    role: 'Fullstack Developer & UI/UX Designer',
    challenges: 'Manejo de roles premium, pasarela de pago, arquitectura escalable y sistema de autenticación seguro.',
    image: '/projects/kirtily.jpg',
    repo: 'https://github.com/CristhalCampos/kirtily',
    tech: ['React', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    featured: true, // Para destacarlo
    status: 'Completado'
  },
  {
    title: 'MentorIA Platform',
    description: 'Plataforma de mentoría estudiantil potenciada por IA.',
    context: 'Desarrollado en el Hackathon Dev Gener-AI-tion. Enfocado en democratizar el acceso a mentorías personalizadas.',
    role: 'Frontend & AI Integration',
    challenges: 'Integración de modelos de OpenAI en tiempo récord y definición de arquitectura bajo presión.',
    image: '/projects/mentoria.png',
    repo: 'https://github.com/CristhalCampos/MentorIA',
    tech: ['Next.js', 'TailwindCSS', 'Supabase', 'OpenAI'],
    status: 'MVP / Hackathon High-Pressure'
  },
  {
    title: 'WeatherApp',
    description: 'Aplicación meteorológica en tiempo real con geolocalización.',
    context: 'Desarrollado para practicar el consumo de APIs RESTful y el manejo de estados complejos. La aplicación permite a los usuarios consultar condiciones climáticas exactas mediante la API de OpenWeatherMap.',
    role: 'Frontend Developer',
    challenges: 'Mejorar la percepción de carga y manejo de errores robusto para búsquedas de ciudades inexistentes o fallos de red.',
    image: '/projects/weather.png',
    repo: 'https://github.com/CristhalCampos/WeatherApp',
    tech: ['React', 'TailwindCSS', 'OpenWeather API'],
    status: 'Completado',
    featured: false
  },
  {
    title: 'PokeSite',
    description: 'Enciclopedia interactiva basada en la PokéAPI con filtrado dinámico.',
    context: 'Un proyecto enfocado en la manipulación del DOM y el filtrado de datos en el cliente. El objetivo fue crear una interfaz fluida para explorar cientos de registros de manera eficiente.',
    role: 'Frontend Developer',
    challenges: 'Optimización del rendimiento al cargar múltiples imágenes y datos simultáneamente, y creación de un sistema de búsqueda en tiempo real que filtra resultados mientras el usuario escribe.',
    image: '/projects/pokemon.png',
    repo: 'https://github.com/CristhalCampos/pokemon',
    tech: ['Javascript', 'HTML5', 'CSS3', 'PokéAPI'],
    status: 'Completado',
    featured: false
  },
  {
    title: 'E-Commerce Admin Panel',
    description: 'Sistema integral de gestión de ventas, productos y clientes.',
    context: 'Desarrollo de una plataforma dinámica para la administración de inventarios. El objetivo principal fue crear un panel de control privado que permita realizar operaciones CRUD (Crear, Leer, Actualizar, Borrar) sobre una base de datos relacional, garantizando la integridad de la información comercial.',
    role: 'Fullstack Developer (LAMP Stack)',
    challenges: 'Diseño y normalización de la base de datos MySQL para manejar relaciones entre productos y clientes, y la implementación de lógica de servidor para la persistencia de datos mediante PHP.',
    image: '/projects/proyectoPHP.png',
    repo: 'https://github.com/CristhalCampos/proyectoPHP',
    tech: ['PHP', 'MySQL'],
    status: 'Completado',
    featured: false
  },
  {
    title: 'Telegram Bot',
    description: 'Sistema automatizado de gestión de inventario vía chat.',
    context: 'Diseñado para digitalizar el control de productos sin necesidad de interfaces complejas. Permite a pequeños negocios gestionar stock directamente desde su celular, utilizando Google Sheets como una base de datos en la nube accesible y gratuita.',
    role: 'Backend Developer',
    challenges: 'Integración de Google Sheets para lectura/escritura asíncrona y diseño de una lógica de comandos intuitiva para el usuario final (UX conversacional).',
    image: '/projects/sistemagestion.jpeg',
    repo: 'https://github.com/CristhalCampos/Bot-Telegram',
    tech: ['Python', 'Google Sheets'],
    status: 'Completado',
    featured: false
  },
];