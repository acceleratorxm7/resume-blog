import { motion } from "framer-motion";

type Project = {
  name: string;
  descriptions: string[];
  techStack: string[];
  link?: string;
};

type WorkExperience = {
  company: string;
  role: string;
  startDate: Date;
  endDate: Date;
  projects: Project[];
};

const workExperiences: WorkExperience[] = [
  {
    company: "JoonFNC",
    role: "Full Stack Developer",
    startDate: new Date("2021-02-01"),
    endDate: new Date("2021-05-31"),
    projects: [
      {
        name: "Main Website Development",
        descriptions: [
          "Developed and maintained the entire website, including the main carousel, about page, and several community feature pages.",
          "Enhanced the admin panel for carousel updates and manual user visit statistics.",
          "Implemented a fully responsive design for mobile devices.",
        ],
        techStack: ["MySQL", "jQuery", "PHP", "Bootstrap 5"],
        link: "https://joonfnc.com",
      },
    ],
  },
  {
    company: "LG B2B Lifecare Shopping Mall",
    role: "Front-end Developer",
    startDate: new Date("2021-09-27"),
    endDate: new Date("2021-12-14"),
    projects: [
      {
        name: "E-commerce UI Enhancements",
        descriptions: [
          "Worked on both web and mobile components, handling different layouts for the same API.",
          "Focused on '기획전' (Special Planning) UI, feature updates, and navigation improvements.",
          "Resolved various UI issues identified during QA, ensuring a smooth eCommerce experience.",
        ],
        techStack: ["NuxtJS", "SCSS", "Typescript", "nuxt-typed-decorator"],
        link: "https://b2b.lglifecare.com",
      },
    ],
  },
  {
    company: "SNB Plus",
    role: "Full Stack Developer",
    startDate: new Date("2021-12-15"),
    endDate: new Date("2022-07-05"),
    projects: [
      {
        name: "Korean Teacher License",
        descriptions: [
          "Re-architected the entire codebase due to outdated Java versions, legacy libraries, and non-responsive UI.",
          "Implemented Bootstrap to modernize the user interface and added OAuth2 authentication for easier access.",
          "Actively monitored and resolved issues during critical license registration periods.",
        ],
        techStack: ["Spring", "JSP", "Bootstrap 5", "Cubrid (Korean RDB)"],
        link: "http://kteacher.korean.go.kr",
      },
      {
        name: "Internal Company Management Tool",
        descriptions: [
          "Developed a document approval system that followed the company's hierarchical structure for user permissions.",
          "Added a custom layout system that dynamically hid and displayed menus based on user roles and authentication levels.",
          "Optimized query performance, fixing the JPA N+1 issue in the notification system, reducing query execution time from 10 seconds to 0.2 seconds.",
        ],
        techStack: ["Vue.JS 3", "Bootstrap 5", "Spring Boot", "MySQL"],
        link: "http://madang.snbplus.co.kr",
      },
    ],
  },
  {
    company: "Nudge Healthcare",
    role: "Backend Developer",
    startDate: new Date("2022-07-05"),
    endDate: new Date("2023-12-01"), // Replace with accurate date when known
    projects: [
      {
        name: "UNPA",
        descriptions: [
          "Led the gradual migration from Play Framework to NestJS, implementing an event-driven architecture by using DynamoDB streams to transition data to PostgreSQL with eventual consistency.",
          "Refactored the login system to support OAuth, PASS (Korean ID system), and soft-delete functionality for user data.",
          "Migrated infrastructure from EC2 to Beanstalk, implemented disaster recovery with CloudWatch, and optimized CI/CD with CodeBuild and Docker for faster deployments.",
        ],
        techStack: [
          "Play Framework",
          "DynamoDB",
          "JavaScript (ES5)",
          "TypeScript",
          "NestJS",
          "PostgreSQL",
          "Prisma",
        ],
        link: "https://unpa.me",
      },
      {
        name: "Transactional Coupon Server",
        descriptions: [
          "Built a multi-tenant coupon service integrating KT Biz and KT Mhows servers, with transaction limits and secure VPC access.",
          "Used SQS for rollback mechanisms and implemented optimistic transactions to handle concurrency issues.",
          "Managed up to 2,000,000 KRW (~$1400) in daily transactions.",
        ],
        techStack: ["NestJS", "SQS", "PostgreSQL", "AWS", "Docker"],
        link: "https://nudge-point.de",
      },
    ],
  },
  {
    company: "Wheeschool",
    role: "Full Stack Developer",
    startDate: new Date("2023-12-01"),
    endDate: new Date("2024-03-01"), // Replace with accurate date when known
    projects: [
      {
        name: "Website Management and Migration",
        descriptions: [
          "Managed the website built in Django, migrating infrastructure from EC2 to Docker + Beanstalk.",
          "Transitioned email verification from GoDaddy to SES and used Route 53 for health checks and URL handling.",
          "Set up SSL with ACM and load balancers, introduced a test environment, and resolved various UI issues.",
          "Implemented updates for the new TOEFL writing format.",
        ],
        techStack: ["Django", "MySQL", "AWS"],
        link: "https://wheeschool.com",
      },
    ],
  },
];

