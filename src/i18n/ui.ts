/**
 * UI string dictionary.
 *
 * Every user-facing string in the site lives here, keyed by a dot-namespaced id
 * (`section.thing.subthing`). Adding a new locale means adding another top-level
 * entry to `ui` with the same key set. Adding a new string means adding the key
 * to *every* locale — TypeScript will flag missing keys at the call site because
 * `useTranslations` is typed against the default locale.
 *
 * `hero.title.html` is the one exception: it carries inline `<em class="gradient-em">`
 * markup and is rendered with `set:html`. Keep it raw HTML in every locale.
 */

export const languages = {
  es: 'Español',
  en: 'English',
} as const;

/** The locale used when `Astro.currentLocale` is not set (i.e. the un-prefixed root). */
export const defaultLang = 'es';

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    // ── Header ──────────────────────────────────────────────────────────────
    'header.nav.home': 'Inicio',
    'header.nav.benefits': 'Beneficios',
    'header.nav.how': 'Cómo funciona',
    'header.cta.signin': 'Iniciar sesión',
    'header.cta.demo': 'Solicitar Demo',

    // ── Hero ────────────────────────────────────────────────────────────────
    'hero.eyebrow': 'Clima laboral medido en tiempo real',
    // Raw HTML — rendered with set:html. The <em> tags get the .gradient-em class.
    'hero.title.html':
      'Donde cada voz <em class="gradient-em">se escucha</em> y cada señal <em class="gradient-em">se actúa</em>.',
    'hero.subtitle':
      'SoftWork es el puente seguro entre tu equipo y Recursos Humanos. Reportes anónimos, foros internos, soporte con IA 24/7 y dashboards analíticos para decisiones que importan.',
    'hero.cta.demo': 'Solicitar Demo',
    'hero.cta.how': 'Ver cómo funciona',
    'hero.trust.label': 'Una iniciativa de Elysium',
    'hero.trust.brand': 'Elysium · Startup',

    // ── Floating cards (around the hero phone) ──────────────────────────────
    'float.anon.label': 'Reporte enviado',
    'float.anon.value': 'Identidad protegida',
    'float.alert.label': 'Alerta de clima',
    'float.alert.value': 'Equipo Diseño · medio',
    'float.ai.label': 'IA Asistente',
    'float.ai.value': 'Respuesta en 2.4s',

    // ── In-phone preview ────────────────────────────────────────────────────
    'phone.greeting': 'Buenos días',
    'phone.name': 'Camila R.',
    'phone.mood.title': '¿Cómo te sientes hoy?',
    'phone.mood.anon': 'Anónimo',
    'phone.tile.report.title': 'Reportar incidente',
    'phone.tile.report.sub': '100% anónimo y cifrado',
    'phone.tile.forum.title': 'Foros internos',
    'phone.tile.forum.sub': '12 conversaciones activas',
    'phone.tile.ai.title': 'Asistente IA',
    'phone.tile.ai.sub': 'Disponible 24/7',

    // ── Stats strip ─────────────────────────────────────────────────────────
    'stats.retention.value': '+38%',
    'stats.retention.label': 'retención de talento',
    'stats.reports.value': '3.2×',
    'stats.reports.label': 'reportes recibidos vs. canal abierto',
    'stats.support.value': '24/7',
    'stats.support.label': 'soporte inicial con IA',
    'stats.anonymity.value': '100%',
    'stats.anonymity.label': 'anonimato verificable',

    // ── Beneficios section lead ─────────────────────────────────────────────
    'benefits.eyebrow': 'La plataforma',
    'benefits.title': 'Una experiencia, dos caras del mismo problema.',
    'benefits.body':
      'Empleados que necesitan ser escuchados sin riesgo. RRHH que necesita ver lo que pasa antes de que escale. SoftWork conecta ambos lados con seguridad y cuidado.',

    // ── Value block: Empleados ──────────────────────────────────────────────
    'block.emp.eyebrow': 'Para empleados',
    'block.emp.title': 'Un espacio seguro para hablar sin miedo.',
    'block.emp.body':
      'Reporta incidentes, comparte ideas y conversa con tu equipo bajo identidad protegida. Nada se rastrea hasta ti — solo tu voz llega a quienes pueden actuar.',
    'block.emp.feat1.lead': 'Reportes anónimos verificables',
    'block.emp.feat1.rest':
      ' — cifrado de extremo a extremo y sin metadatos vinculantes.',
    'block.emp.feat2.lead': 'Foros internos por temas',
    'block.emp.feat2.rest':
      ' con moderación clara y reglas de seguridad psicológica.',
    'block.emp.feat3.lead': 'Check-ins diarios de bienestar',
    'block.emp.feat3.rest': ' que tardan menos de 10 segundos.',
    'block.emp.link': 'Ver el flujo del empleado',

    // ── Value block: RRHH ───────────────────────────────────────────────────
    'block.hr.eyebrow': 'Para RRHH',
    'block.hr.title':
      'Visibilidad en tiempo real, antes de que algo escale.',
    'block.hr.body':
      'Pulso del clima laboral por equipo, alertas tempranas con contexto y métricas accionables. Toma decisiones basadas en señales reales, no en encuestas trimestrales.',
    'block.hr.feat1.lead': 'Alertas de clima por equipo',
    'block.hr.feat1.rest': ' con clasificación de riesgo y recomendaciones.',
    'block.hr.feat2.lead': 'Tendencias de rotación',
    'block.hr.feat2.rest': ' y correlación con eventos clave del negocio.',
    'block.hr.feat3.lead': 'Reportes ejecutivos',
    'block.hr.feat3.rest': ' exportables, listos para comité de cultura.',
    'block.hr.link': 'Ver el dashboard de RRHH',

    // ── Value block: IA ─────────────────────────────────────────────────────
    'block.ai.eyebrow': 'Asistente IA',
    'block.ai.title':
      'Soporte 24/7 para los momentos en que nadie más está.',
    'block.ai.body':
      'Una IA entrenada en bienestar laboral que escucha, contiene y orienta. Detecta señales tempranas de riesgo y conecta con RRHH solo si la persona lo autoriza.',
    'block.ai.feat1.lead': 'Conversación contenedora',
    'block.ai.feat1.rest':
      ' con framework de escucha activa, no recetas frías.',
    'block.ai.feat2.lead': 'Escalamiento humano',
    'block.ai.feat2.rest': ' automático ante señales de riesgo crítico.',
    'block.ai.feat3.lead': 'Privado por diseño',
    'block.ai.feat3.rest':
      ': la conversación nunca llega a RRHH sin consentimiento.',
    'block.ai.link': 'Probar la conversación demo',

    // ── Employee viz card ───────────────────────────────────────────────────
    'viz.emp.author': 'Anónimo · Diseño',
    'viz.emp.meta': 'Hace 2 horas · ID #4F2A',
    'viz.emp.chip': 'Anónimo',
    'viz.emp.report.title': 'Sobrecarga después del lanzamiento',
    'viz.emp.report.body':
      '"Llevamos tres semanas con sprints de fin de semana y nadie ha mencionado descansos compensatorios. Me preocupa que el equipo termine quemado antes de Q3."',
    'viz.emp.risk': 'Riesgo medio',
    'viz.emp.forum.title': 'Foro · Bienestar',
    'viz.emp.thread1.title': '¿Hacemos una semana sin reuniones?',
    'viz.emp.thread1.meta': '23 respuestas · activo',
    'viz.emp.thread2.title': 'Tips de desconexión digital',
    'viz.emp.thread2.meta': '11 respuestas · 1d',

    // ── HR dashboard viz ────────────────────────────────────────────────────
    'viz.hr.title': 'Pulso de clima — esta semana',
    'viz.hr.range': 'Últimos 7 días',
    'viz.hr.stat.enps': 'eNPS',
    'viz.hr.stat.turnover': 'Rotación 30d',
    'viz.hr.stat.reports': 'Reportes',
    'viz.hr.stat.mood': 'Mood promedio',
    'viz.hr.chart.title': 'Clima por equipo',
    'viz.hr.chart.sub': '% positivo',
    'viz.hr.alert.title': 'Alerta · Diseño',
    'viz.hr.alert.sub': 'Sobrecarga sostenida (3 sem)',

    // ── AI chat viz ─────────────────────────────────────────────────────────
    'viz.ai.title': 'Ely · Asistente SoftWork',
    'viz.ai.status': 'En línea · respuesta en 2s',
    'viz.ai.input': 'Escribe lo que sientes…',
    'viz.ai.side.title': 'Privado por diseño',
    'viz.ai.side.body': 'RRHH solo lo verá si lo autorizas',
    'chat.user1': 'Mi líder me cambió las prioridades 3 veces esta semana.',
    'chat.bot1':
      'Te escucho. Eso suena agotador 💙. ¿Quieres explorar cómo plantear esto sin exponerte, o prefieres que abramos un reporte anónimo?',
    'chat.user2': 'Plantearlo, pero sin que se enfade.',
    'chat.bot2':
      'Te propongo un guion en 3 frases que enfoca en impacto, no en culpa. ¿Lo revisamos juntas?',

    // ── CTA banner ──────────────────────────────────────────────────────────
    'cta.title': 'Demuestra a tu equipo que sí escuchas.',
    'cta.body':
      'Agenda una demo de 20 minutos. Te mostramos cómo SoftWork se adapta a tu cultura y te dejamos un piloto gratuito por 30 días.',
    'cta.demo': 'Solicitar Demo',
    'cta.sales': 'Hablar con ventas',

    // ── Footer ──────────────────────────────────────────────────────────────
    'footer.tagline':
      'El puente seguro entre tu equipo y RRHH. Construyendo culturas donde cada voz importa.',
    'footer.col.product': 'Producto',
    'footer.col.company': 'Empresa',
    'footer.col.legal': 'Legal',
    'footer.product.benefits': 'Beneficios',
    'footer.product.how': 'Cómo funciona',
    'footer.product.integrations': 'Integraciones',
    'footer.product.pricing': 'Precios',
    'footer.product.news': 'Novedades',
    'footer.company.about': 'Sobre Elysium',
    'footer.company.cases': 'Casos de éxito',
    'footer.company.contact': 'Contacto',
    'footer.company.careers': 'Carreras',
    'footer.legal.privacy': 'Privacidad',
    'footer.legal.terms': 'Términos',
    'footer.legal.security': 'Seguridad',
    'footer.legal.dpa': 'Acuerdo de procesamiento',
    'footer.legal.anonymity': 'Política de anonimato',
    'footer.copy': '© 2026 SoftWork. Todos los derechos reservados.',
    'footer.by.prefix': 'Construido con cuidado por',

    // ── <head> meta ─────────────────────────────────────────────────────────
    'meta.title': 'SoftWork — Clima y bienestar laboral, escuchado de verdad.',
    'meta.description':
      'El puente seguro entre tu equipo y RRHH. Reportes anónimos, foros internos, soporte con IA 24/7 y dashboards analíticos.',

    // ── Misc ────────────────────────────────────────────────────────────────
    'lang.label': 'Idioma',

    // ─────────────────────────────────────────────────────────────────────────
    //  How-it-works page (`cf.*`)
    // ─────────────────────────────────────────────────────────────────────────
    'cf.meta.title': 'SoftWork — Cómo funciona, paso a paso.',
    'cf.meta.description':
      'Tres flujos que conectan empleados, IA y RRHH: reporte anónimo, asistente Ely y dashboard accionable.',

    // CF Hero
    'cf.hero.eyebrow': 'Cómo funciona, paso a paso',
    'cf.hero.title.html':
      'Tres flujos. Una sola plataforma que <em class="gradient-em">conecta personas y decisiones</em>.',
    'cf.hero.body':
      'Te mostramos exactamente lo que ven empleados y RRHH, en orden: cómo se reporta, cómo conversa Ely y cómo el equipo de cultura toma decisiones con datos reales.',
    'cf.tab.report': 'Reporte anónimo',
    'cf.tab.ai': 'IA Ely',
    'cf.tab.dashboard': 'Dashboard RRHH',

    // Scenario 1 — Empleado / Reporte
    'cf.s1.eyebrow': 'Pantalla 1 · Empleado',
    'cf.s1.title': 'Reportar y conversar — sin miedo a ser identificado.',
    'cf.s1.body':
      'El empleado puede levantar una alerta o abrir un foro interno con identidad protegida y un ticket privado para hacer seguimiento.',
    'cf.s1.step1.title': 'Elige categoría',
    'cf.s1.step1.desc':
      'Selecciona el tipo de reporte: clima, sobrecarga, liderazgo o algo más sensible.',
    'cf.s1.step2.title': 'Cuenta lo que pasa',
    'cf.s1.step2.desc':
      'Texto libre. Sin nombres, sin metadatos. La privacidad se mantiene incluso si la persona se identifica.',
    'cf.s1.step3.title': 'Envía con identidad protegida',
    'cf.s1.step3.desc':
      'El sistema separa la firma del contenido y genera un ticket que solo tú puedes consultar.',
    'cf.s1.step4.title': 'RRHH actúa, tú haces seguimiento',
    'cf.s1.step4.desc':
      'Recibes notificaciones del estado del caso desde el ticket — sin exponer tu identidad.',

    // Report phone copy
    'cf.report.topbar.new': 'Nuevo reporte',
    'cf.report.topbar.sent': 'Reporte enviado',
    'cf.report.chip': 'Anónimo',
    'cf.report.label.cat': 'Categoría',
    'cf.report.cat.climate': 'Clima laboral',
    'cf.report.cat.overload': 'Sobrecarga',
    'cf.report.cat.leadership': 'Liderazgo',
    'cf.report.cat.harassment': 'Acoso',
    'cf.report.cat.other': 'Otro',
    'cf.report.label.what': 'Cuéntanos qué pasa',
    'cf.report.placeholder': 'Escribe aquí lo que quieres compartir…',
    'cf.report.detail':
      'El equipo de Diseño lleva tres semanas con sprints de fin de semana. Nadie ha mencionado descansos compensatorios y el cansancio se nota en daily.',
    'cf.report.label.privacy': 'Privacidad',
    'cf.report.privacy.title': 'Identidad protegida',
    'cf.report.privacy.sub': 'Sin metadatos vinculantes',
    'cf.report.submit': 'Enviar reporte',
    'cf.report.submitting': 'Enviando…',
    'cf.report.confirm.title': 'Reporte enviado',
    'cf.report.confirm.body':
      'RRHH lo verá sin tu identidad. Puedes seguir su estado con tu ticket.',
    'cf.report.ticket': 'TICKET · #4F2A-9C',
    'cf.report.forum.title': 'Foro · Bienestar',
    'cf.report.forum.t1.title': '¿Hacemos una semana sin reuniones?',
    'cf.report.forum.t1.meta': '23 respuestas · activo ahora',
    'cf.report.forum.t2.title': 'Tips de desconexión digital',
    'cf.report.forum.t2.meta': '11 respuestas · 1 día',

    // Scenario 2 — IA / Ely
    'cf.s2.eyebrow': 'Pantalla 2 · IA Asistente',
    'cf.s2.title': 'Ely — soporte 24/7, escucha antes que respuestas.',
    'cf.s2.body':
      'Una IA empática, entrenada en bienestar laboral, disponible para los momentos en que nadie más está. Privada por diseño.',
    'cf.s2.step1.title': 'Conversación contenedora',
    'cf.s2.step1.desc':
      'Ely escucha primero, sin recetas. Framework de escucha activa entrenado con psicólogos organizacionales.',
    'cf.s2.step2.title': 'Detección de señales',
    'cf.s2.step2.desc':
      'La IA reconoce indicadores tempranos —agotamiento, aislamiento, ideación negativa— y ajusta su tono.',
    'cf.s2.step3.title': 'Sugerencias accionables',
    'cf.s2.step3.desc':
      'Propone un siguiente paso (guion, ejercicio, reporte) y deja al empleado decidir.',
    'cf.s2.step4.title': 'Escalamiento humano si es crítico',
    'cf.s2.step4.desc':
      'Ante riesgo alto conecta con RRHH o un profesional, siempre con consentimiento explícito.',

    // AI phone copy
    'cf.ai.name': 'Ely',
    'cf.ai.status': 'En línea · privado',
    'cf.ai.day': 'Hoy · 22:14',
    'cf.ai.user1': 'Llevo 2 semanas sin dormir bien. Pienso mucho en el trabajo.',
    'cf.ai.bot1':
      'Te leo. Es muy válido sentirse así, sobre todo cuando no hay con quién hablarlo a esta hora 💙. ¿Quieres contarme un poco más?',
    'cf.ai.user2': 'Mi líder cambió las prioridades 3 veces esta semana.',
    'cf.ai.bot2':
      'Eso suena agotador. ¿Quieres explorar cómo plantearlo o prefieres ejercicios de regulación para esta noche?',
    'cf.ai.sugg1': 'Plantearlo con cuidado',
    'cf.ai.sugg2': 'Ejercicio de regulación',
    'cf.ai.sugg3': 'Abrir reporte anónimo',
    'cf.ai.input': 'Escribe a Ely…',
    'cf.ai.detect.title': 'Señales detectadas',
    'cf.ai.detect.row1.label': 'Sueño irregular',
    'cf.ai.detect.row1.value': 'alto',
    'cf.ai.detect.row2.label': 'Sobrecarga',
    'cf.ai.detect.row2.value': 'medio',
    'cf.ai.detect.row3.label': 'Ideación negativa',
    'cf.ai.detect.row3.value': 'bajo',
    'cf.ai.privacy.title': 'Privacidad',
    'cf.ai.privacy.row1.label': 'Cifrado E2E',
    'cf.ai.privacy.row2.label': 'Visible para RRHH',
    'cf.ai.privacy.row2.value': 'No',
    'cf.ai.privacy.row3.label': 'Retención',
    'cf.ai.privacy.row3.value': '30 días',

    // Scenario 3 — RRHH / Dashboard
    'cf.s3.eyebrow': 'Pantalla 3 · RRHH',
    'cf.s3.title': 'La app móvil que convierte señales en decisiones.',
    'cf.s3.body':
      'App nativa exclusiva para Recursos Humanos (Flutter): indicadores clave de clima laboral, alertas accionables y patrones que la IA descubre — todo en el bolsillo.',
    'cf.s3.step1.title': 'Pulso vivo, no encuesta trimestral',
    'cf.s3.step1.desc':
      'Mood, eNPS, rotación y reportes en una sola vista — actualizada cada minuto.',
    'cf.s3.step2.title': 'Alertas con contexto',
    'cf.s3.step2.desc':
      'La IA correlaciona sobrecarga, foros y rotación para anticipar riesgo por equipo.',
    'cf.s3.step3.title': 'Decide y delega',
    'cf.s3.step3.desc':
      'Asigna acciones a líderes desde la misma alerta, con seguimiento dentro de la plataforma.',

    // HR phone copy
    'cf.hr.greeting': 'RRHH · M. Aguirre',
    'cf.hr.title': 'Pulso de clima',
    'cf.hr.filter.7d': '7d',
    'cf.hr.filter.30d': '30d',
    'cf.hr.filter.q': 'Trim',
    'cf.hr.filter.y': 'Año',
    'cf.hr.kpi.enps': 'eNPS',
    'cf.hr.kpi.mood': 'Mood',
    'cf.hr.kpi.turnover': 'Rotación',
    'cf.hr.kpi.reports': 'Reportes',
    'cf.hr.card.mood.title': 'Mood — 30 días',
    'cf.hr.alerts.title': 'Alertas activas',
    'cf.hr.alerts.new': '3 nuevas',
    'cf.hr.alert1.title': 'Diseño · sobrecarga sostenida',
    'cf.hr.alert1.sub': '3 semanas con sprints de fin de semana',
    'cf.hr.alert2.title': 'Ops · caída de mood -1.2',
    'cf.hr.alert2.sub': 'Tras reorg del 12 abr',
    'cf.hr.alert3.title': 'IA · patrón emergente',
    'cf.hr.alert3.sub': '"Burnout" +34% mes a mes',
    'cf.hr.team.title': 'Clima por equipo',
    'cf.hr.team.pm': 'PM',
    'cf.hr.team.mkt': 'Marketing',
    'cf.hr.team.eng': 'Engineering',
    'cf.hr.team.sales': 'Ventas',
    'cf.hr.team.design': 'Diseño',
    'cf.hr.tab.pulse': 'Pulso',
    'cf.hr.tab.alerts': 'Alertas',
    'cf.hr.tab.reports': 'Reportes',
    'cf.hr.tab.teams': 'Equipos',

    // CF CTA banner
    'cf.cta.title': 'Ve SoftWork en tu propia organización.',
    'cf.cta.body':
      'Una demo de 20 minutos te muestra los 3 flujos con datos reales de empresas como la tuya. Sin compromiso, sin instalar nada.',
    'cf.cta.demo': 'Solicitar demo',
    'cf.cta.back': 'Volver al inicio',

    // ─────────────────────────────────────────────────────────────────────────
    //  Request-demo placeholder page (`demo.*`)
    //
    //  Shown when users click any "Solicitar demo" CTA — the production demo
    //  flow doesn't exist yet, so this page sets the right expectation and
    //  keeps the visit warm with secondary contact options.
    // ─────────────────────────────────────────────────────────────────────────
    'demo.meta.title': 'Solicitar demo — apps móviles en desarrollo',
    'demo.meta.description':
      'Las apps móviles de SoftWork están en construcción. Mientras tanto, hablemos.',

    'demo.eyebrow': 'Próximamente · en construcción',
    'demo.title.html':
      'Las apps móviles están <em class="gradient-em">en construcción</em>.',
    'demo.body':
      'Estamos puliendo iOS, Android y el panel para RRHH. La demo agendada llega en cuanto los tres lados estén listos para que la veas en vivo, no en pantallas de marketing.',
    'demo.cta.sales': 'Hablar con ventas',
    'demo.cta.back': 'Volver al inicio',

    'demo.list.title': 'Lo que estamos puliendo',
    'demo.list.1.lead': 'App empleado · iOS y Android',
    'demo.list.1.rest':
      ' — reportes anónimos, foros y check-ins en Android y Jetpack Compose.',
    'demo.list.2.lead': 'App RRHH · pulso en el bolsillo',
    'demo.list.2.rest':
      ' — KPIs, alertas con contexto y acciones delegadas, en Flutter.',
    'demo.list.3.lead': 'Ely · IA contenedora',
    'demo.list.3.rest':
      ' — escucha activa privada por diseño, calibrada con psicólogos organizacionales.',

    // Phone placeholder
    'demo.phone.tag': 'BUILD · alpha',
    'demo.phone.title': 'Próximamente',
    'demo.phone.body':
      'Estamos cocinando algo bueno. Te avisamos cuando esté listo.',
    'demo.phone.progress.label': 'Progreso',
    'demo.phone.progress.value': '78%',
    'demo.phone.eta': 'Lanzamiento · Q3',
  },
  en: {
    'header.nav.home': 'Home',
    'header.nav.benefits': 'Benefits',
    'header.nav.how': 'How it works',
    'header.cta.signin': 'Sign in',
    'header.cta.demo': 'Request Demo',

    'hero.eyebrow': 'Workplace climate, measured in real time',
    'hero.title.html':
      'Where every voice <em class="gradient-em">is heard</em> and every signal <em class="gradient-em">is acted on</em>.',
    'hero.subtitle':
      'SoftWork is the safe bridge between your team and HR. Anonymous reports, internal forums, 24/7 AI support, and analytical dashboards for decisions that matter.',
    'hero.cta.demo': 'Request Demo',
    'hero.cta.how': 'See how it works',
    'hero.trust.label': 'An Elysium initiative',
    'hero.trust.brand': 'Elysium · Startup',

    'float.anon.label': 'Report sent',
    'float.anon.value': 'Identity protected',
    'float.alert.label': 'Climate alert',
    'float.alert.value': 'Design team · medium',
    'float.ai.label': 'AI Assistant',
    'float.ai.value': 'Reply in 2.4s',

    'phone.greeting': 'Good morning',
    'phone.name': 'Camila R.',
    'phone.mood.title': 'How are you feeling today?',
    'phone.mood.anon': 'Anonymous',
    'phone.tile.report.title': 'Report incident',
    'phone.tile.report.sub': '100% anonymous and encrypted',
    'phone.tile.forum.title': 'Internal forums',
    'phone.tile.forum.sub': '12 active conversations',
    'phone.tile.ai.title': 'AI Assistant',
    'phone.tile.ai.sub': 'Available 24/7',

    'stats.retention.value': '+38%',
    'stats.retention.label': 'talent retention',
    'stats.reports.value': '3.2×',
    'stats.reports.label': 'reports received vs. open channel',
    'stats.support.value': '24/7',
    'stats.support.label': 'initial AI support',
    'stats.anonymity.value': '100%',
    'stats.anonymity.label': 'verifiable anonymity',

    'benefits.eyebrow': 'The platform',
    'benefits.title': 'One experience, two sides of the same problem.',
    'benefits.body':
      'Employees who need to be heard without risk. HR who need to see what is happening before it escalates. SoftWork connects both sides with safety and care.',

    'block.emp.eyebrow': 'For employees',
    'block.emp.title': 'A safe space to speak without fear.',
    'block.emp.body':
      'Report incidents, share ideas, and chat with your team under a protected identity. Nothing is traced back to you — only your voice reaches those who can act.',
    'block.emp.feat1.lead': 'Verifiable anonymous reports',
    'block.emp.feat1.rest':
      ' — end-to-end encryption with no linking metadata.',
    'block.emp.feat2.lead': 'Topic-based internal forums',
    'block.emp.feat2.rest':
      ' with clear moderation and psychological-safety rules.',
    'block.emp.feat3.lead': 'Daily wellbeing check-ins',
    'block.emp.feat3.rest': ' that take less than 10 seconds.',
    'block.emp.link': 'See the employee flow',

    'block.hr.eyebrow': 'For HR',
    'block.hr.title': 'Real-time visibility, before things escalate.',
    'block.hr.body':
      'Climate pulse by team, early alerts with context, and actionable metrics. Make decisions based on real signals — not quarterly surveys.',
    'block.hr.feat1.lead': 'Per-team climate alerts',
    'block.hr.feat1.rest': ' with risk classification and recommendations.',
    'block.hr.feat2.lead': 'Turnover trends',
    'block.hr.feat2.rest': ' correlated with key business events.',
    'block.hr.feat3.lead': 'Executive reports',
    'block.hr.feat3.rest': ' exportable, ready for the culture committee.',
    'block.hr.link': 'See the HR dashboard',

    'block.ai.eyebrow': 'AI Assistant',
    'block.ai.title': '24/7 support for the moments no one else is around.',
    'block.ai.body':
      'An AI trained in workplace wellbeing that listens, contains, and guides. It catches early warning signals and connects to HR only if the person authorises it.',
    'block.ai.feat1.lead': 'Containing conversation',
    'block.ai.feat1.rest':
      ' with an active-listening framework — not cold recipes.',
    'block.ai.feat2.lead': 'Human escalation',
    'block.ai.feat2.rest': ' automatic on signals of critical risk.',
    'block.ai.feat3.lead': 'Private by design',
    'block.ai.feat3.rest':
      ': the conversation never reaches HR without consent.',
    'block.ai.link': 'Try the demo conversation',

    'viz.emp.author': 'Anonymous · Design',
    'viz.emp.meta': '2 hours ago · ID #4F2A',
    'viz.emp.chip': 'Anonymous',
    'viz.emp.report.title': 'Burnout after the launch',
    'viz.emp.report.body':
      '"We have had three weeks of weekend sprints and nobody has mentioned comp time. I worry the team will burn out before Q3."',
    'viz.emp.risk': 'Medium risk',
    'viz.emp.forum.title': 'Forum · Wellbeing',
    'viz.emp.thread1.title': 'Should we try a no-meetings week?',
    'viz.emp.thread1.meta': '23 replies · active',
    'viz.emp.thread2.title': 'Tips for digital disconnection',
    'viz.emp.thread2.meta': '11 replies · 1d',

    'viz.hr.title': 'Climate pulse — this week',
    'viz.hr.range': 'Last 7 days',
    'viz.hr.stat.enps': 'eNPS',
    'viz.hr.stat.turnover': 'Turnover 30d',
    'viz.hr.stat.reports': 'Reports',
    'viz.hr.stat.mood': 'Average mood',
    'viz.hr.chart.title': 'Climate by team',
    'viz.hr.chart.sub': '% positive',
    'viz.hr.alert.title': 'Alert · Design',
    'viz.hr.alert.sub': 'Sustained overload (3 wks)',

    'viz.ai.title': 'Ely · SoftWork Assistant',
    'viz.ai.status': 'Online · reply in 2s',
    'viz.ai.input': 'Type how you feel…',
    'viz.ai.side.title': 'Private by design',
    'viz.ai.side.body': 'HR sees this only if you allow it',
    'chat.user1': 'My manager changed priorities 3 times this week.',
    'chat.bot1':
      "I hear you. That sounds exhausting 💙. Want to explore how to raise this without exposing yourself, or would you rather we open an anonymous report?",
    'chat.user2': 'Raise it — but without making them angry.',
    'chat.bot2':
      'I can suggest a 3-sentence script that focuses on impact, not blame. Want to look at it together?',

    'cta.title': 'Show your team you actually listen.',
    'cta.body':
      'Book a 20-minute demo. We show you how SoftWork adapts to your culture and leave you a free 30-day pilot.',
    'cta.demo': 'Request Demo',
    'cta.sales': 'Talk to sales',

    'footer.tagline':
      'The safe bridge between your team and HR. Building cultures where every voice matters.',
    'footer.col.product': 'Product',
    'footer.col.company': 'Company',
    'footer.col.legal': 'Legal',
    'footer.product.benefits': 'Benefits',
    'footer.product.how': 'How it works',
    'footer.product.integrations': 'Integrations',
    'footer.product.pricing': 'Pricing',
    'footer.product.news': 'Changelog',
    'footer.company.about': 'About Elysium',
    'footer.company.cases': 'Case studies',
    'footer.company.contact': 'Contact',
    'footer.company.careers': 'Careers',
    'footer.legal.privacy': 'Privacy',
    'footer.legal.terms': 'Terms',
    'footer.legal.security': 'Security',
    'footer.legal.dpa': 'Data processing agreement',
    'footer.legal.anonymity': 'Anonymity policy',
    'footer.copy': '© 2026 SoftWork. All rights reserved.',
    'footer.by.prefix': 'Crafted with care by',

    'meta.title': 'SoftWork — Workplace climate and wellbeing, truly heard.',
    'meta.description':
      'The safe bridge between your team and HR. Anonymous reports, internal forums, 24/7 AI support, and analytical dashboards.',

    'lang.label': 'Language',

    // ─────────────────────────────────────────────────────────────────────────
    //  How-it-works page (`cf.*`)
    // ─────────────────────────────────────────────────────────────────────────
    'cf.meta.title': 'SoftWork — How it works, step by step.',
    'cf.meta.description':
      'Three flows that connect employees, AI, and HR: anonymous reporting, the Ely assistant, and an actionable dashboard.',

    'cf.hero.eyebrow': 'How it works, step by step',
    'cf.hero.title.html':
      'Three flows. One platform that <em class="gradient-em">connects people and decisions</em>.',
    'cf.hero.body':
      'We show you exactly what employees and HR see, in order: how a report is filed, how Ely listens, and how the culture team turns real data into decisions.',
    'cf.tab.report': 'Anonymous report',
    'cf.tab.ai': 'Ely AI',
    'cf.tab.dashboard': 'HR Dashboard',

    'cf.s1.eyebrow': 'Screen 1 · Employee',
    'cf.s1.title': 'Report and chat — without fear of being identified.',
    'cf.s1.body':
      'Employees can raise an alert or open an internal forum under a protected identity, with a private ticket they can follow up on.',
    'cf.s1.step1.title': 'Pick a category',
    'cf.s1.step1.desc':
      'Choose the type of report: climate, overload, leadership, or something more sensitive.',
    'cf.s1.step2.title': 'Tell us what is going on',
    'cf.s1.step2.desc':
      'Free-form text. No names, no metadata. Privacy holds even if the person identifies themselves.',
    'cf.s1.step3.title': 'Send with a protected identity',
    'cf.s1.step3.desc':
      'The system separates the signature from the content and issues a ticket only you can look up.',
    'cf.s1.step4.title': 'HR acts, you follow along',
    'cf.s1.step4.desc':
      'You get status updates from the ticket — without exposing your identity.',

    'cf.report.topbar.new': 'New report',
    'cf.report.topbar.sent': 'Report sent',
    'cf.report.chip': 'Anonymous',
    'cf.report.label.cat': 'Category',
    'cf.report.cat.climate': 'Workplace climate',
    'cf.report.cat.overload': 'Overload',
    'cf.report.cat.leadership': 'Leadership',
    'cf.report.cat.harassment': 'Harassment',
    'cf.report.cat.other': 'Other',
    'cf.report.label.what': 'Tell us what is going on',
    'cf.report.placeholder': 'Write here what you want to share…',
    'cf.report.detail':
      "The Design team has had three weeks of weekend sprints. Nobody has mentioned comp time and the fatigue shows up in standups.",
    'cf.report.label.privacy': 'Privacy',
    'cf.report.privacy.title': 'Identity protected',
    'cf.report.privacy.sub': 'No linking metadata',
    'cf.report.submit': 'Send report',
    'cf.report.submitting': 'Sending…',
    'cf.report.confirm.title': 'Report sent',
    'cf.report.confirm.body':
      'HR will see it without your identity. You can track its status with your ticket.',
    'cf.report.ticket': 'TICKET · #4F2A-9C',
    'cf.report.forum.title': 'Forum · Wellbeing',
    'cf.report.forum.t1.title': 'Should we try a no-meetings week?',
    'cf.report.forum.t1.meta': '23 replies · active now',
    'cf.report.forum.t2.title': 'Tips for digital disconnection',
    'cf.report.forum.t2.meta': '11 replies · 1 day',

    'cf.s2.eyebrow': 'Screen 2 · AI Assistant',
    'cf.s2.title': 'Ely — 24/7 support that listens before answering.',
    'cf.s2.body':
      'An empathetic AI, trained in workplace wellbeing, available for the moments no one else is. Private by design.',
    'cf.s2.step1.title': 'Containing conversation',
    'cf.s2.step1.desc':
      'Ely listens first, no recipes. Active-listening framework trained with organisational psychologists.',
    'cf.s2.step2.title': 'Signal detection',
    'cf.s2.step2.desc':
      'The AI recognises early indicators — exhaustion, isolation, negative ideation — and adjusts its tone.',
    'cf.s2.step3.title': 'Actionable suggestions',
    'cf.s2.step3.desc':
      'Suggests a next step (a script, an exercise, a report) and lets the person decide.',
    'cf.s2.step4.title': 'Human escalation when critical',
    'cf.s2.step4.desc':
      'On high risk it loops in HR or a clinician — always with explicit consent.',

    'cf.ai.name': 'Ely',
    'cf.ai.status': 'Online · private',
    'cf.ai.day': 'Today · 22:14',
    'cf.ai.user1': "I have not slept well for 2 weeks. I keep thinking about work.",
    'cf.ai.bot1':
      'I hear you. It is very valid to feel this way, especially when there is no one to talk to at this hour 💙. Want to tell me a bit more?',
    'cf.ai.user2': 'My manager changed priorities 3 times this week.',
    'cf.ai.bot2':
      'That sounds exhausting. Want to explore how to raise it, or would you rather try a regulation exercise tonight?',
    'cf.ai.sugg1': 'Raise it carefully',
    'cf.ai.sugg2': 'Regulation exercise',
    'cf.ai.sugg3': 'Open anonymous report',
    'cf.ai.input': 'Write to Ely…',
    'cf.ai.detect.title': 'Signals detected',
    'cf.ai.detect.row1.label': 'Irregular sleep',
    'cf.ai.detect.row1.value': 'high',
    'cf.ai.detect.row2.label': 'Overload',
    'cf.ai.detect.row2.value': 'medium',
    'cf.ai.detect.row3.label': 'Negative ideation',
    'cf.ai.detect.row3.value': 'low',
    'cf.ai.privacy.title': 'Privacy',
    'cf.ai.privacy.row1.label': 'E2E encryption',
    'cf.ai.privacy.row2.label': 'Visible to HR',
    'cf.ai.privacy.row2.value': 'No',
    'cf.ai.privacy.row3.label': 'Retention',
    'cf.ai.privacy.row3.value': '30 days',

    'cf.s3.eyebrow': 'Screen 3 · HR',
    'cf.s3.title': 'The mobile app that turns signals into decisions.',
    'cf.s3.body':
      'A native app exclusively for HR (Flutter): key climate metrics, actionable alerts, and patterns the AI surfaces — all in your pocket.',
    'cf.s3.step1.title': 'Live pulse — not a quarterly survey',
    'cf.s3.step1.desc':
      'Mood, eNPS, turnover, and reports in a single view, refreshed every minute.',
    'cf.s3.step2.title': 'Alerts with context',
    'cf.s3.step2.desc':
      'The AI correlates overload, forums, and turnover to anticipate per-team risk.',
    'cf.s3.step3.title': 'Decide and delegate',
    'cf.s3.step3.desc':
      'Assign actions to leaders straight from the alert, with follow-up inside the platform.',

    'cf.hr.greeting': 'HR · M. Aguirre',
    'cf.hr.title': 'Climate pulse',
    'cf.hr.filter.7d': '7d',
    'cf.hr.filter.30d': '30d',
    'cf.hr.filter.q': 'Qtr',
    'cf.hr.filter.y': 'Year',
    'cf.hr.kpi.enps': 'eNPS',
    'cf.hr.kpi.mood': 'Mood',
    'cf.hr.kpi.turnover': 'Turnover',
    'cf.hr.kpi.reports': 'Reports',
    'cf.hr.card.mood.title': 'Mood — 30 days',
    'cf.hr.alerts.title': 'Active alerts',
    'cf.hr.alerts.new': '3 new',
    'cf.hr.alert1.title': 'Design · sustained overload',
    'cf.hr.alert1.sub': '3 weeks of weekend sprints',
    'cf.hr.alert2.title': 'Ops · mood drop -1.2',
    'cf.hr.alert2.sub': 'After reorg on Apr 12',
    'cf.hr.alert3.title': 'AI · emerging pattern',
    'cf.hr.alert3.sub': '"Burnout" +34% month over month',
    'cf.hr.team.title': 'Climate by team',
    'cf.hr.team.pm': 'PM',
    'cf.hr.team.mkt': 'Marketing',
    'cf.hr.team.eng': 'Engineering',
    'cf.hr.team.sales': 'Sales',
    'cf.hr.team.design': 'Design',
    'cf.hr.tab.pulse': 'Pulse',
    'cf.hr.tab.alerts': 'Alerts',
    'cf.hr.tab.reports': 'Reports',
    'cf.hr.tab.teams': 'Teams',

    'cf.cta.title': 'See SoftWork in your own organisation.',
    'cf.cta.body':
      'A 20-minute demo walks you through the 3 flows with real data from companies like yours. No commitment, no install.',
    'cf.cta.demo': 'Request demo',
    'cf.cta.back': 'Back to home',

    'demo.meta.title': 'Request a demo — mobile apps in development',
    'demo.meta.description':
      "SoftWork's mobile apps are still under construction. In the meantime, let's talk.",

    'demo.eyebrow': 'Coming soon · under construction',
    'demo.title.html':
      'The mobile apps are <em class="gradient-em">still in the workshop</em>.',
    'demo.body':
      "We're polishing iOS, Android, and the HR panel. Demo bookings open the moment all three sides are ready to be shown live — not in marketing mockups.",
    'demo.cta.sales': 'Talk to sales',
    'demo.cta.back': 'Back to home',

    'demo.list.title': "What we're polishing",
    'demo.list.1.lead': 'Employee app · iOS and Android',
    'demo.list.1.rest':
      ' — anonymous reports, forums, and check-ins in Android and Jetpack Compose.',
    'demo.list.2.lead': 'HR app · pulse in your pocket',
    'demo.list.2.rest':
      ' — KPIs, alerts with context, and delegated actions, in Flutter.',
    'demo.list.3.lead': 'Ely · containing AI',
    'demo.list.3.rest':
      ' — privacy-by-design active listening, calibrated with organisational psychologists.',

    'demo.phone.tag': 'BUILD · alpha',
    'demo.phone.title': 'Coming soon',
    'demo.phone.body':
      "We're cooking something good. We'll let you know when it's ready.",
    'demo.phone.progress.label': 'Progress',
    'demo.phone.progress.value': '78%',
    'demo.phone.eta': 'Release · Q3',
  },
} as const;

/** All translation keys. Derived from the default locale so missing translations
 *  in another locale will fall back, but adding a new key requires updating es. */
export type UIKey = keyof (typeof ui)[typeof defaultLang];
