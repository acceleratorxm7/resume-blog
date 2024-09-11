import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutMeSlide() {
  return (
    <main id="about" className="slider">
      <motion.h1
        className="slide-header font-bold text-center"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      >
        About Me
      </motion.h1>
      <motion.p
        className="text-xl mt-4"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        Hi, my name is Chanwoo Lee and I am an international student from South
        Korea. My major of study is Computer Science. I started learning web
        development since I was 12 as I am personally huge enthusiast of
        front-end development. I love to talk about Software development
        philosophies with others, and my current interest are Cloud Computing,
        High Performance Computing, and Low Level Programming.
      </motion.p>
      <motion.div
        id="profiles"
        className="mt-6 flex justify-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        <Link href="https://github.com/acceleratorxm7">
          <button className="bg-black text-white px-4 py-2 rounded-xl flex flex-row items-center gap-2 shadow-lg hover:scale-105 transition-transform duration-300 ease-out">
            <span className="text-md">
              <FaGithub />
            </span>
            <span>Personal Github Profile</span>
          </button>
        </Link>
      </motion.div>
    </main>
  );
}
