/**
 * Array de ejemplos predefinidos de textos para analizar su toxicidad.
 * Cada ejemplo contiene una etiqueta descriptiva y un texto representativo
 * de diferentes niveles de toxicidad, desde muy positivo hasta muy tóxico.
 * 
 * @constant
 * @type {Array<{label: string, texto: string}>}
 * 
 * @property {string} label - Etiqueta descriptiva que identifica el tipo de mensaje
 * @property {string} texto - Contenido del mensaje ejemplo
 * 
 * Los ejemplos incluyen:
 * - Mensajes positivos y muy positivos: Para demostrar textos constructivos y alentadores
 * - Mensajes neutrales: Para mostrar comunicación objetiva y balanceada
 * - Mensajes tóxicos y muy tóxicos: Para ejemplificar contenido negativo y dañino
 */
export const examples = [
    {
      label: "Mensaje positivo",
      texto: "Me encanta cómo ayudas a los demás. Tu amabilidad y dedicación son realmente inspiradoras. Sigamos construyendo una comunidad más inclusiva y respetuosa. El mundo necesita más personas como tú que se preocupan genuinamente por hacer una diferencia positiva en la vida de otros."
    },
    {
      label: "Mensaje muy positivo", 
      texto: "¡Increíble trabajo en el proyecto! Tu creatividad y perseverancia han dado frutos excepcionales. Has demostrado un nivel de profesionalismo y dedicación que inspira a todo el equipo. Gracias por compartir tu talento y energía positiva con todos nosotros."
    },
    {
      label: "Mensaje tóxico",
      texto: "Eres un completo idiota y no sabes nada. Deberías callarte y desaparecer. Nadie te soporta aquí. Todo lo que haces es un desastre y francamente sería mejor si renunciaras de una vez por todas. Me enferma ver tu cara todos los días."
    },
    {
      label: "Mensaje muy tóxico",
      texto: "Eres la persona más incompetente que he conocido en mi vida. No solo eres un completo inútil, sino que además contaminas el ambiente con tu presencia. Ojalá te despidan y nunca más tengamos que aguantar tus estupideces. Haces que todo el departamento se vea mal."
    },
    {
      label: "Mensaje neutral",
      texto: "No estoy de acuerdo con tu punto de vista, pero respeto tu opinión. Podríamos discutir esto de manera más constructiva si nos enfocamos en los hechos. Quizás podríamos programar una reunión para revisar los datos y encontrar un punto medio que beneficie a ambas partes."
    },
    {
      label: "Mensaje neutral analítico",
      texto: "Según los datos presentados, hay aspectos tanto positivos como negativos en la propuesta actual. Sería prudente realizar un análisis más detallado de los costos y beneficios antes de tomar una decisión final. Sugiero que evaluemos las alternativas disponibles considerando el impacto a largo plazo."
    }
  ];