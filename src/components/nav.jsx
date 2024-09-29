import { NavLink, Link } from "react-router-dom";
import { NavLinks } from "../db";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const headerVariants = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", delay: 0.2, stiffness: 120 },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.08,
  },
  tap: {
    scale: 0.9,
  },
};

const Navbar = () => {
  const activeLink = "text-blue";

  return (
    <>
      <motion.header
        className="z-50 w-full uppercase flex justify-between fixed bg-darkBlue shadow-md shadow-blue/30 top-0 items-center py-3 px-16"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="">
          <span className="text-2xl font-bold font-logoFont tracking-widest text-blue">
            <Link to="/" className="uppercase">
              adnan
            </Link>
            {/* <img src="/mylogo.png" alt="mylogo" className="h-14 w-16"/> */}
          </span>
        </div>

        <div className=" flex justify-end items-center">
          <nav className="flex justify-center items-center gap-3">
            <ul className="flex *:mx-4 justify-center">
              {NavLinks.map((link) => {
                return (
                  <motion.div
                    variants={buttonVariants}
                    whileTap="tap"
                  >
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) => {
                        return isActive ? activeLink : "hover:text-blue transition-all duration-500";
                      }}
                    >
                      {link.Name}
                    </NavLink>
                  </motion.div>
                );
              })}
            </ul>

            <motion.div
              variants={buttonVariants}
              whileTap="tap"
            >
              <Link
                to="/contact"
                className="flex items-center justify-center cursor-pointer text-blue"
              >
                <div className="relative border border-blue inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold shadow transition-all duration-150 ease-in-out rounded-lg hover:pl-10 hover:pr-6 bg-grey group">
                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-blue group-hover:h-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <FaArrowRight />
                  </span>
                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <FaArrowRight className="text-darkBlue" />
                  </span>
                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-darkBlue">
                    Get in touch
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* mobile nav */}
            {/* <label class="flex flex-col gap-2 w-8">
              <input class="peer hidden" type="checkbox" />
              <div class="rounded-2xl h-[3px] w-1/2 bg-black duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"></div>
              <div class="rounded-2xl h-[3px] w-full bg-black duration-500 peer-checked:-rotate-45"></div>
              <div class="rounded-2xl h-[3px] w-1/2 bg-black duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"></div>
            </label> */}
          </nav>
        </div>
      </motion.header>
    </>
  );
};

export default Navbar;
