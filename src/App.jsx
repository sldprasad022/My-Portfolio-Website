import './App.css'
import { motion } from "framer-motion";
import hero from "./assets/hero.png";
import profile from "./assets/profile.png";
import profile1 from "./assets/profile1.png";
import astro from "./assets/astro.png";
import engg from "./assets/engg.png";
import exotic from "./assets/exotic.png";
import ecom from "./assets/ecom.avif";
import vfx from "./assets/vfx.png";
import grabyourpic from "./assets/grabyourpic.png";
import comfortbikes from "./assets/comfortbikes.png";
import smarthr from "./assets/smarthr.png";
import mewar from "./assets/mewar.png";


import javafullstackdevimage from "./assets/javafullstackdevimage.png";


import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGithub, FaBars, FaTimes,FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiTailwindcss, SiRedux, SiNodedotjs } from "react-icons/si";
import { useState } from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const sliderVariants = {
  animate: {
    x: [0, -1000], // adjust -1000 based on your content width
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20, // speed of scrolling
        ease: "linear",
      },
    },
  },
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="font-sans text-gray-800 scroll-smooth">
        {/* Header */}
        <nav className='flex justify-between items-center px-2 md:px-12 bg-blue-500 text-white mb-6 md:mb-12'>
          <img 
            src={profile1} 
            className="w-20 h-20 rounded-full shadow-lg border-2 border-gray-300" 
            alt="profile" 
          />
          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden text-3xl z-20" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Desktop Navigation */}
          <motion.div
            className='hidden md:flex mt-4 gap-2 md:gap-6'
          >
            <motion.a href='#exp' variants={fadeIn} initial="hidden" animate="show" transition={{ delay: 0.2 }} className="text-sm sm:text-2xl font-semibold mb-6">Experience</motion.a>
            <motion.a href='#projects' variants={fadeIn} initial="hidden" animate="show" transition={{ delay: 0.2 }} className="text-sm sm:text-2xl font-semibold mb-6">Projects</motion.a>
            <motion.a href='#contact' variants={fadeIn} initial="hidden" animate="show" transition={{ delay: 0.2 }} className="text-sm sm:text-2xl font-semibold mb-6">Contact</motion.a>
            <motion.a href='https://drive.google.com/file/d/1XxRDwh-fGkoPOddCvzdkTPyf2at-w_2R/view?usp=drive_link' target='_blank' rel="noopener noreferrer" variants={fadeIn} initial="hidden" animate="show" transition={{ delay: 0.2 }} className="text-sm sm:text-2xl font-semibold mb-6">Resume</motion.a>
          </motion.div>

          {/* Mobile Navigation List View */}
          {menuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className='absolute top-0 left-0 w-full bg-blue-600 flex flex-col items-center py-4 gap-4 md:hidden z-10'
            >
              <a href='#exp' className="text-lg font-semibold">Experience</a>
              <a href='#projects' className="text-lg font-semibold">Projects</a>
              <a href='#contact' className="text-lg font-semibold">Contact</a>
              <a href='https://drive.google.com/file/d/1i2k7GzXQMMVa5he_KavTUCgjUMNWlY-W/view?usp=drive_link' target='_blank' rel="noopener noreferrer" className="text-lg font-semibold">Resume</a>
            </motion.div>
          )}
        </nav>
        {/* Hero with Cover */}
        <div className="text-center text-[#090712] rounded-se-2xl pt-24">
          <motion.h1
            variants={fadeIn}
            initial="hidden"
            animate="show"
            className="text-3xl sm:text-6xl font-bold mb-4"
          >
            I am Lakshmi Durga Prasad
          </motion.h1>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl font-semibold mb-6 text-[#16151C]"
          >
            Java Full Stack Developer (React Js) <br /> 1.8 Years Experience
          </motion.p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-6 py-2 rounded-full font-medium shadow hover:bg-blue-600 transition"
          >
            View Projects
          </motion.a>
        </div>

        {/* About */}
        <section className="md:flex lg:items-center gap-6 w-full md:px-12 md:pt-8 lg:py-16 mt-8 md:mt-0">
          <img src={javafullstackdevimage} className="w-full md:w-1/2 sm:h-96 rounded-3xl" />
          <section className="mt-6 sm:mt-0 py-5 md:pt-0 xl:pt-10 xl:py-20 px-4 text-center md:h-72 lg:h-96 rounded-3xl" id="about">
            <motion.h2
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-3xl xl:text-5xl text-[#090712] font-bold mb-4"
            >
              About Me
            </motion.h2>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-start text-[#16151C] text-sm md:text-lg lg:text-xl font-semibold"
            >
              I’m a Java Full Stack Developer with experience in building web applications using Java, Spring Boot, and React.js. I enjoy working on both backend and frontend development to create complete and user-friendly applications.
              <br/><br/>
              I’m good at writing clean code, solving problems, and learning new tools and technologies. I like working with teams and believe in continuous learning and improvement.
            </motion.p>
          </section>
        </section>

        {/* Skills */}
          <div className="px-4 sm:px-12 md:mt-12 lg:mt-0">
            <motion.h2
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8 text-center text-[#090712]"
            >
              Skills
            </motion.h2>
            <div className="overflow-hidden w-full bg-white py-4">
              <motion.div
                className="flex gap-6 w-max"
                variants={sliderVariants}
                animate="animate"
              >
                {
                  [

                    { name: "Java", icon: <FaJava /> },
                     { name: "Spring boot", icon: <SiSpringboot /> },
                     { name: "My Sql", icon: <SiMysql /> },
                    { name: "HTML", icon: <FaHtml5 /> },
                    { name: "CSS", icon: <FaCss3Alt /> },
                    { name: "JavaScript", icon: <FaJs /> },
                    { name: "Bootstrap", icon: <FaBootstrap /> },
                    { name: "Tailwind", icon: <SiTailwindcss /> },
                    { name: "React.js", icon: <FaReact /> },
                    { name: "ReduxToolkit", icon: <SiRedux /> },
                    { name: "GitHub", icon: <FaGithub /> },

                     
                     
                  ].map((skill, i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 flex items-center gap-2 text-xl bg-blue-100 text-blue-800 px-4 py-2 rounded shadow whitespace-nowrap"
                    >
                      <span className="text-sm md:text-lg text-amber-500">{skill.icon}</span>
                      {skill.name}
                    </div>
                  ))
                }
              </motion.div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="w-full px-4 md:px-12 md:py-8 lg:py-0 pt-12 lg:pt-12 rounded-3xl" id='exp'>
            <motion.h2
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-3xl font-bold mb-7 text-center"
            >
              My Work Experience
            </motion.h2>
         
            <motion.h4
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-2xl font-bold mb-1"
            >
              Techpixe
            </motion.h4>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-4 text-sm md:text-lg text-start font-semibold"
            >
              I am a Java Full Stack Developer with 1.8 years of professional experience, 
              proficient in developing web applications using Java (Spring Boot) 
              on the backend and React.js on the frontend.
            </motion.p>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-4 text-sm md:text-lg text-start font-semibold"
            >
              On the frontend, I have built two static websites and one dynamic admin dashboard project, 
              gaining hands-on experience with React.js, React Hooks, and component-based UI development.
               I have also used modern styling tools such as Tailwind CSS to build responsive and clean interfaces.
            </motion.p>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-4 text-sm md:text-lg text-start font-semibold"
            >
              I am experienced in implementing secure authentication mechanisms using JSON Web Tokens (JWT) as well as 
              Google OAuth for social login. I’ve developed role-based access control systems to restrict access to 
              specific routes and components, using tools like React Context and Redux for state management, 
              along with react-router-dom and Axios for handling protected routes and API communication.
            </motion.p>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-4 text-sm md:text-lg text-start font-semibold"
            >
              On the backend, I’ve worked with Spring Boot to build scalable REST APIs and manage business logic, 
              integrating with frontend interfaces for a full-stack solution. I focus on writing clean, maintainable code and 
              designing applications with performance, security, and user experience in mind.
            </motion.p>
          </div>

        {/* Projects */}
        <section
          className="pt-10 md:pt-0 lg:pt-10 pb-20 px-4 md:px-12 text-center"
          id="projects"
        >
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 lg:mb-0 xl:mb-8 text-[#090712]"
          >
            My Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Portfolio Website",
                desc: "This personal portfolio you're browsing now is built with React and Tailwind, animated using Framer Motion.",
                link: "",
                src: profile,
              },
              {
                title: "Astrocard",
                desc: "A mini e-commerce solution integrating Razorpay for secure payments and Shiprocket for streamlined shipping, focused on delivering a smooth user experience from cart to checkout.",
                link: "https://bharatastrosage.com/",
                src: astro,
              },
              {
                title: "Grab your pic",
                desc: "Designed a web application to streamline event photography management,enhancing the guest experience with QR code based registration.",
                link: "https://grabyourpic.com/",
                src: grabyourpic,
              },
              {
                title: "Smart HR",
                desc: "Designed and Developed an advanced HR solution  to streamline recruitment,interview automation and payroll management.",
                link: "https://smartaihr.com/",
                src: smarthr,
              },
              {
                title: "Comfort Bikes",
                desc: "“A clean, modern static website promoting eco-friendly commuting through electric cycles, built to highlight sustainability, health, and smart mobility with Comfort Bikes.",
                link: "https://comfortbikes.in/",
                src: comfortbikes,
              },
              {
                title: "Mewar Organics",
                desc: "A modern, responsive static website developed to present their visual effects editing services, portfolio, and studio information. Built with a clean component structure and layout to ensure smooth performance and user experience.",
                link: "https://mewar.comfortbikes.in/",
                src: mewar,
              },
            ].map((proj, i) => {
              const animationVariant = {
                hidden: { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
                show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
              };

              const content = (
                <motion.div
                  key={i}
                  variants={animationVariant}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="h-96 md:h-[436px] lg:h-72 p-6 rounded-xl shadow-md hover:bg-gray-50 hover:text-text-[#16151C] transition cursor-pointer lg:flex lg:items-center gap-6 text-start"
                >
                  {/* Left: Image */}
                  <img
                    src={proj.src || "/default.png"}
                    alt={proj.title}
                    className="w-full h-36 lg:w-32 lg:h-32 object-cover rounded-lg"
                  />

                  {/* Right: Content */}
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#090712] mt-4">{proj.title}</h3>
                    <p>{proj.desc}</p>
                  </div>
                </motion.div>
              );

              return proj.link ? (
                <a
                  key={i}
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                content
              );
            })}
          </div>
        </section>

        {/* Contact */}
        <section
          className="bg-blue-700 text-white pt-6 sm:pt-10 px-4 sm:text-center"
          id="contact"
        >
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Contact Me
          </motion.h2>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-8 sm:text-xl"
          >
            Feel free to reach out for collaborations or job opportunities.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center sm:items-center gap-4 md:gap-10">
            {/* Email */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <a
                href="mailto:sldprasad.sunkara@gmail.com"
                className="font-medium hover:text-gray-300 transition-colors duration-200 flex items-center gap-2"
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
                sldprasad.sunkara@gmail.com
              </a>
            </motion.div>
            {/* Phone */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <a
                href="tel:7008763419"
                className="font-medium hover:text-gray-300 transition-colors duration-200 flex items-center gap-2"
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 32 32"
                stroke="none"
              >
                <path
                  fill="currentColor"
                  d="M26.6 28C23.8222 28 21.0778 27.3947 18.3667 26.184C15.6556 24.9733 13.1889 23.2564 10.9667 21.0333C8.74445 18.8102 7.028 16.3436 5.81733 13.6333C4.60667 10.9231 4.00089 8.17867 4 5.4C4 5 4.13333 4.66667 4.4 4.4C4.66667 4.13333 5 4 5.4 4H10.8C11.1111 4 11.3889 4.10578 11.6333 4.31733C11.8778 4.52889 12.0222 4.77867 12.0667 5.06667L12.9333 9.73333C12.9778 10.0889 12.9667 10.3889 12.9 10.6333C12.8333 10.8778 12.7111 11.0889 12.5333 11.2667L9.3 14.5333C9.74444 15.3556 10.272 16.1498 10.8827 16.916C11.4933 17.6822 12.1658 18.4213 12.9 19.1333C13.5889 19.8222 14.3111 20.4613 15.0667 21.0507C15.8222 21.64 16.6222 22.1787 17.4667 22.6667L20.6 19.5333C20.8 19.3333 21.0613 19.1836 21.384 19.084C21.7067 18.9844 22.0231 18.9564 22.3333 19L26.9333 19.9333C27.2444 20.0222 27.5 20.1836 27.7 20.4173C27.9 20.6511 28 20.912 28 21.2V26.6C28 27 27.8667 27.3333 27.6 27.6C27.3333 27.8667 27 28 26.6 28Z"
                />
              </svg>
                7993916648
              </a>
            </motion.div>
            {/* LinkedIn */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <a
                href="https://www.linkedin.com/in/lakshmi-durga-prasad-sunkara/"
                target="_blank"
                rel="noreferrer"
                className="font-medium hover:text-gray-300 transition-colors duration-200 flex items-center gap-2"
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                viewBox="0 0 56 56"
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="M48.5811 3.5H7.68687C5.45234 3.5 3.5 5.10781 3.5 7.31609V48.3011C3.5 50.5214 5.45234 52.5 7.68687 52.5H48.5691C50.8156 52.5 52.5 50.5083 52.5 48.3011V7.31609C52.5131 5.10781 50.8156 3.5 48.5811 3.5ZM18.6889 44.3439H11.6692V22.5181H18.6889V44.3439ZM15.4219 19.1997H15.3716C13.125 19.1997 11.6703 17.5273 11.6703 15.4339C11.6703 13.3022 13.1633 11.6692 15.4602 11.6692C17.757 11.6692 19.1625 13.2902 19.2128 15.4339C19.2117 17.5273 17.757 19.1997 15.4219 19.1997ZM44.3439 44.3439H37.3242V32.41C37.3242 29.5509 36.3027 27.5975 33.763 27.5975C31.8227 27.5975 30.6742 28.91 30.1634 30.1886C29.972 30.648 29.9206 31.2736 29.9206 31.9123V44.3439H22.9009V22.5181H29.9206V25.5555C30.9422 24.1008 32.538 22.0073 36.2513 22.0073C40.8592 22.0073 44.345 25.0447 44.345 31.593L44.3439 44.3439Z"
                />
              </svg>
                LinkedIn
              </a>
            </motion.div>
          </div>
          <footer className='mt-6 pb-4'>&copy; {new Date().getFullYear()} <span className='underline'>Lakshmi Durga Prasad</span> All rights reserved</footer>
        </section>
      </div>
    </>
  );
}

export default App
