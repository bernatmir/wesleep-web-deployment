// WeSleep web — textos (en / es / ca) y comportamiento
const translations = {
    en: {
        meta_title: 'WeSleep — Smart Alarm technology for health and wellness platforms',
        nav_app: 'The app', nav_how: 'How it works', nav_technology: 'Technology', nav_wearables: 'Wearables',
        nav_resources: 'Resources', nav_resources_label: 'B2B document (PDF)', nav_api_docs: 'API reference',
        nav_pilot: '30-day pilot', nav_cta: 'Book a demo',
        hero_eyebrow: 'Smart Alarm · API + Android app',
        hero_title_1: 'Wake up at the best moment',
        hero_title_2: 'of your sleep.',
        hero_subtitle: 'WeSleep reads sleep stages from the watch and rings in light sleep, up to 30 minutes before the chosen time. Proprietary technology, ready to integrate into your platform — or to hand to your patients today with our white-label app.',
        hero_cta_primary: 'Book a demo', hero_cta_secondary: 'See the app ›',
        hero_note: 'Android app available now · Galaxy Watch, Mi Band and Health Connect wearables',
        wearables_title: 'Works with the watch your users already wear',
        wearables_note: 'Compatible with any wearable whose app saves sleep stages to Health Connect. Recommended: Samsung Galaxy Watch. Tested with real data: Xiaomi Mi Band.',
        fig_1: 'smart window before the alarm time', fig_2: 'nights of history behind each prediction',
        fig_3: 'nights with data to start learning', fig_4: 'to set up, then it runs on its own',
        sleep_education_eyebrow: 'The foundation of wellbeing',
        sleep_education_title: 'Sleep well. Live better.',
        sleep_education_intro: 'Sleep is not time lost. It is when the body restores, the mind processes the day and the foundations of tomorrow are built.',
        cycle_title: 'A night is a series of cycles',
        cycle_desc: 'We go through 4 to 6 cycles of about 90 minutes. Each one moves between light, deep and REM sleep. Waking up in deep sleep feels heavy; waking up in light sleep feels natural.',
        stage_light: 'Light', stage_rem: 'REM', stage_deep: 'Deep',
        chart_window: 'Smart window', chart_wake: 'WeSleep wakes you here',
        sleep_benefits_title: 'What quality sleep gives us',
        sleep_benefits_desc: 'Consistent, restorative sleep supports the systems that keep people engaged, focused and resilient.',
        sleep_benefit_1: 'Better energy, focus and decision-making',
        sleep_benefit_2: 'More stable mood and emotional balance',
        sleep_benefit_3: 'Recovery that helps the body adapt and perform',
        sleep_challenges_title: 'When sleep loses its rhythm',
        sleep_challenges_desc: 'Poor sleep can affect far more than the morning. Repeated disruption makes everyday performance and recovery harder.',
        sleep_challenge_1: 'Morning fatigue and slower mental clarity',
        sleep_challenge_2: 'Lower resilience to stress and daily demands',
        sleep_challenge_3: 'Less consistent energy throughout the day',
        sleep_timing_title: 'Waking up at the right moment matters',
        sleep_timing_desc: 'Waking during deep sleep causes sleep inertia: heaviness and disorientation that can last a while. Understanding each person\'s sleep pattern finds a more natural moment to wake.',
        how_eyebrow: 'How it works', how_title: 'Set it once. It works every night.',
        how_1_title: 'The watch measures sleep',
        how_1_desc: 'The user sleeps with their watch on. It records light, deep and REM sleep and saves the night to Health Connect.',
        how_2_title: 'WeSleep learns the pattern',
        how_2_desc: 'With the last nights, the algorithm finds when that person\'s sleep is usually lightest before their alarm.',
        how_3_title: 'It wakes them at the best moment',
        how_3_desc: 'Up to 30 minutes before the chosen time. Never later. The app explains why it chose that minute.',
        app_eyebrow: 'The app', app_title: 'A finished product. Ready to use.',
        app_subtitle: 'Not a prototype: a native Android app your users can install today, with your brand if you want.',
        app_1_kicker: 'Today', app_1_title: 'The alarm, explained.',
        app_1_desc: 'A large clock shows when it will ring and the 30-minute window it can use. One switch turns the Smart Alarm on or off, with the days of the week just below.',
        app_1_b1: 'Recommended bedtime for tonight, based on their own cycles',
        app_1_b2: 'Gentle volume that rises over 30 seconds',
        app_1_b3: 'Full screen over the lock screen, with a 9-minute snooze',
        app_2_kicker: 'Your night', app_2_title: 'Every night, in one look.',
        app_2_desc: 'A score from 0 to 100, time asleep and the story of the night: each cycle, each stage and the exact moment the alarm rang.',
        app_2_b1: 'Light, deep and REM compared with adult reference values',
        app_2_b2: 'Personal tips written in plain language',
        app_2_b3: 'Guidance values, never a medical diagnosis',
        app_3_kicker: 'Every morning', app_3_title: 'How did you wake up?',
        app_3_desc: 'After the alarm, WeSleep tells the user when and why it woke them, then asks how they feel with a single tap. Then it checks against the watch whether they really were in light sleep.',
        app_3_b1: 'Streaks of mornings woken at the best moment',
        app_3_b2: 'A card to share their morning',
        app_3_b3: 'A daily habit that keeps users coming back',
        app_4_kicker: 'Your week', app_4_title: 'Trends, not just nights.',
        app_4_desc: 'A weekly summary with averages, the evolution of hours slept and how regular bedtime is. What really changes how people rest.',
        app_4_b1: 'Average score, efficiency, deep and REM sleep',
        app_4_b2: 'Mornings rested vs. tired',
        app_4_b3: 'Available in Spanish and Catalan',
        rel_eyebrow: 'Reliability', rel_title: 'An alarm that always rings.',
        rel_desc: 'WeSleep predicts instead of measuring live: the alarm is set before going to sleep, from the learned pattern. It does not depend on the watch sending data during the night.',
        rel_1_t: 'Rings without internet', rel_1_d: 'Even if the watch runs out of battery or the server does not respond.',
        rel_2_t: 'Never later than the chosen time', rel_2_d: 'Without enough data, it rings exactly at the target time.',
        rel_3_t: 'System alarm priority', rel_3_d: 'Rescheduled after restarts, time changes and updates.',
        rel_4_t: 'No accounts or passwords', rel_4_d: 'Anonymous sign-up. Users can delete all their data from the app.',
        tech_eyebrow: 'Technology', tech_title: 'The engine, ready to integrate.',
        tech_subtitle: 'The app is the visible part. Underneath is a proprietary algorithm exposed through a REST API, so you can put it inside your own product.',
        flow_1: 'Wearable', flow_2: 'Android health store', flow_3: 'WeSleep app or yours', flow_3s: 'Reads the nights', flow_4: 'Optimal wake-up time',
        copy: 'Copy', copied: 'Copied',
        tech_1_t: 'A small, stable API',
        tech_1_d: 'Register a user, upload sleep stages, get the optimal time, insights and morning check-ins. JSON over HTTPS with automatic OpenAPI documentation.',
        tech_2_t: 'Privacy by design',
        tech_2_d: 'Anonymous users, a 256-bit key per user stored only as a hash, servers in the EU and a single call to erase everything (GDPR).',
        tech_3_t: 'Explainable, not a black box',
        tech_3_d: 'Every prediction comes with its reason. Scores and tips are deterministic and do not issue diagnoses.',
        biz_eyebrow: 'For organisations', biz_title: 'Two ways to offer WeSleep.',
        biz_subtitle: 'For sleep and wellness clinics, health insurers and wellness platforms that want a daily, useful touchpoint with their people.',
        biz_1_tag: 'Fastest', biz_1_t: 'White-label app',
        biz_1_d: 'The WeSleep app with your name, logo and colours. Your patients install it and start in 10 minutes. Nothing to build.',
        biz_1_b1: 'Ready in days', biz_1_b2: 'Installation guide for end users', biz_1_b3: 'Updates and support included',
        biz_2_tag: 'Most flexible', biz_2_t: 'API for your platform',
        biz_2_d: 'Add the Smart Alarm and sleep insights to the app you already have. You own the experience; we provide the engine.',
        biz_2_b1: 'Technical documentation and examples', biz_2_b2: 'Integration in days, not months', biz_2_b3: 'Direct access to the founding team',
        pilot_t: 'Try it free for 30 days.', pilot_d: 'A pilot with your team or a group of patients. No commitment and no card.', pilot_cta: 'See the pilot',
        lead_eyebrow: 'Free guide', lead_title: 'A smarter way to improve member engagement.',
        lead_description: 'Get our practical B2B guide for free — just share your email to unlock it.',
        lead_benefit_1: 'Increase daily engagement', lead_benefit_2: 'Strengthen preventive health programmes', lead_benefit_3: 'Turn sleep insights into product value',
        lead_proof: 'Based on 2 years of R&D in personalised sleep prediction.',
        lead_badge: 'Free PDF', lead_card_title: 'Download the guide', lead_card_description: 'Choose your sector and enter your email.',
        lead_sector_label: 'Your sector', lead_sector_placeholder: 'Select your sector',
        lead_sector_wellness: 'B2B Wellness', lead_sector_private: 'B2B Private company', lead_sector_b2c: 'B2C',
        lead_email_label: 'Email address', lead_email_placeholder: 'you@company.com',
        lead_button: 'Download PDF', lead_downloading: 'Preparing...', lead_invalid_email: 'Please enter a valid email address.',
        lead_success_detail: 'Your guide has opened in a new tab.', lead_error: 'Something went wrong. Please try again in a moment.',
        lead_pdf_unavailable: 'This guide is not available yet in this language. We will email it to you soon.',
        lead_privacy: 'By downloading, you agree to receive updates about WeSleep.',
        resource_email_close: 'Close', resource_email_kicker: 'Official B2B document', resource_email_title: 'Get the B2B PDF',
        resource_email_description: 'Enter your email to receive the selected document.', resource_email_label: 'Email address',
        resource_email_privacy: 'We\'ll use your email to deliver this PDF and follow up on your request.',
        resource_email_submit: 'Continue to PDF', resource_email_loading: 'Preparing...',
        resource_email_error: 'Something went wrong. Please try again.', resource_email_unavailable: 'This document is not available yet in this language.',
        contact_eyebrow: 'Contact', contact_title: 'Let\'s talk about your patients\' sleep.',
        contact_subtitle: 'Tell us about your organisation and we will show you WeSleep working on a real watch.',
        contact_sales: 'Sales', contact_support: 'Technical support', contact_support_desc: 'Direct line to the founding team',
        contact_demo: 'Prefer a call?', contact_demo_link: 'Book 30 minutes in our calendar ›',
        form_name: 'Your name', form_email: 'Email address', form_company: 'Organisation',
        form_plan_select: 'What are you interested in?', form_plan_white: 'White-label app', form_plan_api: 'API integration', form_plan_pilot: '30-day pilot',
        form_message: 'Tell us about your needs', form_submit: 'Send message',
        contact_sending: 'Sending...', contact_sent: 'Message sent', contact_failed: 'Could not send. Try again',
        footer_description: 'Smart Alarm technology for health and wellness platforms.',
        footer_product: 'Product', footer_company: 'Company', footer_contact: 'Contact',
        footer_disclaimer: 'WeSleep is not a medical device. Scores and sleep stages are for guidance only and are not a diagnosis.',
        footer_copyright: '© 2026 WeSleep. All rights reserved.',
        nav_implementation: "Implementation",
        hero_cta_secondary: "See implementation options ›",
        biz_eyebrow: "Implementation",
        biz_title: "Two ways to implement WeSleep.",
        biz_subtitle: "Choose the implementation that fits you: our ready-made white-label app, or the API inside your own product. For sleep and wellness clinics, health insurers and wellness platforms.",
        biz_1_t: "White-label implementation",
        biz_2_t: "API implementation",
        impl_title: "Implementation in 3 steps",
        impl_1_s1: "You send us your logo, colours and app name.",
        impl_1_s2: "We deliver your branded app and the user guide.",
        impl_1_s3: "Your patients install it and connect their watch in 10 minutes.",
        impl_2_s1: "We give you access to the API and a test environment.",
        impl_2_s2: "Your app reads the nights from Health Connect and sends the sleep stages.",
        impl_2_s3: "Each night you request the optimal time and schedule the alarm.",
        pilot_d: "Start a pilot with either implementation, with your team or a group of patients. No commitment and no card.",
        form_plan_select: "Which implementation interests you?",
        form_plan_white: "White-label implementation",
        form_plan_api: "API implementation",
        tech_subtitle: "The app is the visible part. Underneath is a proprietary algorithm exposed through a REST API, so you can implement it inside your own product."
    },
    es: {
        meta_title: 'WeSleep — Tecnología Smart Alarm para plataformas de salud y bienestar',
        nav_app: 'La app', nav_how: 'Cómo funciona', nav_technology: 'Tecnología', nav_wearables: 'Wearables',
        nav_resources: 'Recursos', nav_resources_label: 'Documento B2B (PDF)', nav_api_docs: 'Referencia de la API',
        nav_pilot: 'Piloto 30 días', nav_cta: 'Reservar demo',
        hero_eyebrow: 'Smart Alarm · API + app Android',
        hero_title_1: 'Despierta en el mejor momento',
        hero_title_2: 'de tu sueño.',
        hero_subtitle: 'WeSleep lee las fases de sueño del reloj y hace sonar la alarma en sueño ligero, hasta 30 minutos antes de la hora elegida. Tecnología propia, lista para integrar en tu plataforma o para entregar hoy a tus pacientes con nuestra app de marca blanca.',
        hero_cta_primary: 'Reservar una demo', hero_cta_secondary: 'Ver la app ›',
        hero_note: 'App Android disponible · Galaxy Watch, Mi Band y relojes con Health Connect',
        wearables_title: 'Funciona con el reloj que ya llevan tus usuarios',
        wearables_note: 'Compatible con cualquier wearable cuya app guarde las fases de sueño en Health Connect. Recomendado: Samsung Galaxy Watch. Probado con datos reales: Xiaomi Mi Band.',
        fig_1: 'de ventana inteligente antes de la alarma', fig_2: 'noches de historial en cada predicción',
        fig_3: 'noches con datos para empezar a aprender', fig_4: 'de configuración; después funciona solo',
        sleep_education_eyebrow: 'La base del bienestar',
        sleep_education_title: 'Dormir bien. Vivir mejor.',
        sleep_education_intro: 'Dormir no es tiempo perdido. Es cuando el cuerpo se recupera, la mente ordena el día y se construye el mañana.',
        cycle_title: 'Una noche es una sucesión de ciclos',
        cycle_desc: 'Pasamos por 4 a 6 ciclos de unos 90 minutos. En cada uno vamos del sueño ligero al profundo y al REM. Despertar en sueño profundo deja pesadez; despertar en sueño ligero se siente natural.',
        stage_light: 'Ligero', stage_rem: 'REM', stage_deep: 'Profundo',
        chart_window: 'Ventana inteligente', chart_wake: 'WeSleep te despierta aquí',
        sleep_benefits_title: 'Lo que nos da dormir bien',
        sleep_benefits_desc: 'Un sueño regular y reparador sostiene todo lo que nos mantiene activos, centrados y resistentes.',
        sleep_benefit_1: 'Más energía, concentración y mejores decisiones',
        sleep_benefit_2: 'Un estado de ánimo más estable',
        sleep_benefit_3: 'Una recuperación que ayuda al cuerpo a adaptarse y rendir',
        sleep_challenges_title: 'Cuando el sueño pierde el ritmo',
        sleep_challenges_desc: 'Dormir mal afecta a mucho más que a la mañana. Si se repite, el rendimiento diario y la recuperación se resienten.',
        sleep_challenge_1: 'Cansancio por la mañana y mente menos clara',
        sleep_challenge_2: 'Menos resistencia al estrés del día a día',
        sleep_challenge_3: 'Energía irregular durante el día',
        sleep_timing_title: 'Despertar en el momento justo importa',
        sleep_timing_desc: 'Despertar en sueño profundo provoca inercia del sueño: pesadez y desorientación que pueden durar un buen rato. Conocer el patrón de cada persona permite encontrar un momento más natural para despertar.',
        how_eyebrow: 'Cómo funciona', how_title: 'Se configura una vez. Funciona cada noche.',
        how_1_title: 'El reloj mide el sueño',
        how_1_desc: 'La persona duerme con el reloj puesto. Este registra el sueño ligero, profundo y REM y guarda la noche en Health Connect.',
        how_2_title: 'WeSleep aprende su patrón',
        how_2_desc: 'Con las últimas noches, el algoritmo descubre cuándo suele tener el sueño más ligero antes de su alarma.',
        how_3_title: 'La despierta en el mejor momento',
        how_3_desc: 'Hasta 30 minutos antes de la hora elegida. Nunca más tarde. Y la app explica por qué ha elegido ese minuto.',
        app_eyebrow: 'La app', app_title: 'Un producto terminado. Listo para usar.',
        app_subtitle: 'No es un prototipo: es una app Android nativa que tus usuarios pueden instalar hoy, con tu marca si lo prefieres.',
        app_1_kicker: 'Hoy', app_1_title: 'La alarma, explicada.',
        app_1_desc: 'Un gran reloj muestra cuándo sonará y la ventana de 30 minutos que puede usar. Un interruptor activa la Smart Alarm y, debajo, los días de la semana.',
        app_1_b1: 'Hora recomendada para acostarse esta noche, según sus propios ciclos',
        app_1_b2: 'Volumen suave que sube durante 30 segundos',
        app_1_b3: 'Pantalla completa sobre el bloqueo, con posponer 9 minutos',
        app_2_kicker: 'Tu noche', app_2_title: 'Cada noche, de un vistazo.',
        app_2_desc: 'Una puntuación de 0 a 100, el tiempo dormido y la historia de la noche: cada ciclo, cada fase y el minuto exacto en que sonó la alarma.',
        app_2_b1: 'Ligero, profundo y REM comparados con valores de referencia',
        app_2_b2: 'Consejos personales en lenguaje sencillo',
        app_2_b3: 'Valores orientativos, nunca un diagnóstico médico',
        app_3_kicker: 'Cada mañana', app_3_title: '¿Cómo te has despertado?',
        app_3_desc: 'Tras la alarma, WeSleep dice a qué hora y por qué ha despertado a la persona y le pregunta cómo se siente con un solo toque. Después comprueba con el reloj si de verdad estaba en sueño ligero.',
        app_3_b1: 'Rachas de mañanas despertando en el mejor momento',
        app_3_b2: 'Una tarjeta para compartir su mañana',
        app_3_b3: 'Un hábito diario que hace volver a la app',
        app_4_kicker: 'Tu semana', app_4_title: 'Tendencias, no solo noches.',
        app_4_desc: 'Un resumen semanal con medias, la evolución de las horas dormidas y la regularidad al acostarse. Lo que de verdad cambia cómo descansa la gente.',
        app_4_b1: 'Puntuación media, eficiencia, sueño profundo y REM',
        app_4_b2: 'Mañanas descansado frente a cansado',
        app_4_b3: 'Disponible en castellano y catalán',
        rel_eyebrow: 'Fiabilidad', rel_title: 'Una alarma que suena siempre.',
        rel_desc: 'WeSleep predice en lugar de medir en directo: la alarma queda programada antes de dormir, con el patrón aprendido. No depende de que el reloj envíe datos durante la noche.',
        rel_1_t: 'Suena sin internet', rel_1_d: 'Aunque el reloj se quede sin batería o el servidor no responda.',
        rel_2_t: 'Nunca después de tu hora', rel_2_d: 'Si no hay datos suficientes, suena justo a la hora objetivo.',
        rel_3_t: 'Prioridad de despertador', rel_3_d: 'Se reprograma tras reinicios, cambios de hora y actualizaciones.',
        rel_4_t: 'Sin cuentas ni contraseñas', rel_4_d: 'Registro anónimo. Cada persona puede borrar todos sus datos desde la app.',
        tech_eyebrow: 'Tecnología', tech_title: 'El motor, listo para integrar.',
        tech_subtitle: 'La app es la parte visible. Debajo hay un algoritmo propio expuesto mediante una API REST, para que lo pongas dentro de tu producto.',
        flow_1: 'Wearable', flow_2: 'Almacén de salud de Android', flow_3: 'App WeSleep o la tuya', flow_3s: 'Lee las noches', flow_4: 'Hora óptima de despertar',
        copy: 'Copiar', copied: 'Copiado',
        tech_1_t: 'Una API pequeña y estable',
        tech_1_d: 'Registrar un usuario, subir las fases de sueño, pedir la hora óptima, los insights y la valoración de cada mañana. JSON sobre HTTPS con documentación OpenAPI automática.',
        tech_2_t: 'Privacidad desde el diseño',
        tech_2_d: 'Usuarios anónimos, una llave de 256 bits por usuario guardada solo como huella, servidores en la UE y una sola llamada para borrarlo todo (RGPD).',
        tech_3_t: 'Explicable, no una caja negra',
        tech_3_d: 'Cada predicción llega con su motivo. La puntuación y los consejos son deterministas y no emiten diagnósticos.',
        biz_eyebrow: 'Para organizaciones', biz_title: 'Dos formas de ofrecer WeSleep.',
        biz_subtitle: 'Para clínicas del sueño y bienestar, mutuas y aseguradoras, y plataformas de wellness que quieren un contacto diario y útil con su gente.',
        biz_1_tag: 'La más rápida', biz_1_t: 'App de marca blanca',
        biz_1_d: 'La app WeSleep con tu nombre, tu logo y tus colores. Tus pacientes la instalan y empiezan en 10 minutos. Sin desarrollar nada.',
        biz_1_b1: 'Lista en días', biz_1_b2: 'Guía de instalación para el usuario final', biz_1_b3: 'Actualizaciones y soporte incluidos',
        biz_2_tag: 'La más flexible', biz_2_t: 'API para tu plataforma',
        biz_2_d: 'Añade la Smart Alarm y el análisis del sueño a la app que ya tienes. Tú controlas la experiencia; nosotros ponemos el motor.',
        biz_2_b1: 'Documentación técnica y ejemplos', biz_2_b2: 'Integración en días, no en meses', biz_2_b3: 'Acceso directo al equipo fundador',
        pilot_t: 'Pruébalo gratis 30 días.', pilot_d: 'Un piloto con tu equipo o con un grupo de pacientes. Sin compromiso y sin tarjeta.', pilot_cta: 'Ver el piloto',
        lead_eyebrow: 'Guía gratuita', lead_title: 'Una forma más inteligente de fidelizar.',
        lead_description: 'Consigue gratis nuestra guía práctica B2B: solo tienes que dejarnos tu email.',
        lead_benefit_1: 'Aumenta el uso diario', lead_benefit_2: 'Refuerza los programas de prevención', lead_benefit_3: 'Convierte el sueño en valor para tu producto',
        lead_proof: 'Basada en 2 años de I+D en predicción personalizada del sueño.',
        lead_badge: 'PDF gratuito', lead_card_title: 'Descarga la guía', lead_card_description: 'Elige tu sector e introduce tu email.',
        lead_sector_label: 'Tu sector', lead_sector_placeholder: 'Selecciona tu sector',
        lead_sector_wellness: 'B2B Bienestar', lead_sector_private: 'B2B Empresa privada', lead_sector_b2c: 'B2C',
        lead_email_label: 'Correo electrónico', lead_email_placeholder: 'tu@empresa.com',
        lead_button: 'Descargar PDF', lead_downloading: 'Preparando...', lead_invalid_email: 'Introduce un email válido.',
        lead_success_detail: 'Tu guía se ha abierto en una pestaña nueva.', lead_error: 'Algo ha fallado. Vuelve a intentarlo en un momento.',
        lead_pdf_unavailable: 'Esta guía aún no está disponible en este idioma. Te la enviaremos por email pronto.',
        lead_privacy: 'Al descargarla aceptas recibir novedades de WeSleep.',
        resource_email_close: 'Cerrar', resource_email_kicker: 'Documento oficial B2B', resource_email_title: 'Recibe el PDF B2B',
        resource_email_description: 'Introduce tu email para recibir el documento seleccionado.', resource_email_label: 'Correo electrónico',
        resource_email_privacy: 'Usaremos tu email para entregarte el PDF y dar seguimiento a tu solicitud.',
        resource_email_submit: 'Continuar al PDF', resource_email_loading: 'Preparando...',
        resource_email_error: 'Algo ha fallado. Vuelve a intentarlo.', resource_email_unavailable: 'Este documento aún no está disponible en este idioma.',
        contact_eyebrow: 'Contacto', contact_title: 'Hablemos del sueño de tus pacientes.',
        contact_subtitle: 'Cuéntanos sobre tu organización y te enseñamos WeSleep funcionando con un reloj real.',
        contact_sales: 'Ventas', contact_support: 'Soporte técnico', contact_support_desc: 'Línea directa con el equipo fundador',
        contact_demo: '¿Prefieres una llamada?', contact_demo_link: 'Reserva 30 minutos en nuestra agenda ›',
        form_name: 'Tu nombre', form_email: 'Correo electrónico', form_company: 'Organización',
        form_plan_select: '¿Qué te interesa?', form_plan_white: 'App de marca blanca', form_plan_api: 'Integración por API', form_plan_pilot: 'Piloto de 30 días',
        form_message: 'Cuéntanos qué necesitas', form_submit: 'Enviar mensaje',
        contact_sending: 'Enviando...', contact_sent: 'Mensaje enviado', contact_failed: 'No se ha enviado. Reintenta',
        footer_description: 'Tecnología Smart Alarm para plataformas de salud y bienestar.',
        footer_product: 'Producto', footer_company: 'Empresa', footer_contact: 'Contacto',
        footer_disclaimer: 'WeSleep no es un producto sanitario. La puntuación y las fases son orientativas y no constituyen un diagnóstico.',
        footer_copyright: '© 2026 WeSleep. Todos los derechos reservados.',
        nav_implementation: "Implementación",
        hero_cta_secondary: "Ver formas de implementación ›",
        biz_eyebrow: "Implementación",
        biz_title: "Dos formas de implementar WeSleep.",
        biz_subtitle: "Elige la implementación que mejor te encaje: nuestra app lista con tu marca o la API dentro de tu propio producto. Para clínicas del sueño y bienestar, mutuas y aseguradoras, y plataformas de wellness.",
        biz_1_t: "Implementación en marca blanca",
        biz_2_t: "Implementación vía API",
        impl_title: "Implementación en 3 pasos",
        impl_1_s1: "Nos envías tu logo, tus colores y el nombre de la app.",
        impl_1_s2: "Te entregamos tu app con tu marca y la guía de usuario.",
        impl_1_s3: "Tus pacientes la instalan y conectan su reloj en 10 minutos.",
        impl_2_s1: "Te damos acceso a la API y a un entorno de pruebas.",
        impl_2_s2: "Tu app lee las noches de Health Connect y envía las fases de sueño.",
        impl_2_s3: "Cada noche pides la hora óptima y programas la alarma.",
        pilot_d: "Empieza un piloto con cualquiera de las dos implementaciones, con tu equipo o con un grupo de pacientes. Sin compromiso y sin tarjeta.",
        form_plan_select: "¿Qué implementación te interesa?",
        form_plan_white: "Implementación en marca blanca",
        form_plan_api: "Implementación vía API",
        tech_subtitle: "La app es la parte visible. Debajo hay un algoritmo propio expuesto mediante una API REST, para que lo implementes dentro de tu producto."
    },
    ca: {
        meta_title: 'WeSleep — Tecnologia Smart Alarm per a plataformes de salut i benestar',
        nav_app: "L'app", nav_how: 'Com funciona', nav_technology: 'Tecnologia', nav_wearables: 'Wearables',
        nav_resources: 'Recursos', nav_resources_label: 'Document B2B (PDF)', nav_api_docs: "Referència de l'API",
        nav_pilot: 'Pilot 30 dies', nav_cta: 'Reservar demo',
        hero_eyebrow: 'Smart Alarm · API + app Android',
        hero_title_1: 'Desperta en el millor moment',
        hero_title_2: 'del teu son.',
        hero_subtitle: "WeSleep llegeix les fases del son del rellotge i fa sonar l'alarma en son lleuger, fins a 30 minuts abans de l'hora triada. Tecnologia pròpia, a punt per integrar a la teva plataforma o per donar avui als teus pacients amb la nostra app de marca blanca.",
        hero_cta_primary: 'Reservar una demo', hero_cta_secondary: "Veure l'app ›",
        hero_note: 'App Android disponible · Galaxy Watch, Mi Band i rellotges amb Health Connect',
        wearables_title: 'Funciona amb el rellotge que ja porten els teus usuaris',
        wearables_note: "Compatible amb qualsevol wearable l'app del qual desi les fases del son a Health Connect. Recomanat: Samsung Galaxy Watch. Provat amb dades reals: Xiaomi Mi Band.",
        fig_1: "de finestra intel·ligent abans de l'alarma", fig_2: 'nits d’historial a cada predicció',
        fig_3: 'nits amb dades per començar a aprendre', fig_4: 'de configuració; després funciona sol',
        sleep_education_eyebrow: 'La base del benestar',
        sleep_education_title: 'Dormir bé. Viure millor.',
        sleep_education_intro: "Dormir no és temps perdut. És quan el cos es recupera, la ment ordena el dia i es construeix el demà.",
        cycle_title: 'Una nit és una successió de cicles',
        cycle_desc: "Passem per 4 a 6 cicles d'uns 90 minuts. A cadascun anem del son lleuger al profund i al REM. Despertar-se en son profund deixa pesadesa; despertar-se en son lleuger és natural.",
        stage_light: 'Lleuger', stage_rem: 'REM', stage_deep: 'Profund',
        chart_window: 'Finestra intel·ligent', chart_wake: "WeSleep et desperta aquí",
        sleep_benefits_title: 'El que ens dona dormir bé',
        sleep_benefits_desc: 'Un son regular i reparador sosté tot allò que ens manté actius, centrats i resistents.',
        sleep_benefit_1: 'Més energia, concentració i millors decisions',
        sleep_benefit_2: "Un estat d'ànim més estable",
        sleep_benefit_3: 'Una recuperació que ajuda el cos a adaptar-se i rendir',
        sleep_challenges_title: 'Quan el son perd el ritme',
        sleep_challenges_desc: 'Dormir malament afecta molt més que el matí. Si es repeteix, el rendiment diari i la recuperació se’n ressenten.',
        sleep_challenge_1: 'Cansament al matí i ment menys clara',
        sleep_challenge_2: "Menys resistència a l'estrès del dia a dia",
        sleep_challenge_3: 'Energia irregular durant el dia',
        sleep_timing_title: 'Despertar-se al moment just importa',
        sleep_timing_desc: "Despertar-se en son profund provoca inèrcia del son: pesadesa i desorientació que poden durar una bona estona. Conèixer el patró de cada persona permet trobar un moment més natural per despertar-se.",
        how_eyebrow: 'Com funciona', how_title: 'Es configura un cop. Funciona cada nit.',
        how_1_title: 'El rellotge mesura el son',
        how_1_desc: 'La persona dorm amb el rellotge posat. Registra el son lleuger, profund i REM i desa la nit a Health Connect.',
        how_2_title: 'WeSleep aprèn el seu patró',
        how_2_desc: "Amb les darreres nits, l'algorisme descobreix quan sol tenir el son més lleuger abans de la seva alarma.",
        how_3_title: 'La desperta en el millor moment',
        how_3_desc: "Fins a 30 minuts abans de l'hora triada. Mai més tard. I l'app explica per què ha triat aquell minut.",
        app_eyebrow: "L'app", app_title: 'Un producte acabat. A punt per fer servir.',
        app_subtitle: "No és un prototip: és una app Android nativa que els teus usuaris poden instal·lar avui, amb la teva marca si ho prefereixes.",
        app_1_kicker: 'Avui', app_1_title: "L'alarma, explicada.",
        app_1_desc: "Un gran rellotge mostra quan sonarà i la finestra de 30 minuts que pot fer servir. Un interruptor activa la Smart Alarm i, a sota, els dies de la setmana.",
        app_1_b1: 'Hora recomanada per anar a dormir aquesta nit, segons els seus propis cicles',
        app_1_b2: 'Volum suau que puja durant 30 segons',
        app_1_b3: 'Pantalla completa sobre el bloqueig, amb posposar 9 minuts',
        app_2_kicker: 'La teva nit', app_2_title: "Cada nit, d'un cop d'ull.",
        app_2_desc: "Una puntuació de 0 a 100, el temps adormit i la història de la nit: cada cicle, cada fase i el minut exacte en què va sonar l'alarma.",
        app_2_b1: 'Lleuger, profund i REM comparats amb valors de referència',
        app_2_b2: 'Consells personals en llenguatge senzill',
        app_2_b3: 'Valors orientatius, mai un diagnòstic mèdic',
        app_3_kicker: 'Cada matí', app_3_title: "Com t'has despertat?",
        app_3_desc: "Després de l'alarma, WeSleep diu a quina hora i per què ha despertat la persona i li pregunta com se sent amb un sol toc. Després comprova amb el rellotge si realment era en son lleuger.",
        app_3_b1: 'Ratxes de matins despertant-se en el millor moment',
        app_3_b2: 'Una targeta per compartir el seu matí',
        app_3_b3: "Un hàbit diari que fa tornar a l'app",
        app_4_kicker: 'La teva setmana', app_4_title: 'Tendències, no només nits.',
        app_4_desc: "Un resum setmanal amb mitjanes, l'evolució de les hores dormides i la regularitat de l'hora d'anar a dormir. El que de veritat canvia com descansa la gent.",
        app_4_b1: 'Puntuació mitjana, eficiència, son profund i REM',
        app_4_b2: 'Matins descansat davant de cansat',
        app_4_b3: 'Disponible en català i castellà',
        rel_eyebrow: 'Fiabilitat', rel_title: 'Una alarma que sona sempre.',
        rel_desc: "WeSleep prediu en lloc de mesurar en directe: l'alarma queda programada abans de dormir, amb el patró après. No depèn que el rellotge enviï dades durant la nit.",
        rel_1_t: 'Sona sense internet', rel_1_d: 'Encara que el rellotge es quedi sense bateria o el servidor no respongui.',
        rel_2_t: 'Mai després de la teva hora', rel_2_d: "Si no hi ha prou dades, sona just a l'hora objectiu.",
        rel_3_t: 'Prioritat de despertador', rel_3_d: "Es reprograma després de reinicis, canvis d'hora i actualitzacions.",
        rel_4_t: 'Sense comptes ni contrasenyes', rel_4_d: "Registre anònim. Cada persona pot esborrar totes les seves dades des de l'app.",
        tech_eyebrow: 'Tecnologia', tech_title: 'El motor, a punt per integrar.',
        tech_subtitle: "L'app és la part visible. A sota hi ha un algorisme propi exposat mitjançant una API REST, perquè el posis dins del teu producte.",
        flow_1: 'Wearable', flow_2: "Magatzem de salut d'Android", flow_3: 'App WeSleep o la teva', flow_3s: 'Llegeix les nits', flow_4: 'Hora òptima per despertar',
        copy: 'Copiar', copied: 'Copiat',
        tech_1_t: 'Una API petita i estable',
        tech_1_d: "Registrar un usuari, pujar les fases del son, demanar l'hora òptima, els insights i la valoració de cada matí. JSON sobre HTTPS amb documentació OpenAPI automàtica.",
        tech_2_t: 'Privacitat des del disseny',
        tech_2_d: "Usuaris anònims, una clau de 256 bits per usuari desada només com a empremta, servidors a la UE i una sola crida per esborrar-ho tot (RGPD).",
        tech_3_t: 'Explicable, no una caixa negra',
        tech_3_d: 'Cada predicció arriba amb el seu motiu. La puntuació i els consells són deterministes i no emeten diagnòstics.',
        biz_eyebrow: 'Per a organitzacions', biz_title: 'Dues maneres d’oferir WeSleep.',
        biz_subtitle: 'Per a clíniques del son i benestar, mútues i asseguradores, i plataformes de wellness que volen un contacte diari i útil amb la seva gent.',
        biz_1_tag: 'La més ràpida', biz_1_t: 'App de marca blanca',
        biz_1_d: "L'app WeSleep amb el teu nom, el teu logo i els teus colors. Els teus pacients la instal·len i comencen en 10 minuts. Sense desenvolupar res.",
        biz_1_b1: 'A punt en dies', biz_1_b2: "Guia d'instal·lació per a l'usuari final", biz_1_b3: 'Actualitzacions i suport inclosos',
        biz_2_tag: 'La més flexible', biz_2_t: 'API per a la teva plataforma',
        biz_2_d: "Afegeix la Smart Alarm i l'anàlisi del son a l'app que ja tens. Tu controles l'experiència; nosaltres hi posem el motor.",
        biz_2_b1: 'Documentació tècnica i exemples', biz_2_b2: 'Integració en dies, no en mesos', biz_2_b3: "Accés directe a l'equip fundador",
        pilot_t: 'Prova-ho gratis 30 dies.', pilot_d: 'Un pilot amb el teu equip o amb un grup de pacients. Sense compromís i sense targeta.', pilot_cta: 'Veure el pilot',
        lead_eyebrow: 'Guia gratuïta', lead_title: 'Una manera més intel·ligent de fidelitzar.',
        lead_description: 'Aconsegueix gratis la nostra guia pràctica B2B: només cal que ens deixis el teu email.',
        lead_benefit_1: "Augmenta l'ús diari", lead_benefit_2: 'Reforça els programes de prevenció', lead_benefit_3: 'Converteix el son en valor per al teu producte',
        lead_proof: "Basada en 2 anys d'R+D en predicció personalitzada del son.",
        lead_badge: 'PDF gratuït', lead_card_title: 'Descarrega la guia', lead_card_description: 'Tria el teu sector i introdueix el teu email.',
        lead_sector_label: 'El teu sector', lead_sector_placeholder: 'Selecciona el teu sector',
        lead_sector_wellness: 'B2B Benestar', lead_sector_private: 'B2B Empresa privada', lead_sector_b2c: 'B2C',
        lead_email_label: 'Correu electrònic', lead_email_placeholder: 'tu@empresa.com',
        lead_button: 'Descarregar PDF', lead_downloading: 'Preparant...', lead_invalid_email: 'Introdueix un email vàlid.',
        lead_success_detail: "La teva guia s'ha obert en una pestanya nova.", lead_error: "Alguna cosa ha fallat. Torna-ho a provar d'aquí a un moment.",
        lead_pdf_unavailable: "Aquesta guia encara no està disponible en aquest idioma. Te l'enviarem per email aviat.",
        lead_privacy: 'En descarregar-la acceptes rebre novetats de WeSleep.',
        resource_email_close: 'Tancar', resource_email_kicker: 'Document oficial B2B', resource_email_title: 'Rep el PDF B2B',
        resource_email_description: 'Introdueix el teu email per rebre el document seleccionat.', resource_email_label: 'Correu electrònic',
        resource_email_privacy: 'Farem servir el teu email per lliurar-te el PDF i fer seguiment de la teva sol·licitud.',
        resource_email_submit: 'Continuar al PDF', resource_email_loading: 'Preparant...',
        resource_email_error: 'Alguna cosa ha fallat. Torna-ho a provar.', resource_email_unavailable: 'Aquest document encara no està disponible en aquest idioma.',
        contact_eyebrow: 'Contacte', contact_title: 'Parlem del son dels teus pacients.',
        contact_subtitle: "Explica'ns la teva organització i et mostrem WeSleep funcionant amb un rellotge real.",
        contact_sales: 'Vendes', contact_support: 'Suport tècnic', contact_support_desc: "Línia directa amb l'equip fundador",
        contact_demo: 'Prefereixes una trucada?', contact_demo_link: 'Reserva 30 minuts a la nostra agenda ›',
        form_name: 'El teu nom', form_email: 'Correu electrònic', form_company: 'Organització',
        form_plan_select: "Què t'interessa?", form_plan_white: 'App de marca blanca', form_plan_api: 'Integració per API', form_plan_pilot: 'Pilot de 30 dies',
        form_message: "Explica'ns què necessites", form_submit: 'Enviar missatge',
        contact_sending: 'Enviant...', contact_sent: 'Missatge enviat', contact_failed: "No s'ha enviat. Torna-hi",
        footer_description: 'Tecnologia Smart Alarm per a plataformes de salut i benestar.',
        footer_product: 'Producte', footer_company: 'Empresa', footer_contact: 'Contacte',
        footer_disclaimer: 'WeSleep no és un producte sanitari. La puntuació i les fases són orientatives i no constitueixen un diagnòstic.',
        footer_copyright: '© 2026 WeSleep. Tots els drets reservats.',
        nav_implementation: "Implementació",
        hero_cta_secondary: "Veure formes d'implementació ›",
        biz_eyebrow: "Implementació",
        biz_title: "Dues maneres d'implementar WeSleep.",
        biz_subtitle: "Tria la implementació que millor t'encaixi: la nostra app a punt amb la teva marca o l'API dins del teu propi producte. Per a clíniques del son i benestar, mútues i asseguradores, i plataformes de wellness.",
        biz_1_t: "Implementació en marca blanca",
        biz_2_t: "Implementació via API",
        impl_title: "Implementació en 3 passos",
        impl_1_s1: "Ens envies el teu logo, els teus colors i el nom de l'app.",
        impl_1_s2: "Et lliurem la teva app amb la teva marca i la guia d'usuari.",
        impl_1_s3: "Els teus pacients la instal·len i connecten el rellotge en 10 minuts.",
        impl_2_s1: "Et donem accés a l'API i a un entorn de proves.",
        impl_2_s2: "La teva app llegeix les nits de Health Connect i envia les fases del son.",
        impl_2_s3: "Cada nit demanes l'hora òptima i programes l'alarma.",
        pilot_d: "Comença un pilot amb qualsevol de les dues implementacions, amb el teu equip o amb un grup de pacients. Sense compromís i sense targeta.",
        form_plan_select: "Quina implementació t'interessa?",
        form_plan_white: "Implementació en marca blanca",
        form_plan_api: "Implementació via API",
        tech_subtitle: "L'app és la part visible. A sota hi ha un algorisme propi exposat mitjançant una API REST, perquè l'implementis dins del teu producte."
    }
};

