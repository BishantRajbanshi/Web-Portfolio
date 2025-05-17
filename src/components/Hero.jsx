import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24" id="home">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Hello, I'm{' '}
            <span className="text-gradient">Bishant Rajbanshi</span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            <TypeAnimation
              sequence={[
                'Software Developer',
                2000,
                'Student',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <div className="flex justify-center md:justify-start space-x-6 mb-8">
            <a
              href="https://github.com/BishantRajbanshi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary hover-effect"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/bishantrajbanshi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary hover-effect"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="/Images/resume-example.pdf"
              download
              className="glass-effect text-gray-800 dark:text-white px-8 py-3 rounded-full hover-effect"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full hover-effect"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="w-72 h-72 md:w-96 md:h-96 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full animate-gradient"></div>
            <img
              src="/Images/me.jpg"
              alt="Bishant Rajbanshi"
              className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero