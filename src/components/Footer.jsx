const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-primary">About</a>
          <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-primary">Experience</a>
          <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-primary">Projects</a>
          <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-primary">Contact</a>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Bishant Rajbanshi. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer