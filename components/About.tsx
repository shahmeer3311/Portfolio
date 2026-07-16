"use client";

import { motion } from "framer-motion";

const skills = [
  {
    name: "React",
    level: 95,
    color: "from-cyan-400 to-blue-500",
    description: "Building modern interactive UIs with reusable components.",
  },
  {
    name: "Next.js",
    level: 90,
    color: "from-gray-300 to-white",
    description: "SSR, App Router, SEO and high-performance web applications.",
  },
  {
    name: "Node.js",
    level: 85,
    color: "from-green-400 to-emerald-500",
    description: "REST APIs, authentication and scalable backend services.",
  },
  {
    name: "Prisma",
    level: 80,
    color: "from-violet-500 to-purple-600",
    description: "Type-safe ORM with PostgreSQL databases.",
  },
  {
    name: "AWS",
    level: 20,
    color: "from-orange-400 to-yellow-500",
    description: "Deploying cloud applications and infrastructure.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function TechStack() {
  return (
    <section id="about" className="py-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white text-center"
      >
        Tech Stack
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-center text-gray-400 max-w-2xl mx-auto"
      >
        Technologies I use to build fast, scalable and production-ready
        applications.
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-12 max-w-4xl mx-auto space-y-6"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={card}
            whileHover={{
              scale: 1.02,
              y: -5,
            }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-white">
                {skill.name}
              </h3>

              <span className="text-violet-400 font-medium">
                {skill.level}%
              </span>
            </div>

            <p className="mt-2 text-gray-400 text-sm">
              {skill.description}
            </p>

            <div className="mt-5 h-3 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.3,
                  ease: "easeOut",
                }}
                className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}