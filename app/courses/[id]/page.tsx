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

export default function Page({ params }: Props) {
  const courseId = parseInt(params.id)
  const course = courses.find(c => c.id === courseId)

  if (!course) {
    notFound()
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Course Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{course.description}</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {course.level}
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                {course.duration}
              </span>
            </div>
          </div>

          {/* Course Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {/* Description */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Descrizione del Corso</h2>
                <div className="prose max-w-none">
                  {course.fullDescription.split('\n').map((line, index) => (
                    <p key={index} className="mb-4">{line}</p>
                  ))}
                </div>
              </div>

              {/* Topics */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Argomenti del Corso</h2>
                <ul className="space-y-3">
                  {course.topics.map((topic, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-6 h-6 flex items-center justify-center bg-blue-600 text-white rounded-full mr-3 text-sm">
                        {index + 1}
                      </span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Purchase Card */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-blue-600">
                    €{course.price}
                  </span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 mb-4">
                  Acquista Ora
                </button>
                <div className="text-sm text-gray-600">
                  <p className="mb-2">✓ Accesso illimitato al corso</p>
                  <p className="mb-2">✓ Certificato di completamento</p>
                  <p className="mb-2">✓ Supporto via email</p>
                  <p>✓ Aggiornamenti gratuiti</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 