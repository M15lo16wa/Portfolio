export type ProjectStatus = 'production' | 'prototype' | 'lab' | 'archive';

export interface Repo {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  status: ProjectStatus;
  statusLabel: string;
  category: string;
  tags: string[];
  repos: Repo[];
}

export const projects: Project[] = [
  {
    slug: 'dossier-medical',
    title: 'Plateforme de dossier médical partagé',
    description:
      "Système centralisé pour la gestion des données patients, conçu pour la digitalisation du secteur de la santé et l'interopérabilité entre établissements. Frontend ReactJS connecté à une API dédiée.",
    status: 'prototype',
    statusLabel: 'Prototype fonctionnel',
    category: 'Développement / Santé numérique',
    tags: ['ReactJS', 'API REST', 'Santé', 'Interopérabilité'],
    repos: [
      { label: 'Frontend', url: 'https://github.com/M15lo16wa/memoirApplication' },
      { label: 'API', url: 'https://github.com/M15lo16wa/apiMemoire' },
    ],
  },
  {
    slug: 'proxmox-terraform',
    title: "Automatisation d'infrastructure — Proxmox & Terraform",
    description:
      "Pipeline GitLab CI/CD pour le déploiement automatisé de machines virtuelles : configuration réseau, provisioning et gestion d'environnements virtualisés as code.",
    status: 'lab',
    statusLabel: 'Réalisé en environnement privé',
    category: 'DevOps / Infrastructure',
    tags: ['Proxmox', 'Terraform', 'GitLab CI/CD', 'IaC'],
    repos: [],
  },
  {
    slug: 'reservation-vols',
    title: 'Plateforme de réservation de vols',
    description:
      "Application de réservation de vols en ligne développée en plusieurs itérations : API back-end (Laravel puis Node.js/TypeScript) et interface front-end pour la gestion du parcours de réservation.",
    status: 'archive',
    statusLabel: 'Projet itératif',
    category: 'Full-stack',
    tags: ['Laravel', 'TypeScript', 'API REST', 'Full-stack'],
    repos: [
      { label: 'App', url: 'https://github.com/M15lo16wa/ReservationVols' },
      { label: 'API Laravel', url: 'https://github.com/M15lo16wa/laravel-reservation' },
      { label: 'API Node.js', url: 'https://github.com/M15lo16wa/FlightBookingApi' },
      { label: 'v2 (TypeScript)', url: 'https://github.com/M15lo16wa/reservationVol2' },
    ],
  },
  {
    slug: 'vulnerable-lab',
    title: 'Application vulnérable — Lab pédagogique',
    description:
      "Application web volontairement vulnérable, construite à des fins d'apprentissage pour la pratique de tests d'intrusion et l'analyse de vulnérabilités (méthodologie type DVWA / OWASP).",
    status: 'lab',
    statusLabel: 'Lab cybersécurité',
    category: 'Cybersécurité offensive',
    tags: ['Pentest', 'OWASP', 'Sécurité offensive', 'JavaScript'],
    repos: [{ label: 'Code source', url: 'https://github.com/M15lo16wa/vulnerable' }],
  },
  {
    slug: 'gestion-incidents',
    title: "API de gestion d'incidents matériels",
    description:
      "API permettant de signaler et de résoudre les problèmes liés au matériel informatique d'une entreprise — suivi de tickets et cycle de vie des incidents.",
    status: 'prototype',
    statusLabel: 'Prototype fonctionnel',
    category: 'Backend / IT Support',
    tags: ['API REST', 'Gestion IT', 'Backend'],
    repos: [{ label: 'API', url: 'https://github.com/M15lo16wa/apIncident' }],
  },
  {
    slug: 'simulateur-leo',
    title: 'Simulateur de constellations satellites LEO',
    description:
      "Simulateur Python pour l'étude de la performance d'architectures de constellations de satellites en orbite basse (LEO) — lien direct avec la spécialisation Télécommunications.",
    status: 'prototype',
    statusLabel: 'Prototype fonctionnel',
    category: 'Télécommunications',
    tags: ['Python', 'Télécoms', 'Simulation réseau'],
    repos: [{ label: 'Code source', url: 'https://github.com/M15lo16wa/Simultateur_LEO' }],
  },
  {
    slug: 'mobile-app',
    title: 'Application mobile React Native',
    description:
      'Application mobile multiplateforme développée avec React Native et TypeScript.',
    status: 'prototype',
    statusLabel: 'Prototype fonctionnel',
    category: 'Mobile',
    tags: ['React Native', 'TypeScript', 'Mobile'],
    repos: [{ label: 'Code source', url: 'https://github.com/M15lo16wa/mobileApp' }],
  },
];
