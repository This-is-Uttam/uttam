"use client"
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';
import Image from "next/image";
import {
  SiNextdotjs,
  SiReact,
  SiMongodb,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiGithub
} from "react-icons/si";

export default function Home() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const form = useRef(null)
  const [isEmailSending, setIsEmailSending] = useState(false)

  const projects = [
    {
      title: "X-Plorer",
      description: "A file management system with authentication and uploads.",
      image: "/x-plorer.png",
      tech: ["Next.js", "MongoDB", "Tailwind", "JWT"],
      live: "https://xplorer-murex.vercel.app/",
      github: "https://github.com/This-is-Uttam/my-file-explorer",
    },
    {
      title: "ChatApp",
      description: "A chat application with real-time messaging and user authentication.",
      image: "/chat-app.png",
      tech: ["Next.js", "Socket.IO", "MongoDB", "Tailwind"],
      live: "https://chat-app-tau-mauve-15.vercel.app/",
      github: "https://github.com/This-is-Uttam/Chat-App",
    },
    {
      title: "My Shopkeeper",
      description: "An E-Commerce platform with Admin Panel for online business.",
      image: "/my-shopkeeper.png",
      tech: ["Next.js", "Socket.IO", "MongoDB", "Tailwind"],
      live: "https://my-shopkeeper.vercel.app/",
      github: "https://github.com/This-is-Uttam/my-shopkeeper",
    },
    // {
    //   title: "Product Management System",
    //   description: "A simple way to manage product stocks and grow your business.",
    //   image: "/chat-app.png",
    //   tech: ["Next.js", "Socket.IO", "MongoDB", "Tailwind"],
    //   live: "https://chat-app-tau-mauve-15.vercel.app/",
    //   github: "https://github.com/This-is-Uttam/Chat-App",
    // }
  ]

  const skills = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "React.js",
    icon: SiReact,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    name: "Express.js",
    icon: SiExpress,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "GitHub",
    icon: SiGithub,
  },
];

  const handleContactForm = (name: string, email: string, message: string) => {
    if (name === "" || email === "" || message === "") {
      toast("Please fill all the input fields!")
      return
    }

    // integrate email
    if (!form.current) {
      console.log("Form is null!")
      return
    }
    setIsEmailSending(true)
    emailjs
      .sendForm(`${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`, form.current, {
        publicKey: `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`,
      })
      .then(
        () => {
          setIsEmailSending(false)
          setEmail("")
          setName("")
          setMessage("")
          toast("Email sent successfully!")
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast("Something went wrong!")
          setIsEmailSending(false)

        },
      );
  }


  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white font-sans overflow-x-hidden">

      {/* Navbar */}
      <nav className="w-full border-b border-zinc-200 dark:border-zinc-800 backdrop-blur-sm sticky top-0 z-50 bg-white/70 dark:bg-black/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          <h1 className="text-2xl font-bold tracking-tight">
            Uttam<span className="text-blue-500">.</span>
          </h1>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-blue-500 transition">
              Home
            </a>

            <a href="#skills" className="hover:text-blue-500 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-blue-500 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-blue-500 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="flex flex-col gap-6">

            <div>
              <p className="text-blue-500 font-semibold mb-3">
                FULL STACK DEVELOPER
              </p>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="text-blue-500">
                  Uttam
                </span>
              </h1>

              <p className="mt-6 text-zinc-600 dark:text-zinc-400 text-lg leading-8 max-w-xl">
                I build modern, scalable and professional web applications using
                Next.js, React, Node.js and MongoDB.
              </p>
            </div>

            <div className="flex gap-4 mt-4">
              <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl text-white font-medium shadow-lg shadow-blue-500/20">
                View Projects
              </button>

              <button className="border border-zinc-300 dark:border-zinc-700 hover:border-blue-500 hover:text-blue-500 transition px-6 py-3 rounded-xl">
                Contact Me
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center justify-center">
            <div className="relative">

              {/* <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div> */}

              {/* <div className="relative w-[320px] h-[320px] rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl flex items-center justify-center">
                <span className="text-7xl font-bold text-white">
                  U
                </span>
              </div> */}
              <div className="border-blue-500 border rounded-full p-2">
                <Image
                  width={400}
                  height={400}
                  alt="My Image"
                  src={"/me.png"}
                  loading="eager"
                  className="rounded-full m-2"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-20 ">

        <div className="mb-14 text-center">
          <p className="text-blue-500 font-semibold uppercase tracking-widest">
            My Skills
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Technologies I Work With
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {skills.map((skill) => {
            const Icon = skill.icon
           return <div
              key={skill.name}
              className="bg-white dark:bg-zinc-900 border  rounded-2xl p-4 border-blue-500 shadow-sm"
            >
              <Icon className="size-7 mb-2 text-blue-500"/>
              <h3 className="font-semibold text-lg">
                {skill.name}
              </h3>
            </div>
          })}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-14 text-center">
          <p className="text-blue-500 font-semibold uppercase tracking-widest">
            My Projects
          </p>
          <h2 className="text-4xl font-bold mt-3">
            Projects that I've Built
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.title} className="border border-blue-500 rounded-2xl p-6 ">
              <img src={project.image} alt={project.title} className="rounded-md w-full h-50 object-cover content-start shadow-lg" />
              <h3 className="text-2xl font-bold mt-4">
                {project.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                {project.description}
              </p>
              <div className="flex gap-4 mt-4">
                <button onClick={() => window.open(`${project.live}`, "_blank")} className="bg-blue-600 hover:bg-blue-700 transition px-3 py-2 text-sm rounded-xl text-white font-medium shadow-lg shadow-blue-500/20">
                  View Live
                </button>
                <button onClick={() => window.open(`${project.github}`, "_blank")} className="bg-black hover:bg-gray-900 transition px-3 py-1 text-sm rounded-xl text-white font-medium border-2 border-zinc-300 dark:border-zinc-700">
                  GitHub
                </button>
              </div>

            </div>
          ))}
        </div>


      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-14 text-center">
          <p className="text-blue-500 font-semibold uppercase tracking-widest">
            Contact Me
          </p>
          <h2 className="text-4xl font-bold mt-3">
            Get in Touch
          </h2>
        </div>


        <form ref={form} className="max-w-sm mx-auto" onSubmit={(e) => {
          e.preventDefault()
          handleContactForm(name, email, message)
        }}>
          <div className="mb-5">
            <label htmlFor="name" className="block mb-2.5 text-sm font-medium text-heading">Your Name</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-neutral-secondary-medium border border-gray-600 rounded-xl text-heading text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="John Doe" required />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Your Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-neutral-secondary-medium border border-gray-600 rounded-xl text-heading text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="name@gmail.com" required />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2.5 text-sm font-medium text-heading">Your Message</label>
            <textarea id="message" rows={4} name="message" value={message} onChange={(e) => setMessage(e.target.value)} className="bg-neutral-secondary-medium border border-gray-600 rounded-xl text-heading text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Write your thoughts here..." required ></textarea>

          </div>

          <button type="submit" disabled={isEmailSending} className={`bg-blue-600 hover:bg-blue-700 transition px-5 py-2 text-sm rounded-xl text-white font-medium shadow-lg shadow-blue-500/20 my-4 disabled:bg-blue-400`}>
            {isEmailSending ? "Sending" : "Send"}
          </button>
        </form>

      </section>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-600 dark:text-zinc-400">

          <p>
            © {new Date().getFullYear()} Uttam. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/This-is-Uttam"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition hover:underline"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/uttam-sharma-745306258/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  );
}
