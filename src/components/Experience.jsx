import { motion } from 'framer-motion'

const skills = [
  { name: 'HTML', level: 'Experienced' },
  { name: 'CSS', level: 'Experienced' },
  { name: 'JavaScript', level: 'Basic' },
  { name: 'Python', level: 'Intermediate' },
  { name: 'Java', level: 'Basic' },
  { name: 'PHP', level: 'Basic' },
  { name: 'MySQL', level: 'Basic' },
  { name: 'C', level: 'Intermediate' },
  { name: 'C#', level: 'Basic' },
  { name: 'Git', level: 'Intermediate' },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Experience</h2>
          <p className="text-gray-600 dark:text-gray-300">My technical skills</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{skill.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience