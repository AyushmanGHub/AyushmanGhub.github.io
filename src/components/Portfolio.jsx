import React, { useState, useEffect } from 'react';
import {
  Sun,
  Moon,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Home,
  FolderGit,
  Briefcase,
  Mail,
    MapPin,
    Tag,
    User,
  Award,
  ChartScatter,
  Database,
  FileCode2,Layers,Brain,GitBranch, FileCode, ChartLine, CircleUserRound, CodeXml, BrainCircuit,
  Settings
} from 'lucide-react';
import { FaPython } from "react-icons/fa";
import { TbBinaryTree } from "react-icons/tb";
import Typed from 'typed.js';
import project3 from '../assets/project3.jpg';


const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const options = {
      strings: ['Ayushman Anupam', 'Data Scientist', 'Philomath'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };

    const typed = new Typed('#typed-name', options);

    return () => {
      typed.destroy();
    };
  }, []);



  const projects = [
    {
      title: "Daily Temperature Prediction of Chennai",
      description: "The project focuses on predicting daily weather variables for Chennai",
      tech: "Python",
      date: "October - 2024 (Still Working)",
      link: "https://github.com/AyushmanGHub/Daily-Temperature-Prediction-of-Chennai",
      link2: "",
      image: "https://raw.githubusercontent.com/AyushmanGHub/Daily-Temperature-Prediction-of-Chennai/refs/heads/main/temperature%20real%20vs%20pred.png"
    },
    {
      title: "From Data to Dwellings: Decoding Amsterdam's Housing Prices",
      description: "Under Prof. Sourish Das | Chennai Mathematical Institute, Chennai",
      tech: "Python, ML",
      date: "September - 2024",
      link: "https://github.com/AyushmanGHub/Amsterdam-House-Price-Analysis-and-Prediction",
      link2: "https://github.com/AyushmanGHub/Amsterdam-House-Price-Analysis-and-Prediction/blob/main/From%20Data%20to%20Dwellings%20Decoding%20Amsterdams%20Housing%20Prices.pdf",
      image: "https://raw.githubusercontent.com/AyushmanGHub/Amsterdam-House-Price-Analysis-and-Prediction/refs/heads/main/resource/01.png"
    },
    {
      title: "Availability, Accessibility and Inequality of WASH in India",
      description: "Under Prof. Rituparna Sen |  Indian Statistical Institue, Bangalore",
      tech: "R programming",
      date: "December - 2022",
      link: "https://github.com/AyushmanGHub/Availability_Accessibility_and_Inequalities_of_WASH_in_Metro-Cities",
      link2: "https://www.isibang.ac.in/~rsen/Stat1/2.pdf",
      image: project3
    },
  ];

  const experience = [
      {
      role: "Chennai Mathematical Institue",
      company: "Master Degree in Data Science",
      duration: "2024 – Present",
      logo: "https://i.pinimg.com/originals/f4/93/eb/f493eb574ca5f3368810cf499f605cab.jpg",
      description: "Subjects : Probability and Statistics, Data Visualization, SQL and RDBMS"
    },
    {
      role: "Indian Statistical Institue, Kolkata",
      company: "Pattern Recognition and Machine Intelligence(PReMI'23)",
      duration: "December 2023",
      logo: "https://www.govtjobsblog.in/wp-content/uploads/2022/05/Indian-Statistical-Institute.png",
      description: "The PReMI workshop, provided an in-depth exploration of various advanced topics. It included lectures and practical sessions on Optimization, Machine Learning models, Statistical models, and related areas."
    },
    {
      role: "Indian Statistical Institue",
      company: "Bachelor Of Mathematics (Honours) [B Math (Hons)]",
      duration: "2020 - 2024",
      logo: "https://www.govtjobsblog.in/wp-content/uploads/2022/05/Indian-Statistical-Institute.png",
      description: "Subjects : Probability, Statistics, Statistical Inference, Linear Algebra, Optimization, Economics, Graph Theory, Analysis"
    },
    {
      role: "Vidya Bharati Chinmaya Vidyalaya, Telco, Jamshedpur",
      company: "",
      duration: "2018 - 2020",
      logo: "https://vbcvjsr.in/images/logo1.png",
      description: "Higher Secondary School, Intermediate"
    },
    {
      role: "Shiksha Niketan School, Jamshedpur",
      company: "",
      duration: "Till 2018",
      logo: "https://play-lh.googleusercontent.com/Ll-lGByvE4KaC7t7Wq9ECdt-dK9KUQvO7kQCRiGCzZnZ6-SbLapvRHg7QAffp45bY4k=w240-h480",
      description: "Senior Secondary School, Matriculation"
    },
  ];

  const skills = [
    { name: "Statistics", logo: <ChartScatter /> },
    { name: "Python", logo: <FaPython /> },
    { name: "Machine Learning", logo: <BrainCircuit />},
    { name: "Data Structures & Algorithms", logo: <TbBinaryTree/>},
    
  ];

  const achievements = [
    {
      title: "GATE:All India Rank 271, Statistics"
    },
    {
      title: "Rank 1 in MS QMS 2024 entrance Examination"
    },
    {
      title: "JEE Mains all India Rank 4652"
    },
    {
      title: "JEE Advance all India Rank 7658"
    }
  ]

  const gallery = [
    {
      icon: <Layers />,
      title: "Decision Trees, Random Forests, AdaBoost & XGBoost",
      url: "https://www.udemy.com/certificate/UC-5fa1e17f-7bf9-4cf6-ad41-62f662fccd96/",
      description: "Certification : UC-5fa1e17f-7bf9-4cf6-ad41-62f662fccd96"
    },
    {
      icon: <Brain />,
      title:"ChatGPT and GPT-4 LLM Guide- Prompt Engineering",
      url: "https://www.udemy.com/certificate/UC-46d9935e-f2bc-48bd-ad45-e00da3bba1f1/",
      description: "Certification : UC-46d9935e-f2bc-48bd-ad45-e00da3bba1f1"
    },
    {
      icon: <GitBranch />,
      title:"Data Structures and Algorithms in Python",
      url: "https://www.udemy.com/certificate/UC-43416d08-2126-4765-ab0e-fe3c43079e44/",
      description: "Certification : UC-43416d08-2126-4765-ab0e-fe3c43079e44"
    },
    {
      icon: <Database />,
      title:"SQL complete Bootcamp From Basics to Advanced",
      url: "https://www.udemy.com/certificate/UC-f31749b2-56a8-45ac-b068-fa762fe21603/",
      description: "Certification : UC-f31749b2-56a8-45ac-b068-fa762fe21603"
    },
    {
      icon: <FileCode />,
      title:" Data Analysis with Python",
      url: "https://courses.cognitiveclass.ai/certificates/fdefea79298e4f3c98372d054487132e",
      description: "Certification : course-v1:CognitiveClass DA0101EN"
    },
    {
      icon: <ChartLine />,
      title:"Data Visualization with Python",
      url: "https://courses.cognitiveclass.ai/certificates/ac9c90734df74fbc8fce2fdc4709116d",
      description: "Certification : course-v1:CognitiveClass DV0101EN"
    },
    {
      icon: <CircleUserRound />,
      title:" TCS iON Career Edge - Young Professional",
      url: "https://www.udemy.com/certificate/UC-46d9935e-f2bc-48bd-ad45-e00da3bba1f1/",
      description: "Certification : 119854-24680147-1016"
    },
    {
      icon: <CodeXml />,
      title:"Crash Course on Python",
      url: "https://www.coursera.org/account/accomplishments/verify/3EF9B9G3C6PU",
      description:  "Certification : 3EF9B9G3C6PU"
    },
    {
      icon: <BrainCircuit />,
      title:"Game Theory",
      url: "https://www.coursera.org/account/accomplishments/verify/ED7J4U64XKYZ",
      description: "Certification : ED7J4U64XKYZ"
    },
    {
      icon: <Brain />,
      title:" Machine Learning Specialization",
      url: "https://www.coursera.org/account/accomplishments/specialization/J9HTPYMFYSYD",
      description: " Certification : J9HTPYMFYSYD"
    },
    {
      icon: <Settings />,
      title:"Unsupervised Learning, Recommenders, Reinforcement Learning",
      url: "https://www.coursera.org/account/accomplishments/verify/7YA9QLFKVVBK",
      description: " Certification : 7YA9QLFKVVBK"
    },
    {
      icon: <CircleUserRound />,
      title:"Supervised Machine Learning: Regression and Classification",
      url: "https://www.coursera.org/account/accomplishments/verify/3Z76UYU758V8",
      description: " Certification : 3Z76UYU758V8"
    },
    {
      icon: <FileCode2 />,
      title:"Advanced Learning Algorithms",
      url: "https://www.coursera.org/account/accomplishments/verify/V7TWJS447P36",
      description: "Certification : V7TWJS447P36"
    },
    
  ];

  const HomePage = () => (
      <div className="animate-fadeIn">
        {/* Profile Image */}
        <div className="w-full flex justify-center mb-5">
          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
            <img
                src="https://ayushmanghub.github.io/img/ph05.png"
                alt="Ayushman Anupam"
                className="w-full h-full object-cover rounded-full border-none border-gray-300 dark:border-gray-800"
            />
          </div>
        </div>

        {/* Resume Button */}
        <div className="w-full flex justify-center mt-8 mb-8">
          <button
              className={`px-6 py-3 rounded-lg text-white font-semibold ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-blue-500 hover:bg-blue-600'
              } transition-all duration-300 shadow-md`}
              onClick={() => window.open('https://ayushmanghub.github.io/Ayushman%20Official%20CMI%20CV.pdf', '_blank')} // Update '#' with the actual resume link later
          >
            View Resume
          </button>
        </div>


        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4"><u>About Me</u></h2>
          <p className="text-lg">
            I am a Data Science student with a deep passion for learning and exploration. Coming from a strong
            Mathematics
            background, I have developed a keen interest in areas such as Statistics, Probability, Statistical
            Inference,
            Graph Theory, and Economics. I'm particularly enthusiastic about applying my knowledge in data-driven fields
            like machine learning, statistical modelling, and data visualization.
            <br/>
            <br/>
            I thrive on solving complex problems and approach every challenge with persistence and a never-give-up
            attitude. With a goal to contribute to organizational growth and success, I aim to address complex
            challenges,
            fostering impactful solutions and advancements.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">
            <u>Skills</u>
          </h2>
          <div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4"
          >
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className={`p-4 rounded-lg ${
                        darkMode ? 'bg-gray-800' : 'bg-gray-100'
                    } flex flex-col items-center justify-center gap-3 min-w-[100px]`}
                >
                  {/* Icon Section */}
                  <span className="text-4xl">{skill.logo}</span>

                  {/* Skill Name */}
                  <span className="text-sm text-center leading-snug break-words">
          {skill.name}
        </span>
                </div>
            ))}
          </div>
        </section>

      </div>
  );

  const ProjectsPage = () => (
      <div className="animate-fadeIn">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
              <div key={index} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4"/>
                <h3 className="font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-2">{project.description}</p>
                <p className="text-xs text-gray-500 mb-2">{project.tech}</p>
                <p className="text-xs text-gray-500 mb-4">{project.date}</p>
                <div className="flex gap-12">
                <a
                    href={project.link2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-500 hover:text-blue-400"
                >
                  View Project <ExternalLink size={16}/>
                </a>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-500 hover:text-blue-400"
                >
                  Paper Resource <ExternalLink size={16}/>
                </a>
                </div>
              </div>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-bold relative inline-block mb-4 mt-10">Achievements</h2>
          {achievements.map((achievement, index) => (
              <div
                  key={index}
                  className={`flex gap-2 mb-2 p-4 rounded ${
                      darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-black'
                  } hover:text-blue-400`}
              >
                <Award/>
                <p className="text-xxl">{achievement.title}</p>
              </div>
          ))}
        </div>


        <style>{`
          h2:hover span {
            transform: scaleX(1);
          }
        `}</style>
      </div>
  );


  const ExperiencePage = () => (

      <div className="animate-fadeIn">
        <div className="grid gap-6">
          {experience.map((exp, index) => (
              <div key={index}
                   className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} flex items-center gap-4`}>
                <div className="w-16 h-16  flex items-center justify-center">
                  <img src={exp.logo} alt={exp.company} className="w-12 h-12 object-contain" />
          </div>
          <div>
            <h3 className="font-bold">{exp.role}</h3>
            <p className="font-medium">{exp.company}</p>
            <p className="text-sm text-gray-500">{exp.duration}</p>
            <p className="text-sm mt-2">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );

  const Certifications = () => (

    <div className="animate-fadeIn">
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {gallery.map((item, index) => (
        <div key={index} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-lg transform hover:scale-105 transition-transform duration-300`}>
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <h3 className="font-bold mb-2 flex gap-2">{item.icon} {item.title}</h3>            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-500 hover:text-blue-400"
          >
            {item.description}<ExternalLink size={16}/>
          </a>
          </div>

        </div>
      ))}
    </div>
    </div>
  );

  const ContactPage = ({darkMode}) => {
    return (
        <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <h2 className="text-xl font-bold mb-6">Get in Touch</h2>
          <div className="space-y-4 ">
            <div className="">
              <div className="flex items-center gap-2 mb-3">
                <User />
              <p className="font-medium">Ayushman Anupam</p>
              </div >
              <div className="flex items-center gap-2 mb-3">
                <Tag />
              <p className="font-medium">Data Scientist</p>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Mail />
              <a href="mailto:ayushmantutu@gmail.com" className="text-blue-400 hover:text-blue-500 font-medium">
                ayushmantutu@gmail.com
              </a>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <MapPin />
              <p className="font-medium">Jamshedpur, Jharkhand</p>
            </div>
            <div>
              <p className="font-medium mt-8">Social Media</p>
              <div className="flex gap-4 mt-2">
                <a href="https://www.linkedin.com/in/ayushman-anupam/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="hover:text-blue-500"/>
                </a>
                <a href="https://github.com/AyushmanGHub" target="_blank" rel="noopener noreferrer">
                  <Github className="hover:text-gray-400"/>
                </a>
                <a href="https://x.com/AyurAyushman" target="_blank" rel="noopener noreferrer">
                  <Twitter className="hover:text-blue-400"/>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="flex items-center text-justify">
              Feel free to reach out if you're interested in discussing a variety of topics, including projects,
              industrial work, academic subjects, or research. I'm open to engaging in meaningful conversations and
              exchanging ideas on these areas. You can contact me through email, which I check regularly, ensuring
              timely responses. Alternatively, you can connect with me on LinkedIn for more networking opportunities. I
              welcome the chance to explore new insights, collaborate on projects, and contribute to ongoing discussions
              in these fields. Your thoughts and inquiries are always valued, and I look forward to connecting and
              sharing knowledge.
            </p>

          </div>
          <p className="mt-12 text-center flex items-center justify-center">
            Made with
            <span className="mx-0.5 animate-bounce">❤️</span>
            <span className="mr-1">by</span>
            <a href="mailto:bikash13763@gmail.com">Bikash</a>
          </p>

        </div>
    );
  };


  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage/>;
      case 'projects':
        return <ProjectsPage/>;
      case 'experience':
        return <ExperiencePage/>;
      case 'gallery':
        return <Certifications/>;
      case 'contact':
        return <ContactPage darkMode={darkMode} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <header className={`fixed top-0 left-0 right-0 z-10 p-4 flex justify-between items-center bg-opacity-95 backdrop-filter backdrop-blur-lg ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} transition-colors duration-300 border-b`}>
        <h1 className="text-2xl font-bold">
          <span id="typed-name"></span>
        </h1>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/ayushman-anupam/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="hover:text-blue-500" />
            </a>
            <a href="https://github.com/ayushmanghub" target="_blank" rel="noopener noreferrer">
              <Github className="hover:text-gray-400" />
            </a>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-700"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-20 pb-8">
        {renderPage()}
      </main>

      <nav className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} p-2 rounded-full shadow-lg`}>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setCurrentPage('home')}
            className={`p-2 rounded-full ${currentPage === 'home' ? 'bg-blue-500 text-white' : ''}`}
            aria-label="Go to Home page"
          >
            <Home size={20} />
          </button>
          <button
            onClick={() => setCurrentPage('projects')}
            className={`p-2 rounded-full ${currentPage === 'projects' ? 'bg-blue-500 text-white' : ''}`}
            aria-label="Go to Projects page"
          >
            <FolderGit size={20} />
          </button>
          <button
            onClick={() => setCurrentPage('experience')}
            className={`p-2 rounded-full ${currentPage === 'experience' ? 'bg-blue-500 text-white' : ''}`}
            aria-label="Go to Experience page"
          >
            <Briefcase size={20} />
          </button>
          <button
            onClick={() => setCurrentPage('gallery')}
            className={`p-2 rounded-full ${currentPage === 'gallery' ? 'bg-blue-500 text-white' : ''}`}
            aria-label="Go to Gallery page"
          >
            <Award size={20} />
          </button>
          <button
            onClick={() => setCurrentPage('contact')}
            className={`p-2 rounded-full ${currentPage === 'contact' ? 'bg-blue-500 text-white' : ''}`}
            aria-label="Go to Contact page"
          >
            <Mail size={20} />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Portfolio;

