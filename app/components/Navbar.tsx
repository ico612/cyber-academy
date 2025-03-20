import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">CyberAcademy</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/courses" className="text-gray-600 hover:text-blue-600">
              Corsi
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600">
              Chi Siamo
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600">
              Contatti
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-600 hover:text-blue-600"
            >
              Accedi
            </Link>
            <Link
              href="/register"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Registrati
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 