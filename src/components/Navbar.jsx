import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { BsSun, BsMoon } from 'react-icons/bs'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'py-4 glass-effect' : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold text-gradient"
        >
          Bishant Rajbanshi
        </motion.h1>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        <div className="md:hidden flex items-center">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-4 text-gray-600 dark:text-white hover-effect"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden glass-effect"
          >
            <div className="flex flex-col space-y-4 px-6 py-4">
              <NavLinks mobile setIsOpen={setIsOpen} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

const NavLinks = ({ mobile, setIsOpen }) => {
  const links = ['About', 'Experience', 'Projects', 'Contact']
  
  return links.map(link => (
    <a
      key={link}
      href={`#${link.toLowerCase()}`}
      className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
      onClick={() => mobile && setIsOpen(false)}
    >
      {link}
    </a>
  ))
}

const ThemeToggle = ({ darkMode, setDarkMode }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={() => setDarkMode(!darkMode)}
    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
  >
    {darkMode ? <BsSun className="text-white" size={20} /> : <BsMoon size={20} />}
  </motion.button>
)

export default Navbar