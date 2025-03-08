import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-3">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image src={assets.profile_fakhri} alt="" className="rounded w-32" />
      </motion.div>
      {/* <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-2 font-Ovo">
        Hi! <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3> */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        Hi! I'm Fakhri
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        Welcome to my portfolio. Here you’ll find a selection of my work.
        Explore my projects to learn more about what I do.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>
        {/* <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My Resume <Image src={assets.download_icon} alt="" className="w-4" />
        </a> */}
      </div>
    </div>
  );
};

export default Header;
