import { NavLink, Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide";

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

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/webprojects",
  },
  // {
  //   name: "Designs",
  //   path: "/designs",
  // },
  {
    name: "About",
    path: "/about",
  },
];

const Navbar = () => {
  const activeLink = "text-blue";

  return (
    <>
      {/* <header className="z-50 w-full uppercase flex justify-between fixed bg-darkBlue shadow-md shadow-blue/30 top-0 items-center py-3 px-16">
        <div>
          <Link
            to="/"
            className="uppercase text-2xl font-bold font-logoFont tracking-widest text-blue"
          >
            Adyy
          </Link>
        </div>

        <div className="flex justify-end items-center">
          <nav className="flex justify-center items-center gap-3">
            <div className="flex *:mx-4 justify-center">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  variants={buttonVariants}
                  whileTap="tap"
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? activeLink
                        : "hover:text-blue transition-all duration-500"
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <div>
              <Link
                to="/contact"
                aria-label="Get in touch"
                className="flex items-center justify-center cursor-pointer text-blue"
              >
                <div className="relative border border-blue inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold shadow transition-all duration-150 ease-in-out rounded-lg hover:pl-10 hover:pr-6 bg-grey group">
                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-blue group-hover:h-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <ArrowRight />
                  </span>
                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <ArrowLeft className="text-darkBlue" />
                  </span>
                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-darkBlue">
                    Get in touch
                  </span>
                </div>
              </Link>
            </div>
          </nav>
        </div>
      </header> */}
      <motion.header
          className="z-50 w-full uppercase flex justify-between fixed bg-darkBlue shadow-md shadow-blue/30 top-0 items-center py-3 px-16"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <span className="text-2xl font-bold font-logoFont tracking-widest text-blue">
              <Link to="/" className="uppercase">
                Adyy
              </Link>
            </span>
          </div>

          <div className="flex justify-end items-center">
            <nav className="flex justify-center items-center gap-3">
              <div className="flex *:mx-4 justify-center">
                {navLinks.map((link, index) => (
                  <motion.div key={index} variants={buttonVariants} whileTap="tap">
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive
                          ? activeLink
                          : "hover:text-blue transition-all duration-500"
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={buttonVariants} whileTap="tap">
                <Link
                  to="/contact"
                  aria-label="Get in touch"
                  className="flex items-center justify-center cursor-pointer text-blue"
                >
                  {/* <div className="relative border border-blue inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold shadow transition-all duration-150 ease-in-out rounded-lg hover:pl-10 hover:pr-6 bg-grey group">
                    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-blue group-hover:h-full"></span>
                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                      <ArrowRight />
                    </span>
                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                      <ArrowLeft className="text-darkBlue" />
                    </span>
                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-darkBlue">
                      Get in touch
                    </span>
                  </div> */}
                </Link>
              </motion.div>
            </nav>
          </div>
        </motion.header>
    </>
  );
};

export default Navbar;
