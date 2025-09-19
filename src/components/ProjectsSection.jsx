import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ExpenSync | Personal Finance Dashboard",
    description:
      "A MERN stack dashboard to track income, expenses, and category-wise insights with secure authentication and interactive charts.",
    tags: ["MERN", "Chart.js", "JWT"],
    demoUrl: "https://expensync-eta.vercel.app/",
    githubUrl: "https://github.com/Sakshirwt15/ExpenSync",
  },
  {
    id: 2,
    title: "QuickStay – Hotel Booking Website",
    description:
      "Full-stack hotel booking platform with real-time room availability, secure authentication, and responsive UI.",
    tags: ["MERN", "JWT", "Bootstrap"],
    demoUrl: "https://quickstay.vercel.app/",
    githubUrl: "https://github.com/Sakshirwt15/QuickStay",
  },
  {
    id: 3,
    title: "CPU Scheduling Simulator",
    description:
      "Academic project using Java Swing to simulate FCFS, SJF, Priority, and Round-Robin algorithms with dynamic Gantt chart visualizations.",
    tags: ["Java", "Swing", "OS"],
    demoUrl: "https://cpu-scheduler-sim.vercel.app/",
    githubUrl: "https://github.com/Sakshirwt15/CPUSchedulingSimulator",
  },
  {
    id: 4,
    title: "Emotion-Based Music Recommendation System",
    description:
      "AI-powered music recommendation system using CNN and OpenCV for emotion detection, with a Streamlit-based UI.",
    tags: ["Python", "ML", "Streamlit"],
    demoUrl: "https://music-recommender.vercel.app/",
    githubUrl: "https://github.com/Sakshirwt15/EmotionMusicRecommender",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg shadow-xs card-hover p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/sakshirwt15"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
