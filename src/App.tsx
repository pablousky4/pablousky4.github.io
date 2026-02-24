/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Code2, 
  Cpu, 
  Globe, 
  GraduationCap, 
  Layers, 
  Mail, 
  Monitor, 
  Network, 
  Server, 
  Smartphone, 
  Github, 
  Linkedin, 
  ExternalLink,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Educación', href: '#education' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "glass py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter"
        >
          PC<span className="text-blue-600">.</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-apple-gray-400 hover:text-apple-gray-500 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-apple-gray-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-apple-gray-400 transition-all"
          >
            CV
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-4 rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-apple-gray-400 hover:text-apple-gray-500"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-apple-gray-50">
      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white border border-apple-gray-100 text-xs font-semibold uppercase tracking-widest text-apple-gray-300"
        >
          Ingeniero en formación
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-apple-gray-500"
        >
          Pablo Castro<span className="text-blue-600">.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-apple-gray-300 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Construyendo el futuro de la tecnología a través del desarrollo de software y la ingeniería de sistemas.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto bg-apple-gray-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-apple-gray-400 transition-all flex items-center justify-center gap-2 group">
            Ver Proyectos
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto bg-white border border-apple-gray-100 text-apple-gray-500 px-8 py-4 rounded-full text-lg font-medium hover:bg-apple-gray-50 transition-all">
            Contactar
          </button>
        </motion.div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-3xl -z-0" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-100/20 rounded-full blur-3xl -z-0 animate-float" />
    </section>
  );
};

const BentoGrid = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Sobre mí</h2>
          <p className="text-xl text-apple-gray-300 max-w-2xl">Un vistazo rápido a mi trayectoria y habilidades.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          {/* Bio Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-2 bg-apple-gray-50 rounded-3xl p-8 flex flex-col justify-between border border-apple-gray-100"
          >
            <div>
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6">
                <Globe size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Desarrollador Full Stack & Estudiante de Ingeniería</h3>
              <p className="text-apple-gray-300 leading-relaxed">
                Actualmente curso el Grado en Ingeniería en la UNIE, complementando mi formación previa en Desarrollo de Aplicaciones Web (DAW) y Sistemas Microinformáticos y Redes (SMR). Mi enfoque se centra en crear soluciones escalables y eficientes.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <div className="px-4 py-2 bg-white rounded-xl text-sm font-medium border border-apple-gray-100">React</div>
              <div className="px-4 py-2 bg-white rounded-xl text-sm font-medium border border-apple-gray-100">Node.js</div>
              <div className="px-4 py-2 bg-white rounded-xl text-sm font-medium border border-apple-gray-100">TypeScript</div>
            </div>
          </motion.div>

          {/* Education Summary */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-apple-gray-50 rounded-3xl p-8 border border-apple-gray-100 flex items-center gap-6"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-apple-gray-100">
              <GraduationCap size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold">UNIE Universidad</h3>
              <p className="text-apple-gray-300">Grado en Ingeniería</p>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-apple-gray-50 rounded-3xl p-6 border border-apple-gray-100 flex flex-col items-center justify-center text-center gap-3"
          >
            <Server className="text-blue-600" size={32} />
            <span className="font-bold">Sistemas</span>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-apple-gray-50 rounded-3xl p-6 border border-apple-gray-100 flex flex-col items-center justify-center text-center gap-3"
          >
            <Network className="text-blue-600" size={32} />
            <span className="font-bold">Redes</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  const steps = [
    {
      title: "Grado en Ingeniería",
      institution: "UNIE Universidad",
      period: "Actualidad",
      description: "Enfoque en fundamentos de ingeniería, algoritmos avanzados y arquitectura de sistemas.",
      icon: <Cpu size={24} />,
      color: "bg-blue-600"
    },
    {
      title: "Técnico Superior en DAW",
      institution: "Desarrollo de Aplicaciones Web",
      period: "Completado",
      description: "Especialización en tecnologías web modernas, bases de datos y metodologías ágiles.",
      icon: <Code2 size={24} />,
      color: "bg-purple-600"
    },
    {
      title: "Técnico en SMR",
      institution: "Sistemas Microinformáticos y Redes",
      period: "Completado",
      description: "Montaje de equipos, configuración de redes locales y administración de sistemas operativos.",
      icon: <Monitor size={24} />,
      color: "bg-emerald-600"
    }
  ];

  return (
    <section id="education" className="py-24 px-6 bg-apple-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Formación Académica</h2>
          <p className="text-xl text-apple-gray-300">Una base sólida construida paso a paso.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-8 rounded-[2rem] border border-apple-gray-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 transition-transform group-hover:scale-110", step.color)}>
                {step.icon}
              </div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 block">{step.period}</span>
              <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-apple-gray-400 font-medium mb-4">{step.institution}</p>
              <p className="text-apple-gray-300 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectProps {
  title: string;
  category: string;
  image: string;
  tags: string[];
  key?: string | number;
}

const ProjectCard = ({ title, category, image, tags }: ProjectProps) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-apple-gray-100 shadow-sm"
  >
    <div className="aspect-video overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-8">
      <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 block">{category}</span>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-apple-gray-50 rounded-lg text-xs font-medium text-apple-gray-400 border border-apple-gray-100">
            {tag}
          </span>
        ))}
      </div>
      <button className="flex items-center gap-2 text-sm font-bold group-hover:text-blue-600 transition-colors">
        Ver Proyecto <ExternalLink size={16} />
      </button>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Full Stack",
      image: "https://picsum.photos/seed/shop/800/600",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Network Monitor Pro",
      category: "Systems",
      image: "https://picsum.photos/seed/network/800/600",
      tags: ["Python", "Docker", "Grafana"]
    },
    {
      title: "AI Task Manager",
      category: "AI / Web",
      image: "https://picsum.photos/seed/ai/800/600",
      tags: ["Next.js", "OpenAI", "Tailwind"]
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Proyectos Destacados</h2>
            <p className="text-xl text-apple-gray-300 max-w-xl">Una selección de trabajos que demuestran mis capacidades técnicas.</p>
          </div>
          <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Ver todos los proyectos <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.title} 
              title={project.title}
              category={project.category}
              image={project.image}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-apple-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white p-12 md:p-20 rounded-[3rem] border border-apple-gray-100 shadow-xl"
        >
          <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-8 shadow-lg shadow-blue-200">
            <Mail size={40} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">¿Hablamos?</h2>
          <p className="text-xl text-apple-gray-300 mb-12 leading-relaxed">
            Siempre estoy abierto a nuevas oportunidades, colaboraciones o simplemente a charlar sobre tecnología.
          </p>
          <a 
            href="mailto:hola@pablocastro.dev" 
            className="inline-block bg-apple-gray-500 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-apple-gray-400 transition-all shadow-lg hover:shadow-xl"
          >
            Contáctame por Linkedin
          </a>
          
          <div className="mt-12 flex items-center justify-center gap-8">
            <a href="https://github.com/pablousky4" className="text-apple-gray-300 hover:text-blue-600 transition-colors">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/pablocasrod/" className="text-apple-gray-300 hover:text-blue-600 transition-colors">
              <Linkedin size={28} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-white border-t border-apple-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm font-medium text-apple-gray-300">
          © {new Date().getFullYear()} Pablo Castro. Hecho con pasión e ingeniería.
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-sm font-medium text-apple-gray-300 hover:text-apple-gray-500">Privacidad</a>
          <a href="#" className="text-sm font-medium text-apple-gray-300 hover:text-apple-gray-500">Términos</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