const WEB3FORMS_KEY = '476c8876-0e5c-43ff-b925-8a2cb7b9d6e4';
const SUPPORTED = ['en', 'es', 'ca'];

function readStoredLanguage() {
    try {
        const stored = localStorage.getItem('selectedLanguage');
        if (SUPPORTED.includes(stored)) return stored;
    } catch (e) { /* almacenamiento no disponible */ }
    const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return SUPPORTED.includes(browser) ? browser : 'en';
}

let currentLanguage = readStoredLanguage();
let pendingResourceLanguage = null;
const t = key => (translations[currentLanguage] && translations[currentLanguage][key]) || translations.en[key] || '';

async function registerLead(email, sector, language) {
    const sectorKeys = { wellness: 'lead_sector_wellness', 'private-company': 'lead_sector_private', b2c: 'lead_sector_b2c' };
    const sectorLabel = translations[language][sectorKeys[sector]];
    const formData = new FormData();
    formData.append('access_key', WEB3FORMS_KEY);
    formData.append('email', email);
    formData.append('subject', `Nou lead WeSleep (${sectorLabel}): ${email}`);
    formData.append('message', `Ei, ${email} ha deixat el seu correu al web. Un lead més!\n\nSector: ${sectorLabel}\nIdioma seleccionat: ${language}\nOrigen: lead magnet`);
    formData.append('sector', sectorLabel);
    formData.append('source', 'Lead magnet');
    formData.append('language', language);

    const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
    const responseText = await response.text();
    let result;
    try {
        result = JSON.parse(responseText);
    } catch {
        throw new Error(`Web3Forms returned a non-JSON response (HTTP ${response.status}): ${responseText.slice(0, 200)}`);
    }
    if (!response.ok || !result.success) {
        throw new Error(`Web3Forms rejected the lead (HTTP ${response.status}): ${result.message || 'No reason provided'}`);
    }
}

async function requestPdf(email, sector, language) {
    return fetch('/api/lead-download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, sector, language })
    });
}

function updateLanguage(lang) {
    currentLanguage = lang;
    try { localStorage.setItem('selectedLanguage', lang); } catch (e) { /* sin almacenamiento */ }
    document.documentElement.lang = lang;
    if (translations[lang].meta_title) document.title = translations[lang].meta_title;

    document.querySelectorAll('a[href^="pilot.html"]').forEach(link => {
        const hash = link.getAttribute('href').split('#')[1];
        link.href = `pilot.html?lang=${lang}${hash ? '#' + hash : ''}`;
    });

    document.querySelectorAll('[data-translate]').forEach(el => {
        const value = translations[lang][el.getAttribute('data-translate')];
        if (value) el.textContent = value;
    });
    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
        const value = translations[lang][el.getAttribute('data-translate-placeholder')];
        if (value) el.placeholder = value;
    });
    document.querySelectorAll('[data-translate-aria-label]').forEach(el => {
        const value = translations[lang][el.getAttribute('data-translate-aria-label')];
        if (value) el.setAttribute('aria-label', value);
    });
    document.querySelectorAll('.lead-form-success, .lead-form-error').forEach(el => { el.textContent = ''; });

    const langCurrent = document.querySelector('.lang-current');
    if (langCurrent) langCurrent.textContent = lang.toUpperCase();
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.toggle('active', option.getAttribute('data-lang') === lang);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('langToggle');
    const langDropdown = document.getElementById('langDropdown');
    const resourceToggle = document.getElementById('resourceToggle');
    const resourceDropdown = document.getElementById('resourceDropdown');
    const resourceDialog = document.getElementById('resourceEmailDialog');
    const resourceEmailForm = document.getElementById('resourceEmailForm');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');

    updateLanguage(currentLanguage);

    // Desplegables
    const closeDropdowns = () => {
        langDropdown?.classList.remove('active');
        langToggle?.classList.remove('active');
        resourceDropdown?.classList.remove('active');
        resourceToggle?.classList.remove('active');
        resourceToggle?.setAttribute('aria-expanded', 'false');
    };
    langToggle?.addEventListener('click', e => {
        e.stopPropagation();
        const open = !langDropdown.classList.contains('active');
        closeDropdowns();
        langDropdown.classList.toggle('active', open);
        langToggle.classList.toggle('active', open);
    });
    resourceToggle?.addEventListener('click', e => {
        e.stopPropagation();
        const open = !resourceDropdown.classList.contains('active');
        closeDropdowns();
        resourceDropdown.classList.toggle('active', open);
        resourceToggle.classList.toggle('active', open);
        resourceToggle.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', closeDropdowns);

    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', e => {
            e.stopPropagation();
            updateLanguage(option.getAttribute('data-lang'));
            closeDropdowns();
            closeMobileMenu();
        });
    });

    // Menú móvil
    function closeMobileMenu() {
        if (!navMenu || !navToggle) return;
        navMenu.classList.remove('is-open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
    }
    navToggle?.addEventListener('click', () => {
        const open = navMenu.classList.toggle('is-open');
        navToggle.classList.toggle('open', open);
        navToggle.setAttribute('aria-expanded', String(open));
    });
    navMenu?.querySelectorAll('a:not([data-document-language])').forEach(a => a.addEventListener('click', closeMobileMenu));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeMobileMenu(); closeDropdowns(); } });

    // Barra de navegación al hacer scroll
    const onScroll = () => navbar?.classList.toggle('scrolled', window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Desplazamiento suave con compensación de la barra
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const id = anchor.getAttribute('href');
            if (id === '#resource-email-dialog') return;
            const target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
        });
    });

    // Documento B2B desde «Recursos»
    document.querySelectorAll('.resource-dropdown a[data-document-language]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            pendingResourceLanguage = link.getAttribute('data-document-language');
            document.getElementById('resourceEmailStatus').textContent = '';
            closeDropdowns();
            closeMobileMenu();
            resourceDialog?.showModal();
            document.getElementById('resourceEmailInput')?.focus();
        });
    });
    document.getElementById('resourceDialogClose')?.addEventListener('click', () => resourceDialog?.close());

    resourceEmailForm?.addEventListener('submit', async function (e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value.trim();
        const submitButton = this.querySelector('button[type="submit"]');
        const status = document.getElementById('resourceEmailStatus');
        const language = pendingResourceLanguage || currentLanguage;
        const originalText = submitButton.textContent;
        const pdfTab = window.open('about:blank', '_blank');
        if (pdfTab) pdfTab.opener = null;

        submitButton.disabled = true;
        submitButton.textContent = t('resource_email_loading');
        status.textContent = '';
        try {
            await registerLead(email, 'wellness', language);
            const response = await requestPdf(email, 'wellness', language);
            if (!response.ok) {
                pdfTab?.close();
                if (response.status === 404) { status.textContent = t('resource_email_unavailable'); return; }
                const error = await response.json().catch(() => ({}));
                throw new Error(error.error || 'PDF request failed');
            }
            const url = URL.createObjectURL(await response.blob());
            if (pdfTab) pdfTab.location.replace(url); else window.open(url, '_blank', 'noopener,noreferrer');
            setTimeout(() => URL.revokeObjectURL(url), 60000);
            pendingResourceLanguage = null;
            resourceDialog.close();
            this.reset();
        } catch (error) {
            console.error('Failed to deliver resource PDF:', error);
            pdfTab?.close();
            status.textContent = t('resource_email_error');
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    });

    // Guía gratuita (lead magnet)
    const leadForm = document.getElementById('leadMagnetForm');
    leadForm?.addEventListener('submit', async function (e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        const sectorInput = this.querySelector('select[name="sector"]');
        const email = emailInput.value.trim();
        const sector = sectorInput.value;
        const success = this.querySelector('.lead-form-success');
        const error = this.querySelector('.lead-form-error');
        const unavailable = document.getElementById('leadPdfUnavailable');

        if (!sector) { sectorInput.setCustomValidity(t('lead_sector_placeholder')); sectorInput.reportValidity(); return; }
        sectorInput.setCustomValidity('');
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { emailInput.setCustomValidity(t('lead_invalid_email')); emailInput.reportValidity(); return; }
        emailInput.setCustomValidity('');

        const button = this.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        button.disabled = true;
        button.textContent = t('lead_downloading');
        [success, error, unavailable].forEach(el => { if (el) el.textContent = ''; });

        const language = currentLanguage;
        const pdfTab = window.open('about:blank', '_blank');
        if (pdfTab) pdfTab.opener = null;
        let ok = false;
        try {
            await registerLead(email, sector, language);
            const response = await requestPdf(email, sector, language);
            if (!response.ok) {
                pdfTab?.close();
                if (response.status === 404) { unavailable.textContent = t('lead_pdf_unavailable'); ok = true; return; }
                const result = await response.json().catch(() => ({}));
                throw new Error(result.error || 'Lead capture failed');
            }
            const url = URL.createObjectURL(await response.blob());
            if (pdfTab) {
                pdfTab.location.replace(url);
            } else {
                const a = document.createElement('a');
                a.href = url;
                a.download = `wesleep-${sector}-${language}.pdf`;
                a.click();
            }
            setTimeout(() => URL.revokeObjectURL(url), 60000);
            success.textContent = t('lead_success_detail');
            ok = true;
        } catch (err) {
            console.error('Failed to capture lead or open sector PDF:', err);
            pdfTab?.close();
            error.textContent = t('lead_error');
        } finally {
            setTimeout(() => {
                button.disabled = false;
                button.textContent = originalText;
                if (ok) this.reset();
            }, 2500);
        }
    });

    // Formulario de contacto
    const contactForm = document.querySelector('.contact-form form');
    contactForm?.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(this);
        formData.append('access_key', WEB3FORMS_KEY);
        formData.append('subject', `Nou contacte WeSleep: ${formData.get('company')} (${formData.get('plan')})`);
        const button = this.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        button.textContent = t('contact_sending');
        button.disabled = true;

        fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData })
            .then(r => r.json())
            .then(result => {
                if (!result.success) throw new Error(result.message || 'Contact request failed');
                button.textContent = t('contact_sent');
                this.reset();
            })
            .catch(() => { button.textContent = t('contact_failed'); })
            .finally(() => setTimeout(() => { button.textContent = originalText; button.disabled = false; }, 3000));
    });

    // Copiar código
    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', () => {
            const code = button.closest('.integration-code').querySelector('code').textContent;
            navigator.clipboard.writeText(code).then(() => {
                button.textContent = t('copied');
                setTimeout(() => { button.textContent = t('copy'); }, 1800);
            }).catch(err => console.error('Failed to copy text:', err));
        });
    });

    // Aparición suave al hacer scroll
    const revealItems = document.querySelectorAll('.section-header, .cycle-card, .edu-panel, .step, .feature-row, .reliability-inner > *, .flow, .tech-grid, .biz-card, .pilot-banner, .lead-magnet-inner > *, .contact-content > *, .figure');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
        revealItems.forEach((item, index) => {
            item.classList.add('reveal-item');
            item.style.setProperty('--reveal-delay', `${(index % 3) * 90}ms`);
            observer.observe(item);
        });
    }
});
