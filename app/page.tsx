import Link from 'next/link'

export default function Home() {
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Diventa un Esperto di Cybersecurity
            </h1>
            <p className="text-xl mb-8">
              Impara da professionisti del settore con i nostri corsi specializzati
              in cybersecurity e hacking etico
            </p>
            <Link
              href="/courses"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Esplora i Corsi
            </Link>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">I Nostri Corsi</h2>
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
                      Acquista
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
