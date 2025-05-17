import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300">Get to know me better</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="/Images/dpp.jpeg"
              alt="About me"
              className="rounded-lg shadow-lg w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">Who am I?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                A passionate and ambitious student currently pursuing BSc(Hons) in Computer Science 
                at Herald College Kathmandu. I'm always eager to explore new opportunities for learning 
                and growth in the field of software development.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">Education</h3>
              <p className="text-gray-600 dark:text-gray-300">
                • BSc(Hons) Computer Science - Herald College Kathmandu<br />
                • +2 Science - National School of Sciences
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">What I do?</h3>
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