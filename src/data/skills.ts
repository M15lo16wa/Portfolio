export interface SkillPanel {
  id: string;
  title: string;
  metric: string;
  items: string[];
}

export const skillPanels: SkillPanel[] = [
  {
    id: 'reseaux',
    title: 'Réseaux & Administration Systèmes',
    metric: 'core',
    items: [
      'TCP/IP, LAN, WAN, MAN, Ethernet',
      'DNS, DHCP, ACL, VPN',
      'Windows Server & Active Directory',
      'SAMBA4',
      'Linux (Ubuntu, Kali, Forensic OSINT)',
    ],
  },
  {
    id: 'securite',
    title: 'Sécurité Réseaux',
    metric: 'defense',
    items: [
      'Wireguard, StrongSwan (VPN)',
      'Pfsense — pare-feu avancé & DMZ',
      'Règles ACL & durcissement de services',
      'Nmap, Burp Suite, OWASP ZAP, DVWA, Netcat',
    ],
  },
  {
    id: 'audit',
    title: 'Audit & Supervision',
    metric: 'monitor',
    items: [
      'Lynis, Nessus, Trivy, USBGuard',
      'SIEM — Wazuh',
      'Rsyslog, LogAnalyzer',
      'Zabbix',
    ],
  },
  {
    id: 'cloud',
    title: 'Virtualisation & Cloud',
    metric: 'infra',
    items: ['Proxmox, DevStack', 'Docker', 'VMware, VirtualBox, Hyper-V'],
  },
  {
    id: 'devops',
    title: 'DevOps & Automatisation',
    metric: 'ci/cd',
    items: ['GitLab CI/CD', 'Terraform (Infrastructure as Code)', 'Git, GitHub, GitLab'],
  },
  {
    id: 'dev',
    title: 'Développement',
    metric: 'code',
    items: [
      'Frontend — HTML, CSS, JavaScript, React, Next.js, Nuxt',
      'Mobile — React Native',
      'Backend — Node.js, Java, PHP, Python',
      'ToIP — Asterisk',
    ],
  },
];