const certificates: Array<{
  name: string;
  achievedAt: Date;
  link?: string;
}> = [
  {
    name: "AWS Solutions Architect Associate",
    achievedAt: new Date("2022-11-26"),
    link: "https://www.credly.com/badges/91549c1d-cec6-44b0-85fe-dc49db739eca/public_url",
  },
  {
    name: "AWS Solutions Architect Professional",
    achievedAt: new Date("2024-03-09"),
    link: "https://www.credly.com/badges/3e39a3c8-4632-4ce6-b81c-6603a50f04ce/public_url",
  },
  {
    name: "JLPT N2",
    achievedAt: new Date("2023-12-04"),
  },
];

const projects: Array<{
  name: string;
  description: string;
  techStack: string[];
  startDate: Date;
  endDate: Date | null;
  link: string;
  githubLink: string | null;
}> = [
  {
    name: "Discord Bot",
    description:
      "The bot for Genshin Impact game-data analysis and statistics and user search. Have 5000+ servers using the bot. Currently not running due to hard maintenance and pricing.",
    techStack: ["NodeJS", "GraphQL", "NextJS", "AWS CDK", "Heroku"],
    link: "https://discord.com/api/oauth2/authorize?client_id=846812424387690538&permissions=8&scope=bot%20applications.commands",
    startDate: new Date("2020-05-01"),
    endDate: null, // ongoing
    githubLink: null, // No GitHub link provided
  },
  {
    name: "Airbnb Clone Project",
    description:
      "Focused on mostly UI parts. Worked on Main Page and Room Detail Page. Focused on responsive design and layout changes during the scroll.",
    techStack: ["NextJS"],
    link: "https://airbnb-clone-jade-sigma.vercel.app/",
    startDate: new Date("2024-09-09"),
    endDate: null, // ongoing
    githubLink: "https://github.com/acceleratorxm7/airbnb-clone",
  },
  {
    name: "Personal Blog",
    description:
      "Personal blog by using static page export from Next.JS and deploying them to Github Pages.",
    techStack: ["NextJS", "TypeScript"],
    link: "", // not done yet
    startDate: new Date("2024-09-09"),
    endDate: null,
    githubLink: "https://github.com/acceleratorxm7/resume-blog",
  },
];

const languageProficiency: Array<{
  name: string;
  level: "Native" | "Fluent" | "Proficient" | "Intermediate" | "Beginner";
}> = [
  {
    name: "Korean",
    level: "Native",
  },
  {
    name: "English",
    level: "Fluent",
  },
  {
    name: "Japanese",
    level: "Fluent",
  },
  {
    name: "Chinese",
    level: "Proficient",
  },
];

