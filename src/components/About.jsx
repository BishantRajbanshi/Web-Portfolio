import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">Get to know me better</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-[400px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 rounded-2xl"></div>
              <img
                src="/Images/dpp.jpeg"
                alt="About me"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
                Who am I?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                A passionate and ambitious student currently pursuing BSc(Hons) in Computer Science 
                at Herald College Kathmandu. I'm always eager to explore new opportunities for learning 
                and growth in the field of software development.
              </p>
            </div>

            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
                Education
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  BSc(Hons) Computer Science - Herald College Kathmandu
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  +2 Science - National School of Sciences
                </li>
              </ul>
            </div>

            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
                What I do?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I focus on creating efficient and user-friendly software solutions. My interests include 
                web development, software engineering, and exploring new technologies.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About