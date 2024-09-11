import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const techStackLists = [
  "HTML",
  "CSS",
  "TypeScript/JavaScript",
  "NestJS",
  "ExpressJS",
  "React/NextJS",
  "Vue.JS/NuxtJS",
  "Java",
  "JSP",
  "Spring Boot",
  "PHP",
  "AWS",
  "MySQL",
  "PostgreSQL",
  "DynamoDB",
];

export default function TechStackSlide() {
  return (
    <main id="tech-stacks" className="slider">
      <motion.h1
        className="slide-header font-bold"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      >
        Tech Stacks
      </motion.h1>
      <motion.p
        className="text text-xl"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        Throughout the work experience and my own side projects, I have worked
        with various technology stacks. These are list of technology stacks that
        I am familiar with:
      </motion.p>
      <motion.ul
        id="tech-stack-lists"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.6, ease: "easeOut", duration: 0.3 }}
      >
        {techStackLists.map((techStack, index) => (
          <motion.li key={`techStack${index}`} variants={itemVariants}>
            {techStack}
          </motion.li>
        ))}
      </motion.ul>
    </main>
  );
}
