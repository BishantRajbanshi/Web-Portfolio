import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 px-6 min-h-screen flex items-center" id="home">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            Hello, I'm{' '}
            <span className="text-primary">Bishant Rajbanshi</span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
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
          <div className="flex justify-center md:justify-start space-x-4 mb-8">
            <a
              href="https://github.com/BishantRajbanshi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/bishantrajbanshi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="/Images/resume-example.pdf"
              download
              className="bg-primary text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="border-2 border-primary text-primary dark:text-white px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mt-8 md:mt-0"
        >
          <img
            src="/Images/me.jpg"
            alt="Bishant Rajbanshi"
            className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover mx-auto"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero