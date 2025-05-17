import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { BsSun, BsMoon } from 'react-icons/bs'

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="py-4 px-6 md:px-10 fixed w-full bg-white dark:bg-gray-900 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Bishant Rajbanshi</h1>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-primary">About</a>
          <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-primary">Experience</a>
          <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-primary">Projects</a>
          <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-primary">Contact</a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {darkMode ? <BsSun className="text-white" /> : <BsMoon />}
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 mr-2"
          >
            {darkMode ? <BsSun className="text-white" /> : <BsMoon />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 dark:text-white"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b dark:border-gray-800">
          <div className="flex flex-col space-y-4 px-6 py-4">
            <a href="#about" className="text-gray-600 dark:text-gray-300" onClick={() => setIsOpen(false)}>About</a>
            <a href="#experience" className="text-gray-600 dark:text-gray-300" onClick={() => setIsOpen(false)}>Experience</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar