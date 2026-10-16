/**
 * TimeClaw — Script principal
 * Gestion : i18n (FR/EN automatique + switch footer), menu mobile, animations au scroll, Formspree
 */

const TRANSLATIONS = {
  fr: {
    'meta.title': 'TimeClaw - Studio de Jeux Vidéo Indépendant',
    'nav.subtitle': 'INDIE GAME STUDIO',
    'nav.studio': 'Le Studio',
    'nav.games': 'Les Jeux',
    'nav.founder': 'Le Créateur',
    'nav.contact': 'Contact',
    'nav.cta': 'Me contacter',

    'hero.badge': 'Studio Indépendant • Fondé par Mathys Lacoque',
    'hero.title': 'Forger le temps,<br /><span class="text-gradient">marquer les esprits.</span>',
    'hero.lead': "<strong>TimeClaw</strong> est un tout nouveau studio fondé par une seule personne, qui a pour but d'offrir une expérience unique de jeu grâce à la passion de son créateur.",
    'hero.sub': "Pas d'usine à gaz ni de discours corporate : ici, chaque mécanique, chaque ligne de code et chaque détail sont pensés avec la rigueur d'un studio professionnel et la liberté totale de l'indépendant.",
    'hero.btn_games': 'Découvrir les jeux',
    'hero.btn_story': "L'histoire du studio",
    'hero.metric1': 'Esprit Indé & Authentique',
    'hero.metric2': 'Projets en développement',
    'hero.metric3': 'Créateur passionné',
    'hero.logo_tag': 'PAR MATHYS LACOQUE',

    'studio.eyebrow': '01 // À PROPOS DU STUDIO',
    'studio.title': "La crédibilité d'un studio,<br />l'âme d'un créateur solo.",
    'studio.desc': "TimeClaw est né d'un constat simple : les meilleurs jeux vidéo sont ceux où l'on ressent directement la patte, l'envie et la sincérité de celui qui les fabrique.",
    'studio.quote': "« TimeClaw est un tout nouveau studio fondé par une seule personne qui a pour but d'offrir une expérience unique de jeu grâce à la passion de son créateur. »",
    'studio.meta_label': 'Structure officielle',
    'studio.p1_title': 'Vision sans compromis',
    'studio.p1_text': "Être seul à la barre de TimeClaw, c'est assumer pleinement chaque choix de game design. Pas de comité marketing pour lisser les idées : l'objectif est de créer des jeux qui ont du caractère.",
    'studio.p2_title': 'Exigence & Crédibilité',
    'studio.p2_text': "Assumer son côté « un gars passionné » n'empêche pas une rigueur totale. Du code propre à la direction de projet, TimeClaw s'appuie sur des méthodes professionnelles pour livrer des expériences solides.",
    'studio.p3_title': 'Création & Collaboration',
    'studio.p3_text': 'En parallèle de ses propres créations originales, TimeClaw s\'investit à 100 % en tant que studio partenaire dans des projets ambitieux, notamment aux côtés de <a href="https://tyrociel.fr" target="_blank" rel="noopener noreferrer" class="inline-link">TyroCiel</a>.',

    'games.eyebrow': '02 // CATALOGUE & PROJETS',
    'games.title': 'Les Jeux',
    'games.desc': "Deux univers bien distincts où s'expriment le savoir-faire technique et la direction créative de TimeClaw.",
    'games.rhodo_ribbon': 'Projet de <strong>TyroCiel</strong> • Co-développé & co-réalisé par <strong>TimeClaw</strong>',
    'games.rhodo_plane3': 'PLAN III // PROFONDEUR',
    'games.rhodo_plane2': 'PLAN II // MÉDIÉVAL FANTASTIQUE',
    'games.rhodo_plane1': 'PLAN I // ACTION HD-2D',
    'games.rhodo_tag1': 'Plateformer HD-2D',
    'games.rhodo_tag2': 'Médiéval-Fantastique',
    'games.rhodo_tag3': 'Gameplay 3 Plans',
    'games.rhodo_badge': 'Collaboration Officielle',
    'games.rhodo_status': 'En développement actif',
    'games.rhodo_notice': '<strong>Projet signé <a href="https://tyrociel.fr" target="_blank" rel="noopener noreferrer">TyroCiel</a> :</strong> Il s\'agit d\'un projet original du studio de jeux vidéo TyroCiel (filiale de <a href="https://tyrolium.fr" target="_blank" rel="noopener noreferrer">Tyrolium</a>), sur lequel <strong>TimeClaw</strong> intervient comme collaborateur majeur, autant dans le <strong>développement</strong> que dans la <strong>réalisation</strong>.',
    'games.rhodo_desc': 'Plongez dans un monde médiéval-fantastique façonné en <strong>HD-2D</strong>. <em>RhodoTales</em> est un jeu de plateforme exigeant et immersif qui repose sur une mécanique signature : le basculement dynamique entre <strong>3 plans distincts</strong> pour résoudre des énigmes environnementales, esquiver les pièges et affronter vos ennemis sous une nouvelle perspective.',
    'games.rhodo_hl1': "<strong>Rôle de TimeClaw :</strong> Direction de jeu (Game Direction), architecture gameplay et réalisation technique main dans la main avec l'équipe TyroCiel.",
    'games.rhodo_hl2': '<strong>Direction artistique :</strong> Contraste saisissant entre le charme du pixel art traditionnel et les effets de lumière et de profondeur modernes.',
    'games.rhodo_btn': 'Voir le studio TyroCiel',

    'games.rwz_ribbon': 'Création Originale <strong>TimeClaw</strong> • Développé en solo',
    'games.rwz_tag1': 'Action / Survie',
    'games.rwz_tag2': 'Ambiance Rock & Arcade',
    'games.rwz_tag3': 'Hordes de Zombies',
    'games.rwz_badge': 'Projet Original TimeClaw',
    'games.rwz_status': 'ADN 100% Indé',
    'games.rwz_desc1': "Quand l'apocalypse zombie rencontre l'énergie brute du rock ! <em>Rock With Zombies</em> est un concentré d'action décomplexé et nerveux où le fun est roi. Survivez à des vagues incessantes de morts-vivants au rythme de riffs survoltés, enchaînez les combos dévastateurs et transformez le chaos ambiant en véritable scène de concert explosive.",
    'games.rwz_desc2': "Pensé comme un défouloir authentique et sans prise de tête, ce projet incarne parfaitement l'esprit de <strong>TimeClaw</strong> : un jeu direct, généreux en sensations, conçu par un passionné pour les joueurs qui aiment l'action pure et l'énergie arcade.",
    'games.rwz_hl1': '<strong>Action survoltée :</strong> Gameplay nerveux axé sur le rythme, le mouvement constant et la satisfaction immédiate manette ou clavier en main.',
    'games.rwz_hl2': "<strong>Identité forte :</strong> Une direction sonore et visuelle survitaminée qui assume pleinement son côté rock'n'roll face à la horde.",
    'games.rwz_btn': "Suivre l'avancement du jeu",

    'founder.role': '22 ans • Fondateur & Développeur',
    'founder.eyebrow': '03 // DERRIÈRE TIMECLAW',
    'founder.title': "Un passionné de jeux vidéo qui a décidé d'en créer.",
    'founder.p1': "Je m'appelle <strong>Mathys Lacoque</strong>, j'ai 22 ans et je suis le développeur derrière <strong>TimeClaw</strong>.",
    'founder.p2': "Depuis tout petit, le jeu vidéo est bien plus qu'un simple passe-temps pour moi : c'est une véritable passion. Après avoir passé des milliers d'heures à explorer des univers, analyser ce qui rend un gameplay accrocheur et comprendre comment les jeux nous marquent, une évidence s'est imposée : <strong>maintenant, je veux créer les miens.</strong>",
    'founder.p3': 'Je me suis formé au développement avec l\'envie de maîtriser toutes les facettes de la création. Aujourd\'hui, j\'exerce en tant que <em>Game Director & Développeur</em> sur des projets ambitieux comme <strong>RhodoTales</strong> aux côtés de l\'équipe de <a href="https://tyrociel.fr" target="_blank" rel="noopener noreferrer" class="inline-link">TyroCiel</a>, tout en lançant mon propre studio indépendant : <strong>TimeClaw</strong>.',
    'founder.p4': "Ici, on ne se cache pas derrière une fausse multinationale : TimeClaw, c'est avant tout un gars passionné qui met toute son énergie, sa rigueur technique et ses idées au service des joueurs. Une structure sérieuse et professionnelle, mais avec la liberté et la proximité du vrai jeu indé.",
    'founder.t1_tag': 'Les Origines',
    'founder.t1_desc': "Joueur passionné depuis l'enfance, curieux de comprendre l'envers du décor et les mécaniques de jeu.",
    'founder.t2_tag': 'Le Déclic Technique',
    'founder.t2_desc': 'Apprentissage intensif du code, des moteurs de jeu et de la réalisation - devenir Game Director & Développeur.',
    'founder.t3_tag': "Aujourd'hui (22 ans)",
    'founder.t3_desc': 'Lancement officiel de <strong>TimeClaw</strong> et co-réalisation de <em>RhodoTales</em> avec TyroCiel.',

    'contact.eyebrow': '04 // CONTACT',
    'contact.title': "Discutons de jeux, de projets ou de collab'.",
    'contact.desc': "Une question sur <strong>RhodoTales</strong> ou <strong>Rock With Zombies</strong> ? Une proposition de partenariat, un retour de joueur ou simplement envie d'échanger avec Mathys ? Envoyez un message directement via ce formulaire.",
    'contact.card1_label': 'Interlocuteur direct',
    'contact.card1_val': 'Mathys Lacoque - Fondateur',
    'contact.card2_label': 'Identifiant SIRET',
    'contact.label_name': 'Votre nom / pseudo',
    'contact.ph_name': 'Ex : Alex',
    'contact.label_email': 'Votre adresse e-mail',
    'contact.ph_email': 'vous@exemple.fr',
    'contact.label_subject': 'Sujet du message',
    'contact.opt_default': 'Choisir un sujet…',
    'contact.opt_1': 'Question sur les jeux (RhodoTales / Rock With Zombies)',
    'contact.opt_2': 'Proposition de collaboration / Projet pro',
    'contact.opt_3': 'Presse / Créateur de contenu',
    'contact.opt_4': 'Autre message pour Mathys',
    'contact.label_message': 'Votre message',
    'contact.ph_message': 'Bonjour Mathys, je te contacte à propos de...',
    'contact.btn_submit': 'Envoyer le message',
    'contact.sending': 'Envoi en cours…',
    'contact.success': 'Merci ! Votre message a bien été envoyé à Mathys.',
    'contact.error': "Oups, une erreur est survenue lors de l'envoi. Veuillez réessayer.",
    'contact.net_error': "Impossible d'envoyer le message pour le moment. Vérifiez votre connexion.",

    'footer.subtitle': 'STUDIO DE JEUX VIDÉO',
    'footer.tagline': 'Studio de jeux vidéo indépendant fondé par Mathys Lacoque. Offrir une expérience unique de jeu grâce à la passion de son créateur.',
    'footer.nav_title': 'Navigation',
    'footer.nav_home': 'Accueil',
    'footer.nav_studio': 'À propos du studio',
    'footer.nav_games': 'Les Jeux',
    'footer.nav_contact': 'Contact',
    'footer.legal_title': 'Informations Légales',
    'footer.legal_1': 'Mentions Légales',
    'footer.legal_2': 'Hébergement SolidServ',
    'footer.legal_3': 'Propriété Intellectuelle',
    'footer.legal_4': 'Données & Confidentialité',
    'footer.copy': '© <span id="current-year">2026</span> <strong>TimeClaw</strong> (Mathys Lacoque). Tous droits réservés.',
    'footer.credits': 'Site développé par <a href="https://tyrolium.fr" target="_blank" rel="noopener noreferrer">Tyrolium</a> • Hébergé par <a href="https://solidserv.fr" target="_blank" rel="noopener noreferrer">SolidServ</a>',

    'legal.meta_title': 'Mentions Légales - TimeClaw Studio',
    'legal.nav_back': '← Retour au site',
    'legal.eyebrow': 'INFORMATIONS OFFICIELLES',
    'legal.title': 'Mentions Légales & Crédits',
    'legal.desc': "Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique (LCEN), voici les informations légales relatives au site officiel de <strong>TimeClaw</strong>.",
    'legal.c1_step': '01 // ÉDITEUR DU SITE',
    'legal.c1_title': 'Studio TimeClaw',
    'legal.c1_p': 'Le présent site web est édité par <strong>TimeClaw</strong>, studio de création et de développement de jeux vidéo indépendant.',
    'legal.c1_li1': '<strong>Fondateur & Directeur de la publication :</strong> Mathys Lacoque',
    'legal.c1_li2': '<strong>Numéro de SIRET :</strong> <span class="mono">10653697200016</span>',
    'legal.c1_li3': '<strong>Activité :</strong> Développement, conception et réalisation de jeux vidéo',
    'legal.c1_li4': '<strong>Contact :</strong> Via le <a href="index.html#contact" class="inline-link">formulaire de contact officiel</a> du site',
    'legal.c2_step': '02 // CONCEPTION & DÉVELOPPEMENT WEB',
    'legal.c2_p': "La conception graphique, l'intégration et le développement technique de ce site web ont été réalisés par <strong>Tyrolium</strong>.",
    'legal.c2_li1': '<strong>Développeur :</strong> Tyrolium',
    'legal.c2_li2': '<strong>Site officiel :</strong> <a href="https://tyrolium.fr" target="_blank" rel="noopener noreferrer" class="inline-link">https://tyrolium.fr</a>',
    'legal.c3_step': '03 // HÉBERGEMENT WEB',
    'legal.c3_title': 'SolidServ (Filiale de Tyrolium)',
    'legal.c3_p': "Le site web de TimeClaw est hébergé par <strong>SolidServ</strong>, service d'hébergement et d'infrastructure serveur, filiale du groupe <strong>Tyrolium</strong>.",
    'legal.c3_li1': '<strong>Hébergeur :</strong> SolidServ (filiale de <a href="https://tyrolium.fr" target="_blank" rel="noopener noreferrer" class="inline-link">Tyrolium</a>)',
    'legal.c3_li2': '<strong>Site officiel de l\'hébergeur :</strong> <a href="https://solidserv.fr" target="_blank" rel="noopener noreferrer" class="inline-link">https://solidserv.fr</a>',
    'legal.c3_li3': '<strong>Maison-mère :</strong> <a href="https://tyrolium.fr" target="_blank" rel="noopener noreferrer" class="inline-link">https://tyrolium.fr</a>',
    'legal.c4_step': '04 // PROJETS & COLLABORATIONS',
    'legal.c4_title': 'Propriété des Jeux',
    'legal.c4_p': 'Dans le cadre de ses activités, TimeClaw présente ses créations propres ainsi que les projets sur lesquels il intervient en tant que studio collaborateur :',
    'legal.c4_li1': '<strong>RhodoTales :</strong> Projet de jeu vidéo appartenant au studio <strong>TyroCiel</strong> (filiale de <a href="https://tyrolium.fr" target="_blank" rel="noopener noreferrer" class="inline-link">Tyrolium</a>). TimeClaw (Mathys Lacoque) y intervient en qualité de collaborateur officiel pour le développement et la réalisation. Site officiel : <a href="https://tyrociel.fr" target="_blank" rel="noopener noreferrer" class="inline-link">https://tyrociel.fr</a>.',
    'legal.c4_li2': '<strong>Rock With Zombies :</strong> Projet de jeu vidéo développé et réalisé par TimeClaw (Mathys Lacoque).',
    'legal.c5_step': "05 // DROITS D'AUTEUR",
    'legal.c5_title': 'Propriété Intellectuelle',
    'legal.c5_p1': "L'ensemble des éléments présents sur ce site (textes, identité visuelle, logo TimeClaw, photographies, mises en page) est protégé par le droit de la propriété intellectuelle. Les marques, logos et visuels relatifs à <strong>Tyrolium</strong>, <strong>TyroCiel</strong>, <strong>RhodoTales</strong> et <strong>SolidServ</strong> demeurent la propriété exclusive de leurs détenteurs respectifs.",
    'legal.c5_p2': 'Toute reproduction, représentation, modification ou adaptation totale ou partielle de ce site ou de son contenu sans autorisation écrite préalable est strictement interdite.',
    'legal.c6_step': '06 // RGPD & VIE PRIVÉE',
    'legal.c6_title': 'Protection des Données Personnelles',
    'legal.c6_p1': "Ce site statique n'utilise aucun cookie publicitaire ou traceur intrusif. Les seules informations collectées sont celles que vous transmettez volontairement via le formulaire de contact (nom, adresse e-mail, sujet et message), géré de manière sécurisée via le service <em>Formspree</em>.",
    'legal.c6_p2': "Ces données sont utilisées exclusivement par <strong>Mathys Lacoque (TimeClaw)</strong> afin de répondre à vos demandes et ne sont jamais revendues ni cédées à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en nous contactant directement via le formulaire du site.",
    'legal.btn_back': "← Retourner à l'accueil de TimeClaw",

    'err404.meta_title': '404 — Page Introuvable | TimeClaw',
    'err404.nav_back': "← Retour à l'accueil",
    'err404.eyebrow': 'FAILLE TEMPORELLE DÉTECTÉE',
    'err404.title': "Cette page s'est perdue dans le temps.",
    'err404.desc': "On dirait que vous avez exploré une zone hors de la carte ! Le lien que vous avez suivi n'existe plus ou a été déplacé sur <strong>timeclaw.fr</strong>.",
    'err404.btn_home': "Retourner à l'accueil",
    'err404.btn_games': 'Voir les jeux'
  },

  en: {
    'meta.title': 'TimeClaw - Indie Video Game Studio',
    'nav.subtitle': 'INDIE GAME STUDIO',
    'nav.studio': 'The Studio',
    'nav.games': 'Games',
    'nav.founder': 'The Creator',
    'nav.contact': 'Contact',
    'nav.cta': 'Contact me',

    'hero.badge': 'Indie Game Studio • Founded by Mathys Lacoque',
    'hero.title': 'Shaping time,<br /><span class="text-gradient">leaving a mark.</span>',
    'hero.lead': '<strong>TimeClaw</strong> is a brand-new studio founded by a single person, with one clear goal: delivering a unique gaming experience driven by the passion of its creator.',
    'hero.sub': 'No corporate jargon or bloated structure: here, every mechanic, every line of code, and every detail is crafted with professional studio standards and total indie freedom.',
    'hero.btn_games': 'Discover the games',
    'hero.btn_story': "The studio's story",
    'hero.metric1': 'Authentic Indie Spirit',
    'hero.metric2': 'Projects in development',
    'hero.metric3': 'Passionate creator',
    'hero.logo_tag': 'BY MATHYS LACOQUE',

    'studio.eyebrow': '01 // ABOUT THE STUDIO',
    'studio.title': "A studio's credibility,<br />a solo creator's soul.",
    'studio.desc': 'TimeClaw was born from a simple truth: the best video games are the ones where you can genuinely feel the touch, drive, and sincerity of the person making them.',
    'studio.quote': '“TimeClaw is a brand-new studio founded by a single person, aiming to offer a unique gaming experience through the passion of its creator.”',
    'studio.meta_label': 'Official Registration',
    'studio.p1_title': 'Uncompromising Vision',
    'studio.p1_text': 'Being solo at the helm of TimeClaw means standing behind every game design choice. No marketing committee watering down ideas: the goal is to build games with real character.',
    'studio.p2_title': 'High Standards & Credibility',
    'studio.p2_text': 'Embracing the “one passionate guy” indie spirit never means cutting corners. From clean code to project direction, TimeClaw relies on professional methods to deliver solid experiences.',
    'studio.p3_title': 'Creation & Collaboration',
    'studio.p3_text': 'Alongside its own original creations, TimeClaw commits 100% as a partner studio on ambitious projects, notably alongside <a href="https://tyrociel.fr" target="_blank" rel="noopener noreferrer" class="inline-link">TyroCiel</a>.',

    'games.eyebrow': '02 // CATALOG & PROJECTS',
    'games.title': 'The Games',
    'games.desc': 'Two distinct worlds showcasing TimeClaw’s technical craft and creative direction.',
    'games.rhodo_ribbon': 'A <strong>TyroCiel</strong> Project • Co-developed & co-directed by <strong>TimeClaw</strong>',
    'games.rhodo_plane3': 'PLANE III // DEPTH',
    'games.rhodo_plane2': 'PLANE II // MEDIEVAL FANTASY',
    'games.rhodo_plane1': 'PLANE I // HD-2D ACTION',
    'games.rhodo_tag1': 'HD-2D Platformer',
    'games.rhodo_tag2': 'Medieval Fantasy',
    'games.rhodo_tag3': '3-Plane Gameplay',
    'games.rhodo_badge': 'Official Collaboration',
    'games.rhodo_status': 'In active development',
    'games.rhodo_notice': '<strong>A project by <a href="https://tyrociel.fr" target="_blank" rel="noopener noreferrer">TyroCiel</a>:</strong> This is an original project by the video game studio TyroCiel (a subsidiary of <a href="https://tyrolium.fr" target="_blank" rel="noopener noreferrer">Tyrolium</a>), in which <strong>TimeClaw</strong> acts as a key collaborator in both <strong>development</strong> and <strong>direction/production</strong>.',
    'games.rhodo_desc': 'Dive into a medieval-fantasy world crafted in <strong>HD-2D</strong>. <em>RhodoTales</em> is a challenging and immersive platformer built around a signature mechanic: dynamically switching between <strong>3 distinct planes</strong> to solve environmental puzzles, dodge traps, and fight enemies from a fresh perspective.',
    'games.rhodo_hl1': '<strong>TimeClaw’s Role:</strong> Game Direction, gameplay architecture, and technical production hand-in-hand with the TyroCiel team.',
    'games.rhodo_hl2': '<strong>Art Direction:</strong> A striking contrast between the charm of traditional pixel art and modern lighting and depth effects.',
    'games.rhodo_btn': 'Visit TyroCiel Studio',

    'games.rwz_ribbon': '<strong>TimeClaw</strong> Original Creation • Solo Developed',
    'games.rwz_tag1': 'Action / Survival',
    'games.rwz_tag2': 'Rock & Arcade Vibe',
    'games.rwz_tag3': 'Zombie Hordes',
    'games.rwz_badge': 'TimeClaw Original Project',
    'games.rwz_status': '100% Indie DNA',
    'games.rwz_desc1': 'When the zombie apocalypse meets the raw energy of rock! <em>Rock With Zombies</em> is a fast-paced, unapologetic action experience where fun comes first. Survive relentless waves of the undead to the beat of high-voltage riffs, chain devastating combos, and turn the chaos into an explosive concert stage.',
    'games.rwz_desc2': 'Designed as an authentic, no-nonsense thrill ride, this project embodies the true spirit of <strong>TimeClaw</strong>: a direct, sensation-packed game crafted by a passionate dev for players who love pure action and arcade energy.',
    'games.rwz_hl1': '<strong>High-Voltage Action:</strong> Fast-paced gameplay focused on rhythm, constant movement, and instant gratification on controller or keyboard.',
    'games.rwz_hl2': '<strong>Bold Identity:</strong> An overcharged visual and audio direction that fully embraces its rock’n’roll attitude against the horde.',
    'games.rwz_btn': 'Follow game updates',

    'founder.role': '22 years old • Founder & Developer',
    'founder.eyebrow': '03 // BEHIND TIMECLAW',
    'founder.title': 'A lifelong gamer who decided to start making games.',
    'founder.p1': 'My name is <strong>Mathys Lacoque</strong>, I am 22 years old, and I am the developer behind <strong>TimeClaw</strong>.',
    'founder.p2': 'Ever since I was a kid, video games have been much more than just a hobby for me: they are a true passion. After spending thousands of hours exploring worlds, analyzing what makes gameplay addictive, and understanding how games leave a mark on us, one thing became obvious: <strong>now, I want to make my own.</strong>',
    'founder.p3': 'I trained in software and game development with the drive to master every facet of creation. Today, I work as <em>Game Director & Developer</em> on ambitious projects like <strong>RhodoTales</strong> alongside the <a href="https://tyrociel.fr" target="_blank" rel="noopener noreferrer" class="inline-link">TyroCiel</a> team, while launching my own independent studio: <strong>TimeClaw</strong>.',
    'founder.p4': 'Here, we don’t hide behind a fake corporate facade: TimeClaw is first and foremost one passionate guy putting all his energy, technical rigor, and ideas at the service of players. A serious, professional structure—with the freedom and closeness of true indie gaming.',
    'founder.t1_tag': 'The Origins',
    'founder.t1_desc': 'Passionate gamer since childhood, always curious to understand what happens behind the scenes and how game mechanics work.',
    'founder.t2_tag': 'The Technical Spark',
    'founder.t2_desc': 'Intensive learning of code, game engines, and production—becoming a Game Director & Developer.',
    'founder.t3_tag': 'Today (Age 22)',
    'founder.t3_desc': 'Official launch of <strong>TimeClaw</strong> and co-direction of <em>RhodoTales</em> with TyroCiel.',

    'contact.eyebrow': '04 // CONTACT',
    'contact.title': "Let's talk games, projects, or collabs.",
    'contact.desc': 'Have a question about <strong>RhodoTales</strong> or <strong>Rock With Zombies</strong>? A partnership proposal, player feedback, or just want to chat with Mathys? Send a message directly using this form.',
    'contact.card1_label': 'Direct Contact',
    'contact.card1_val': 'Mathys Lacoque - Founder',
    'contact.card2_label': 'SIRET Number (France)',
    'contact.label_name': 'Your name / handle',
    'contact.ph_name': 'e.g. Alex',
    'contact.label_email': 'Your email address',
    'contact.ph_email': 'you@example.com',
    'contact.label_subject': 'Subject',
    'contact.opt_default': 'Choose a subject…',
    'contact.opt_1': 'Question about the games (RhodoTales / Rock With Zombies)',
    'contact.opt_2': 'Collaboration proposal / Business inquiry',
    'contact.opt_3': 'Press / Content Creator',
    'contact.opt_4': 'Other message for Mathys',
    'contact.label_message': 'Your message',
    'contact.ph_message': 'Hi Mathys, I am reaching out about...',
    'contact.btn_submit': 'Send message',
    'contact.sending': 'Sending…',
    'contact.success': 'Thank you! Your message has been sent to Mathys.',
    'contact.error': 'Oops, an error occurred while sending. Please try again.',
    'contact.net_error': 'Unable to send the message right now. Please check your connection.',

    'footer.subtitle': 'VIDEO GAME STUDIO',
    'footer.tagline': 'Independent video game studio founded by Mathys Lacoque. Offering a unique gaming experience through the passion of its creator.',
    'footer.nav_title': 'Navigation',
    'footer.nav_home': 'Home',
    'footer.nav_studio': 'About the studio',
    'footer.nav_games': 'The Games',
    'footer.nav_contact': 'Contact',
    'footer.legal_title': 'Legal Information',
    'footer.legal_1': 'Legal Notice',
    'footer.legal_2': 'SolidServ Hosting',
    'footer.legal_3': 'Intellectual Property',
    'footer.legal_4': 'Data & Privacy',
    'footer.copy': '© <span id="current-year">2026</span> <strong>TimeClaw</strong> (Mathys Lacoque). All rights reserved.',
    'footer.credits': 'Website developed by <a href="https://tyrolium.fr" target="_blank" rel="noopener noreferrer">Tyrolium</a> • Hosted by <a href="https://solidserv.fr" target="_blank" rel="noopener noreferrer">SolidServ</a>',

    'legal.meta_title': 'Legal Notice - TimeClaw Studio',
    'legal.nav_back': '← Back to website',
    'legal.eyebrow': 'OFFICIAL INFORMATION',
    'legal.title': 'Legal Notice & Credits',
    'legal.desc': 'In accordance with French law n° 2004-575 of June 21, 2004 for confidence in the digital economy (LCEN), here is the legal information regarding the official <strong>TimeClaw</strong> website.',
    'legal.c1_step': '01 // WEBSITE PUBLISHER',
    'legal.c1_title': 'TimeClaw Studio',
    'legal.c1_p': 'This website is published by <strong>TimeClaw</strong>, an independent video game creation and development studio.',
    'legal.c1_li1': '<strong>Founder & Publication Director:</strong> Mathys Lacoque',
    'legal.c1_li2': '<strong>SIRET Number:</strong> <span class="mono">10653697200016</span>',
    'legal.c1_li3': '<strong>Activity:</strong> Video game development, design, and production',
    'legal.c1_li4': '<strong>Contact:</strong> Via the <a href="index.html#contact" class="inline-link">official contact form</a> on the website',
    'legal.c2_step': '02 // WEB DESIGN & DEVELOPMENT',
    'legal.c2_p': 'The graphic design, integration, and technical development of this website were carried out by <strong>Tyrolium</strong>.',
    'legal.c2_li1': '<strong>Developer:</strong> Tyrolium',
    'legal.c2_li2': '<strong>Official Website:</strong> <a href="https://tyrolium.fr" target="_blank" rel="noopener noreferrer" class="inline-link">https://tyrolium.fr</a>',
    'legal.c3_step': '03 // WEB HOSTING',
    'legal.c3_title': 'SolidServ (Subsidiary of Tyrolium)',
    'legal.c3_p': 'The TimeClaw website is hosted by <strong>SolidServ</strong>, web hosting and server infrastructure provider, a subsidiary of the <strong>Tyrolium</strong> group.',
    'legal.c3_li1': '<strong>Host:</strong> SolidServ (subsidiary of <a href="https://tyrolium.fr" target="_blank" rel="noopener noreferrer" class="inline-link">Tyrolium</a>)',
    'legal.c3_li2': '<strong>Host Official Website:</strong> <a href="https://solidserv.fr" target="_blank" rel="noopener noreferrer" class="inline-link">https://solidserv.fr</a>',
    'legal.c3_li3': '<strong>Parent Company:</strong> <a href="https://tyrolium.fr" target="_blank" rel="noopener noreferrer" class="inline-link">https://tyrolium.fr</a>',
    'legal.c4_step': '04 // PROJECTS & COLLABORATIONS',
    'legal.c4_title': 'Game Ownership',
    'legal.c4_p': 'As part of its activities, TimeClaw showcases both its own original creations and projects to which it contributes as a partner studio:',
    'legal.c4_li1': '<strong>RhodoTales:</strong> Video game project owned by the <strong>TyroCiel</strong> studio (a subsidiary of <a href="https://tyrolium.fr" target="_blank" rel="noopener noreferrer" class="inline-link">Tyrolium</a>). TimeClaw (Mathys Lacoque) acts as an official collaborator for both development and direction. Official website: <a href="https://tyrociel.fr" target="_blank" rel="noopener noreferrer" class="inline-link">https://tyrociel.fr</a>.',
    'legal.c4_li2': '<strong>Rock With Zombies:</strong> Video game project developed and directed by TimeClaw (Mathys Lacoque).',
    'legal.c5_step': '05 // COPYRIGHT',
    'legal.c5_title': 'Intellectual Property',
    'legal.c5_p1': 'All elements on this website (texts, visual identity, TimeClaw logo, photographs, layouts) are protected by intellectual property laws. Trademarks, logos, and visuals relating to <strong>Tyrolium</strong>, <strong>TyroCiel</strong>, <strong>RhodoTales</strong>, and <strong>SolidServ</strong> remain the exclusive property of their respective owners.',
    'legal.c5_p2': 'Any reproduction, representation, modification, or adaptation of all or part of this website or its content without prior written authorization is strictly prohibited.',
    'legal.c6_step': '06 // GDPR & PRIVACY',
    'legal.c6_title': 'Personal Data Protection',
    'legal.c6_p1': 'This static website does not use any advertising cookies or intrusive trackers. The only information collected is what you voluntarily submit through the contact form (name, email address, subject, and message), securely handled via <em>Formspree</em>.',
    'legal.c6_p2': 'This data is used exclusively by <strong>Mathys Lacoque (TimeClaw)</strong> to reply to your inquiries and is never sold or shared with third parties. In accordance with the GDPR, you have the right to access, rectify, and delete your data by contacting us directly through the website form.',
    'legal.btn_back': '← Back to TimeClaw Home',

    'err404.meta_title': '404 — Page Not Found | TimeClaw',
    'err404.nav_back': '← Back to Home',
    'err404.eyebrow': 'TIME RIFT DETECTED',
    'err404.title': 'This page got lost in time.',
    'err404.desc': 'Looks like you wandered off the map! The link you followed no longer exists or has been moved on <strong>timeclaw.fr</strong>.',
    'err404.btn_home': 'Back to Home',
    'err404.btn_games': 'View Games'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Détection automatique de la langue (ou choix sauvegardé) + Switch dans le footer
  const detectInitialLang = () => {
    try {
      const saved = localStorage.getItem('timeclaw_lang');
      if (saved === 'fr' || saved === 'en') {
        return saved;
      }
    } catch (_) {
      // localStorage indisponible
    }
    const browserLang = (navigator.language || navigator.userLanguage || 'fr').toLowerCase();
    return browserLang.startsWith('fr') ? 'fr' : 'en';
  };

  let currentLang = detectInitialLang();

  const applyLanguage = (lang, saveChoice = false) => {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.fr;
    currentLang = lang;
    document.documentElement.lang = lang;

    if (saveChoice) {
      try {
        localStorage.setItem('timeclaw_lang', lang);
      } catch (_) {}
    }

    // Textes simples
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Textes avec HTML (gras, liens, sauts de ligne)
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Placeholders de formulaire
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Mettre à jour l'année dynamique (utile après innerHTML de footer.copy)
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    // Mettre à jour l'état actif des boutons FR / EN dans le footer
    document.querySelectorAll('[data-lang-switch]').forEach((btn) => {
      const isCurrent = btn.getAttribute('data-lang-switch') === lang;
      btn.classList.toggle('is-active', isCurrent);
      btn.setAttribute('aria-pressed', String(isCurrent));
    });
  };

  // Appliquer la langue au chargement
  applyLanguage(currentLang, false);

  // Écouteurs sur le sélecteur FR / EN du footer
  document.querySelectorAll('[data-lang-switch]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang-switch');
      if (targetLang === 'fr' || targetLang === 'en') {
        applyLanguage(targetLang, true);
      }
    });
  });

  // 2. Effet d'ombre sur la barre de navigation au scroll
  const navbar = document.querySelector('.navbar');
  const handleScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 20) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 3. Menu mobile (Burger)
  const burgerBtn = document.getElementById('burger-btn');
  const navMenu = document.getElementById('nav-menu');

  if (burgerBtn && navMenu) {
    burgerBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      burgerBtn.classList.toggle('is-open', isOpen);
      burgerBtn.setAttribute('aria-expanded', String(isOpen));
    });

    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-open');
        burgerBtn.classList.remove('is-open');
        burgerBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 4. Apparition fluide des sections au scroll (IntersectionObserver)
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('is-visible'));
  }

  // 5. Lien actif dans la navigation selon la section visible
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.navbar__link');

  if ('IntersectionObserver' in window && sections.length > 0 && navLinks.length > 0) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
            });
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );

    sections.forEach((sec) => sectionObserver.observe(sec));
  }

  // 6. Envoi asynchrone propre du formulaire Formspree (avec messages traduits)
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');

  if (contactForm && formStatus && submitBtn) {
    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
      formStatus.textContent = dict['contact.sending'];
      formStatus.className = 'form-status';
      submitBtn.disabled = true;

      try {
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
          method: contactForm.method,
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        });

        if (response.ok) {
          formStatus.textContent = (TRANSLATIONS[currentLang] || TRANSLATIONS.fr)['contact.success'];
          formStatus.classList.add('is-success');
          contactForm.reset();
        } else {
          formStatus.textContent = (TRANSLATIONS[currentLang] || TRANSLATIONS.fr)['contact.error'];
          formStatus.classList.add('is-error');
        }
      } catch (error) {
        formStatus.textContent = (TRANSLATIONS[currentLang] || TRANSLATIONS.fr)['contact.net_error'];
        formStatus.classList.add('is-error');
      } finally {
        submitBtn.disabled = false;
      }
    });
  }
});
