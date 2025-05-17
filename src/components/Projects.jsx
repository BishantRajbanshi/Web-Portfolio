import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Weather App',
    image: '/Images/project1.png',
    description: 'A weather application that provides real-time weather information.',
    github: 'https://github.com/BishantRajbanshi/weatherApp',
    demo: 'http://bishantrajbanshi.wuaze.com/WeatherApp/'
  },
  {
    title: 'Tic Tac Toe Game',
    image: '/Images/project2.jpg',
    description: 'A classic Tic Tac Toe game implemented in Python.',
    github: 'https://github.com/BishantRajbanshi/Ticktacktoe',
    demo: '#'
  },
  {
    title: 'Banking Management System',
    image: '/Images/project-3.png',
    description: 'A banking management system implemented in Java.',
    github: '#',
    demo: '#'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">Some of my recent work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl overflow-hidden hover-effect"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-gray-800 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 min-h-[3rem]">
                  {project.description}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 text-white text-center py-2 rounded-full hover:bg-gray-700 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-primary to-secondary text-white text-center py-2 rounded-full hover:opacity-90 transition-opacity"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects