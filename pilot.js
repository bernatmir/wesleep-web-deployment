// Página del piloto — textos (ca / es / en) y comportamiento
const CALENDLY_URL = 'https://calendly.com/bernatmir3/30min';

const translations = {
  ca: {
    metaTitle: 'WeSleep — Pilot gratuït de 30 dies',
    metaDescription: 'Prova WeSleep gratis durant 30 dies amb el teu equip o els teus pacients. Sense compromís.',
    home_button: 'Pàgina principal', cta_short: 'Reservar demo',
    eyebrow: 'Pilot gratuït de 30 dies',
    hero_title_1: 'Prova WeSleep 30 dies',
    hero_title_2: 'amb la teva gent.',
    hero_subtitle: "Un pilot amb el teu equip o amb un grup de pacients, amb el seu rellotge de sempre. Sense cost, sense compromís i amb l'equip fundador al teu costat.",
    cta: 'Reserva la teva demo', cta_secondary: "Veure formes d'implementació ›",
    badge_1: 'Sense targeta', badge_2: 'Demo de 30 minuts', badge_3: 'Android · Health Connect',
    steps_eyebrow: 'Com funciona el pilot', steps_title: 'De la demo als resultats, en tres passos.',
    step_1_t: 'Demo de 30 minuts', step_1_d: 'Et mostrem WeSleep funcionant amb un rellotge real i parlem del que necessites.',
    step_2_t: 'Ho posem en marxa', step_2_d: 'Triem la implementació: app de marca blanca o via API. Els usuaris la configuren en 10 minuts.',
    step_3_t: '30 dies i resultats', step_3_d: 'Revisem junts les dades: quants matins es van despertar descansats i quants en son lleuger.',
    benefit_1_t: 'Sense cost', benefit_1: 'Els 30 dies del pilot són gratuïts, sense dades de pagament.',
    benefit_2_t: 'Producte acabat', benefit_2: 'App Android i API funcionant avui, no un prototip.',
    benefit_3_t: 'Equip fundador', benefit_3: 'Suport directe de les persones que han construït WeSleep.',
    benefit_4_t: 'Privacitat', benefit_4: 'Usuaris anònims, servidors a la UE i dades esborrables (RGPD).',
    reserve_eyebrow: 'Demo', reserve_title: 'Reserva la teva demo.',
    reserve_text: 'Parlem 30 minuts, et mostrem WeSleep en directe i veiem quina implementació encaixa amb la teva organització.',
    reserve_b1: 'WeSleep funcionant amb un rellotge real', reserve_b2: 'Marca blanca o API: què et convé', reserve_b3: 'Com seria el pilot amb la teva gent',
    reserve_fallback: 'Obrir el calendari en una pestanya nova ›',
    credibility_eyebrow: 'Per què WeSleep', credibility_title: 'Recerca de veritat. Producte de veritat.',
    credibility_text: "Gairebé 2 anys d'R+D en predicció personalitzada del son. Avui és una app Android i una API en funcionament, provades amb dades reals de rellotge.",
    faq_title: 'Preguntes freqüents',
    qa1_q: 'Què passa quan acabin els 30 dies?', qa1_a: 'Decideixes si vols continuar com a client. Sense permanència ni compromís.',
    qa2_q: 'Quant triga a estar en marxa?', qa2_a: "Amb la marca blanca, pocs dies. Via API depèn de la teva app; l'API és petita i està documentada.",
    qa3_q: 'Necessito targeta de crèdit per començar el pilot?', qa3_a: 'No. El pilot és gratuït i no et demanem dades de pagament.',
    qa4_q: 'Amb quins wearables funciona?', qa4_a: 'Amb qualsevol rellotge que desi les fases del son a Health Connect (Android). Recomanat: Samsung Galaxy Watch. Provat amb dades reals: Xiaomi Mi Band.',
    qa5_q: 'Funciona a iPhone?', qa5_a: "Ara mateix l'app és per a Android. L'iPhone està en el full de ruta.",
    qa6_q: 'És un producte sanitari?', qa6_a: 'No. WeSleep ofereix valors orientatius de benestar i no fa diagnòstics.',
    footer_copyright: '© 2026 WeSleep. Tots els drets reservats.'
  },
  es: {
    metaTitle: 'WeSleep — Piloto gratuito de 30 días',
    metaDescription: 'Prueba WeSleep gratis durante 30 días con tu equipo o tus pacientes. Sin compromiso.',
    home_button: 'Página principal', cta_short: 'Reservar demo',
    eyebrow: 'Piloto gratuito de 30 días',
    hero_title_1: 'Prueba WeSleep 30 días',
    hero_title_2: 'con tu gente.',
    hero_subtitle: 'Un piloto con tu equipo o con un grupo de pacientes, con su reloj de siempre. Sin coste, sin compromiso y con el equipo fundador a tu lado.',
    cta: 'Reserva tu demo', cta_secondary: 'Ver formas de implementación ›',
    badge_1: 'Sin tarjeta', badge_2: 'Demo de 30 minutos', badge_3: 'Android · Health Connect',
    steps_eyebrow: 'Cómo funciona el piloto', steps_title: 'De la demo a los resultados, en tres pasos.',
    step_1_t: 'Demo de 30 minutos', step_1_d: 'Te enseñamos WeSleep funcionando con un reloj real y hablamos de lo que necesitas.',
    step_2_t: 'Lo ponemos en marcha', step_2_d: 'Elegimos la implementación: app de marca blanca o vía API. Los usuarios la configuran en 10 minutos.',
    step_3_t: '30 días y resultados', step_3_d: 'Revisamos juntos los datos: cuántas mañanas se despertaron descansados y cuántas en sueño ligero.',
    benefit_1_t: 'Sin coste', benefit_1: 'Los 30 días del piloto son gratuitos, sin datos de pago.',
    benefit_2_t: 'Producto terminado', benefit_2: 'App Android y API funcionando hoy, no un prototipo.',
    benefit_3_t: 'Equipo fundador', benefit_3: 'Soporte directo de las personas que han construido WeSleep.',
    benefit_4_t: 'Privacidad', benefit_4: 'Usuarios anónimos, servidores en la UE y datos borrables (RGPD).',
    reserve_eyebrow: 'Demo', reserve_title: 'Reserva tu demo.',
    reserve_text: 'Hablamos 30 minutos, te enseñamos WeSleep en directo y vemos qué implementación encaja con tu organización.',
    reserve_b1: 'WeSleep funcionando con un reloj real', reserve_b2: 'Marca blanca o API: qué te conviene', reserve_b3: 'Cómo sería el piloto con tu gente',
    reserve_fallback: 'Abrir el calendario en una pestaña nueva ›',
    credibility_eyebrow: 'Por qué WeSleep', credibility_title: 'Investigación real. Producto real.',
    credibility_text: 'Casi 2 años de I+D en predicción personalizada del sueño. Hoy es una app Android y una API en funcionamiento, probadas con datos reales de reloj.',
    faq_title: 'Preguntas frecuentes',
    qa1_q: '¿Qué pasa cuando terminen los 30 días?', qa1_a: 'Decides si quieres continuar como cliente. Sin permanencia ni compromiso.',
    qa2_q: '¿Cuánto tarda en estar en marcha?', qa2_a: 'Con la marca blanca, pocos días. Vía API depende de tu app; la API es pequeña y está documentada.',
    qa3_q: '¿Necesito tarjeta de crédito para empezar el piloto?', qa3_a: 'No. El piloto es gratuito y no te pedimos datos de pago.',
    qa4_q: '¿Con qué wearables funciona?', qa4_a: 'Con cualquier reloj que guarde las fases de sueño en Health Connect (Android). Recomendado: Samsung Galaxy Watch. Probado con datos reales: Xiaomi Mi Band.',
    qa5_q: '¿Funciona en iPhone?', qa5_a: 'Ahora mismo la app es para Android. iPhone está en la hoja de ruta.',
    qa6_q: '¿Es un producto sanitario?', qa6_a: 'No. WeSleep ofrece valores orientativos de bienestar y no hace diagnósticos.',
    footer_copyright: '© 2026 WeSleep. Todos los derechos reservados.'
  },
  en: {
    metaTitle: 'WeSleep — 30-day free pilot',
    metaDescription: 'Try WeSleep free for 30 days with your team or your patients. No commitment.',
    home_button: 'Main page', cta_short: 'Book a demo',
    eyebrow: '30-day free pilot',
    hero_title_1: 'Try WeSleep for 30 days',
    hero_title_2: 'with your people.',
    hero_subtitle: 'A pilot with your team or a group of patients, using the watch they already wear. No cost, no commitment, with the founding team by your side.',
    cta: 'Book your demo', cta_secondary: 'See implementation options ›',
    badge_1: 'No card needed', badge_2: '30-minute demo', badge_3: 'Android · Health Connect',
    steps_eyebrow: 'How the pilot works', steps_title: 'From demo to results, in three steps.',
    step_1_t: '30-minute demo', step_1_d: 'We show you WeSleep working on a real watch and talk about what you need.',
    step_2_t: 'We get it running', step_2_d: 'We choose the implementation: white-label app or API. Users set it up in 10 minutes.',
    step_3_t: '30 days and results', step_3_d: 'We review the data together: how many mornings people woke up rested and how many in light sleep.',
    benefit_1_t: 'No cost', benefit_1: 'The 30 days of the pilot are free, with no payment details.',
    benefit_2_t: 'Finished product', benefit_2: 'Android app and API working today, not a prototype.',
    benefit_3_t: 'Founding team', benefit_3: 'Direct support from the people who built WeSleep.',
    benefit_4_t: 'Privacy', benefit_4: 'Anonymous users, EU servers and erasable data (GDPR).',
    reserve_eyebrow: 'Demo', reserve_title: 'Book your demo.',
    reserve_text: 'We talk for 30 minutes, show you WeSleep live and see which implementation fits your organisation.',
    reserve_b1: 'WeSleep working on a real watch', reserve_b2: 'White-label or API: what suits you', reserve_b3: 'What the pilot would look like with your people',
    reserve_fallback: 'Open the calendar in a new tab ›',
    credibility_eyebrow: 'Why WeSleep', credibility_title: 'Real research. Real product.',
    credibility_text: 'Nearly 2 years of R&D in personalised sleep prediction. Today it is a working Android app and API, tested with real watch data.',
    faq_title: 'Frequently asked questions',
    qa1_q: 'What happens after the 30 days?', qa1_a: 'You decide whether to continue as a customer. No lock-in and no commitment.',
    qa2_q: 'How long does it take to get running?', qa2_a: 'With white-label, a few days. Via API it depends on your app; the API is small and documented.',
    qa3_q: 'Do I need a credit card to start the pilot?', qa3_a: 'No. The pilot is free and we do not ask for payment details.',
    qa4_q: 'Which wearables does it work with?', qa4_a: 'Any watch that saves sleep stages to Health Connect (Android). Recommended: Samsung Galaxy Watch. Tested with real data: Xiaomi Mi Band.',
    qa5_q: 'Does it work on iPhone?', qa5_a: 'Right now the app is for Android. iPhone is on the roadmap.',
    qa6_q: 'Is it a medical device?', qa6_a: 'No. WeSleep provides guidance wellness values and does not make diagnoses.',
    footer_copyright: '© 2026 WeSleep. All rights reserved.'
  }
};

