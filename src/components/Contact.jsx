import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Contact Me</h2>
          <p className="text-gray-600 dark:text-gray-300">Get in touch</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
          >
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-primary text-2xl mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Email</h3>
                <a
                  href="mailto:rajbancbishant@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary"
                >
                  rajbancbishant@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
          >
            <div className="flex items-center mb-4">
              <FaLinkedin className="text-primary text-2xl mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/bishantrajbanshi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact