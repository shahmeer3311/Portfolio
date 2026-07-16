"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function ContactSection() {
  return (
   <>
   <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="pt-10 pl-5"
    >
      <Link
        href="/"
        className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-gray-300 backdrop-blur-md transition-all duration-300 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-white"
      >
        <motion.span
          animate={{
            x: [0, -4, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowLeft size={18} />
        </motion.span>

        Back to Home
      </Link>
    </motion.div>
    <section
      id="contact"
      className="relative overflow-hidden py-28"
    >
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-16 lg:grid-cols-2"
        >
          {/* Left Side */}
          <motion.div variants={fadeUp}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
              Contact
            </p>

            <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Let's Build Something
              <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Great Together
              </span>
            </h2>

            <p className="mt-8 max-w-lg text-lg leading-8 text-gray-400">
              Have a project in mind, a collaboration opportunity, or need a
              full-stack developer? I'd love to hear your ideas. Send me a
              message and let's create something impactful together.
            </p>

            <motion.div
              variants={fadeUp}
              className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <h3 className="text-lg font-semibold text-white">
                Quick Response
              </h3>

              <p className="mt-2 text-gray-400">
                I typically respond within 24–48 hours. Every message is
                appreciated, and I'll get back to you as soon as possible.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl"
          >
            <form className="space-y-6">
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Project Discussion"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-violet-500"
                />
              </div>

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-4 font-semibold text-white shadow-lg transition"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
   </>
  );
}