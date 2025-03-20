import { Metadata } from 'next'
import { notFound } from 'next/navigation'

// Simulo un database di corsi
const courses = [
  {
    id: 1,
    title: "Introduzione alla Cybersecurity",
    description: "Impara le basi della sicurezza informatica e protezione dei dati",
    fullDescription: `
      Questo corso ti fornirà una solida base nella cybersecurity. Imparerai:
      - Principi fondamentali della sicurezza informatica
      - Crittografia e protezione dei dati
      - Sicurezza delle reti
      - Best practices per la protezione personale e aziendale
      - Gestione delle minacce informatiche
    `,
    price: 99.99,
    level: "Principiante",
    duration: "10 ore",
    topics: [
      "Introduzione alla sicurezza informatica",
      "Crittografia di base",
      "Sicurezza delle reti",
      "Malware e antivirus",
      "Social engineering",
      "Backup e disaster recovery"
    ]
  },
  {
    id: 2,
    title: "Hacking Etico",
    description: "Scopri le tecniche di penetration testing e hacking etico",
    fullDescription: `
      Un corso pratico sulle tecniche di hacking etico e penetration testing:
      - Metodologie di penetration testing
      - Strumenti professionali
      - Tecniche di exploit
      - Reportistica e documentazione
      - Rimedi e mitigazioni
    `,
    price: 149.99,
    level: "Intermedio",
    duration: "15 ore",
    topics: [
      "Metodologie di penetration testing",
      "Scanning e enumeration",
      "Exploit development",
      "Web application security",
      "Wireless network security",
      "Report writing"
    ]
  },
  {
    id: 3,
    title: "Analisi Malware Avanzata",
    description: "Tecniche avanzate di analisi malware e reverse engineering",
    fullDescription: `
      Corso avanzato sull'analisi del malware e reverse engineering:
      - Ambiente di analisi sicuro
      - Tecniche di reverse engineering
      - Analisi statica e dinamica
      - Debugging avanzato
      - Analisi del codice malevolo
    `,
    price: 199.99,
    level: "Avanzato",
    duration: "20 ore",
    topics: [
      "Setup ambiente di analisi",
      "Reverse engineering basics",
      "Analisi statica del malware",
      "Analisi dinamica e debugging",
      "Tecniche anti-reverse engineering",
      "Case studies"
    ]
  }
]

type Props = {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = courses.find(c => c.id === parseInt(params.id))
  
  if (!course) {
    return {
      title: 'Corso non trovato'
    }
  }

  return {
    title: course.title,
    description: course.description,
  }
}

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1>Corso {params.id}</h1>
      </div>
    </div>
  )
} 