export default function ResumeSlide() {
  return (
    <main
      id="resume"
      className="slider min-h-[calc(100vh-70px)] flex flex-col gap-6 py-6"
    >
      <motion.h1
        className="slide-header font-bold"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      >
        Resume
      </motion.h1>
      <section>
        <motion.h5
          className="resume-header"
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          initial={{ opacity: 0, x: 10 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
        >
          Work History
        </motion.h5>
        {workExperiences.map((experience, index) => (
          <motion.div
            key={experience.company}
            className="work-experience mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h5 className="company font-bold text-lg">{experience.company}</h5>
            <p className="role">
              {experience.role}
              <br />
              <span className="text-gray-600">
                {experience.startDate.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}{" "}
                -{" "}
                {experience.endDate.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </span>
            </p>

            {experience.projects.map((project, projectIndex) => (
              <motion.div
                key={`${experience.company}-project-${projectIndex}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: projectIndex * 0.1 }}
                className="project my-4"
              >
                <h6 className="project-name font-semibold">{project.name}</h6>
                <ul className="description list-disc ml-5 mb-2">
                  {project.descriptions.map((description, index) => (
                    <li key={`description-${index}`} className="mb-1">
                      {description}
                    </li>
                  ))}
                </ul>
                <ul className="tech-stack list-inline">
                  {project.techStack.map((tech, index) => (
                    <li
                      key={`${project.name}-tech-${index}`}
                      className="inline-block bg-gray-200 text-sm px-2 py-1 rounded mr-2 mb-2"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                {project.link && (
                  <a
                    href={project.link}
                    className="project-link text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        ))}
      </section>
      <section>
        <motion.h5
          className="resume-header"
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          initial={{ opacity: 0, x: 10 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
        >
          Projects
        </motion.h5>
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="project mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h5 className="project-name font-bold text-lg">{project.name}</h5>
            <p className="description mb-2">{project.description}</p>

            <p className="tech-stack mb-2">
              <strong>Tech Stack:</strong>
            </p>
            <ul className="list-disc ml-5 mb-2">
              {project.techStack.map((tech, techIndex) => (
                <li key={`${project.name}-tech-${techIndex}`} className="mb-1">
                  {tech}
                </li>
              ))}
            </ul>

            <p className="date mb-2">
              <strong>Start Date:</strong>{" "}
              {project.startDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              <br />
              {project.endDate ? (
                <>
                  <strong>End Date:</strong>{" "}
                  {project.endDate.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </>
              ) : (
                <>
                  <strong>Ongoing</strong>
                </>
              )}
            </p>

            {project.link && (
              <a
                href={project.link}
                className="project-link text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            )}

            {project.githubLink && (
              <a
                href={project.githubLink}
                className="github-link text-blue-500 hover:underline ml-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
          </motion.div>
        ))}
      </section>
      <section>
        <motion.h5
          className="resume-header"
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          initial={{ opacity: 0, x: 10 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
        >
          Certificates
        </motion.h5>
        <ul className="list-disc list-inside">
          {certificates.map((certificate, index) => (
            <motion.li
              key={`certificate-${index}`}
              className="mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1.0 }}
            >
              <strong>{certificate.name}</strong>:
              {certificate.link && (
                <>
                  {" - "}
                  <a
                    href={certificate.link}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                </>
              )}
              <br />
              <span>Achieved Date: </span>
              {certificate.achievedAt.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </motion.li>
          ))}
        </ul>
      </section>
      <section>
        <motion.h5
          className="resume-header"
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          initial={{ opacity: 0, x: 10 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
        >
          Languages
        </motion.h5>
        <ul className="list-disc list-inside">
          {languageProficiency.map((language, index) => (
            <motion.li
              key={`language-${index}`}
              className="mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1.0 }}
            >
              <strong>{language.name}</strong>: {language.level}
            </motion.li>
          ))}
        </ul>
      </section>
    </main>
  );
}
