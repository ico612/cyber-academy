import Link from 'next/link'

const courses = [
  {
    id: 1,
    title: "Introduzione alla Cybersecurity",
    description: "Impara le basi della sicurezza informatica e protezione dei dati",
    price: 99.99,
    level: "Principiante",
    duration: "10 ore"
  },
  {
    id: 2,
    title: "Hacking Etico",
    description: "Scopri le tecniche di penetration testing e hacking etico",
    price: 149.99,
    level: "Intermedio",
    duration: "15 ore"
  },
  {
    id: 3,
    title: "Analisi Malware Avanzata",
    description: "Tecniche avanzate di analisi malware e reverse engineering",
    price: 199.99,
    level: "Avanzato",
    duration: "20 ore"
  }
]

export default function CoursesPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">I Nostri Corsi</h1>
          <p className="text-xl text-gray-600">
            Esplora la nostra selezione di corsi di cybersecurity e hacking etico
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <button className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-200">
            Tutti i Corsi
          </button>
          <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200">
            Principiante
          </button>
          <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200">
            Intermedio
          </button>
          <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200">
            Avanzato
          </button>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">
                    Livello: {course.level}
                  </span>
                  <span className="text-sm text-gray-500">
                    Durata: {course.duration}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    €{course.price}
                  </span>
                  <Link
                    href={`/courses/${course.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                  >
                    Dettagli
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 