function getLanguage() {
  const requested = new URLSearchParams(window.location.search).get('lang');
  if (translations[requested]) return requested;
  const path = window.location.pathname || '/';
  if (path.startsWith('/en/')) return 'en';
  if (path.startsWith('/es/')) return 'es';
  try {
    const stored = localStorage.getItem('selectedLanguage');
    if (translations[stored]) return stored;
  } catch (e) { /* sin almacenamiento */ }
  return 'ca';
}

function applyTranslations(lang) {
  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (value) el.textContent = value;
  });
  document.documentElement.lang = lang;
  document.title = dict.metaTitle;
  document.querySelector('meta[name="description"]')?.setAttribute('content', dict.metaDescription);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', dict.metaTitle);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', dict.metaDescription);
  document.querySelectorAll('.pilot-lang a').forEach((link) => {
    link.classList.toggle('active', link.dataset.lang === lang);
    link.setAttribute('href', `pilot.html?lang=${link.dataset.lang}`);
  });
  try { localStorage.setItem('selectedLanguage', lang); } catch (e) { /* sin almacenamiento */ }
}

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(getLanguage());

  const navbar = document.querySelector('.navbar');
  const onScroll = () => navbar?.classList.toggle('scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Calendly: el script asíncrono monta solo el widget; si ya está cargado, lo montamos aquí
  const widget = document.querySelector('.calendly-inline-widget');
  if (widget && window.Calendly && !widget.querySelector('iframe')) {
    window.Calendly.initInlineWidget({ url: CALENDLY_URL, parentElement: widget, prefill: {}, utm: {} });
  }
});
