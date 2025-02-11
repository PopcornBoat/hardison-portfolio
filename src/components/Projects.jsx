const projects = [
    { title: "Project 1", link: "#", description: "A cool React app." },
    { title: "Project 2", link: "#", description: "Another cool app." },
  ];
  
  const Projects = () => (
    <section id="projects" className="p-8 text-center">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((p, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p>{p.description}</p>
            <a href={p.link} className="text-blue-500 mt-2 block">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default Projects;
  