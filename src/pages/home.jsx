import { Link } from "react-router";
import DateTime from "@/components/ui/dateTime";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide";

import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const socials = [
  {
    Name: "GitHub",
    id: "1",
    hrefUrl: "https://github.com/adnanaadam",
    icon: FaGithub,
    style: "hover:text-grey",
    nameStyle: "text-grey",
  },
  {
    Name: "LinkedIn",
    id: "2",
    hrefUrl: "https://www.linkedin.com/in/adam-adnan-35657b251",
    icon: FaLinkedinIn,
    style: "hover:text-[#004182]",
    nameStyle: "text-[#004182]",
  },
  {
    Name: "Instagram",
    id: "3",
    hrefUrl: "https://www.instagram.com/addy_sharawi",
    icon: FaInstagram,
    style: "hover:text-[#F56040]",
    nameStyle: "text-[#F56040]",
  },
  {
    Name: "X",
    id: "4",
    hrefUrl: "https://x.com/addy_sharawi",
    icon: FaXTwitter,
    style: "hover:text-grey",
    nameStyle: "text-grey",
  },
];

const containerVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", delay: 0.6, stiffness: 120 },
  },
  exit: {
    y: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.08,
  },
  tap: {
    scale: 0.9,
  },
  transition: { type: "spring", duration: 0.3, stiffness: 500, damping: 17 },
};

const Home = () => {
  return (
    <>
      <motion.main
        className="relative overflow-hidden bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-blue/20 via-darkBlue/70 to-darkBlue w-screen h-screen flex justify-center items-center px-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* profile pic */}
        <div className="absolute left-16 flex items-end justify-end overflow-hidden w-full h-full">
          <div className="bg-hero bg-contain bg-no-repeat w-[60rem] h-[36rem] fixed"></div>
        </div>

        <div className="flex w-full h-full pt-40 pb-12 justify-between">
          {/* web dev */}
          <div className="z-50 flex h-full flex-col justify-between items-start">
            <div className="flex flex-col items-start">
              <div className="flex flex-col gap-3">
                <h3 className="text-6xl font-semibold">Adnan Adam</h3>
                <div className="text-2xl font-semibold text-blue uppercase">
                  <span>frontend developer</span> <br />
                  <span className="text-[crimson]">+</span>
                  <span>designer </span>
                  <span className="text-[crimson]">+</span>
                  <span>code-kage</span>
                </div>
                <p>
                  I create exceptional user friendly experiences <br />
                  and exceptional designs. Explore and get a sense <br /> of my
                  technical capabilities and design aesthetics.
                </p>
              </div>
{/* 
              <motion.div
                className="flex items-center mt-3"
                variants={buttonVariants}
                whileTap="tap"
              >
                <Link
                  to="/webprojects"
                  className="overflow-hidden relative text-center px-4 py-2 bg-grey text-blue border border-blue rounded-md text-base font-bold cursor-pointer z-10 group"
                >
                  <span className="group-hover:text-darkBlue mr-2">
                    Explore!
                  </span>
                  <ArrowRight className="text-blue inline group-hover:text-darkBlue group-hover:translate-x-2 transition-transform duration-500" />
                  <span className="absolute w-full h-full -top-0 -left-0 -z-10 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </Link>
              </motion.div> */}
            </div>
{/* 
            <nav aria-label="socials" className="z-50 flex gap-3">
              {socials.map((social) => (
                <motion.button
                  key={social.id}
                  className="group relative"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <a
                    href={social.hrefUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pt-1"
                    aria-label={`Visit my ${social.Name} profile`}
                  >
                    <social.icon
                      className={`${social.style} text-blue size-8 hover:scale-105 hover:bg-white p-1 rounded-lg duration-500`}
                    />
                  </a>
                  <span
                    className={`${social.nameStyle} absolute -top-10 left-[50%] -translate-x-[50%] scale-0 origin-bottom rounded-lg bg-white p-2 text-xs font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-90 group-hover:flex`}
                  >
                    {social.Name}
                  </span>
                </motion.button>
              ))}
            </nav> */}
          </div>

          <div className="z-50 text-end flex flex-col items-end justify-between">
            <div>
              <DateTime />
            </div>

            <div className="opacity-30 text-[0.5rem]">
              <span>created by Adnan | copyright © 2024</span>
            </div>
          </div>
        </div>

        {/* bottom gradient */}
        <div className="w-full h-2/5 absolute bottom-0 bg-gradient-to-t from-darkBlue to-blue/0"></div>
      </motion.main>
    </>
  );
};

export default Home;