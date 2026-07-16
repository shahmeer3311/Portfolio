"use client";

import { motion } from "framer-motion";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <section id="projects" className="py-20">
      <motion.h1
        className="heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-16 mt-10 p-4">
        {projects.map((item, index) => (
          <motion.div
            key={item.id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
          >
            <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] h-[20vh] lg:h-[30vh] overflow-hidden mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img
                    src="/bg.png"
                    alt="Background"
                    className="w-full h-full object-cover"
                  />
                </div>

                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="absolute bottom-0 z-10"
                  whileHover={{
                    scale: 1.05,
                    rotate: -2,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-md text-sm font-light line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, i) => (
                    <motion.div
                      key={i}
                      className="border border-white/20 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * i + 2}px)`,
                      }}
                      whileHover={{
                        y: -8,
                        scale: 1.15,
                      }}
                    >
                      <img src={icon} alt="" className="p-2" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </PinContainer>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;