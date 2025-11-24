export interface CertificationItem {
  id: number
  title: string
  description: string
  image: string
  year: string
  institution: string
}

export const certificationItems: CertificationItem[] = [
  {
    id: 4,
    title: 'AI and Automation with n8n',
    description:
      'Real-time inference, resilient deployment rituals, and observability patterns crafted for cinematic, always-on experiences.',
    image: '/img/certif-4.png',
    year: '2025',
    institution: 'MySkill',
  },
  {
    id: 3,
    title: 'PHP',
    description:
      'Multi-modal interaction, typographic restraint, and poetic narrative systems that make interfaces feel like film stills.',
    image: '/img/certif-3.png',
    year: '2022',
    institution: 'Progate',
  },
  {
    id: 2,
    title: 'HTML & CSS',
    description:
      'Zero-downtime release flows, IaC governance, and automated delivery pipelines supporting immersive digital work.',
    image: '/img/certif-2.png',
    year: '2022',
    institution: 'Progate',
  },
  {
    id: 1,
    title: 'Indonesia Cakap Digital',
    description:
      'Generative visuals, shader storytelling, and light choreography that inspired the hero aesthetic of this portfolio.',
    image: '/img/certif-1.png',
    year: '2022',
    institution: 'Siberkreasi',
  },
]


